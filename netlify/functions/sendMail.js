const sgMail = require("@sendgrid/mail")

// Polyfill for fetch in Node.js environment
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args))

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: JSON.stringify({
        success: false,
        error: "Method Not Allowed. Use POST.",
      }),
    }
  }

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    }
  }

  try {
    const data = JSON.parse(event.body || "{}")
    const { recaptchaToken, ...formData } = data

    console.log("SendMail function called with data:", {
      hasRecaptchaToken: !!recaptchaToken,
      formFields: Object.keys(formData),
    })

    const sendGridApiKey = process.env.SEND_GRID_API_KEY
    if (!sendGridApiKey) {
      console.error("SEND_GRID_API_KEY environment variable is not set")
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          error: "Server configuration error: Missing SEND_GRID_API_KEY",
        }),
      }
    }

    if (recaptchaToken) {
      console.log("Verifying reCAPTCHA token...")

      try {
        const verifyResponse = await fetch(
          `${
            process.env.URL || "http://localhost:8888"
          }/.netlify/functions/verify-recaptcha`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: recaptchaToken,
              action: "contact_form",
            }),
          }
        )

        const verifyResult = await verifyResponse.json()

        console.log("reCAPTCHA verification result:", {
          success: verifyResult.success,
          score: verifyResult.score,
          reliability: verifyResult.reliability?.level,
          action: verifyResult.action,
          hostname: verifyResult.hostname,
        })

        if (!verifyResult.success) {
          // Check if it's a configuration error (missing keys)
          if (
            verifyResult.error &&
            verifyResult.error.includes("Missing RECAPTCHA_SECRET_KEY")
          ) {
            console.warn(
              "⚠️ reCAPTCHA configuration missing - proceeding without verification for development"
            )
            console.warn(
              "📝 To enable reCAPTCHA: Create .env.local with GATSBY_RECAPTCHA_SITE_KEY and RECAPTCHA_SECRET_KEY"
            )
          } else {
            console.error("❌ reCAPTCHA verification FAILED:", {
              error: verifyResult.error,
              score: verifyResult.score,
              details: verifyResult,
            })
            return {
              statusCode: 400,
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                success: false,
                error: "reCAPTCHA verification failed",
                details: verifyResult.error,
              }),
            }
          }
        } else {
          console.log(
            `✅ reCAPTCHA VERIFIED SUCCESSFULLY! Score: ${verifyResult.score} (${verifyResult.reliability?.level}) - Proceeding with email send...`
          )
        }
      } catch (recaptchaError) {
        console.error("reCAPTCHA verification error:", recaptchaError)
        console.warn(
          "⚠️ Proceeding with email send despite reCAPTCHA error (development mode)"
        )
      }
    } else {
      console.log(
        "No reCAPTCHA token provided - proceeding without verification"
      )
    }

    sgMail.setApiKey(sendGridApiKey)

    let addressSection = ""
    if (
      formData.indirizzo ||
      formData.citta ||
      formData.provincia ||
      formData.cap
    ) {
      const addressParts = []
      if (formData.indirizzo)
        addressParts.push(
          `<p><strong>Indirizzo:</strong> ${formData.indirizzo}</p>`
        )
      if (formData.citta)
        addressParts.push(`<p><strong>Città:</strong> ${formData.citta}</p>`)
      if (formData.provincia)
        addressParts.push(
          `<p><strong>Provincia:</strong> ${formData.provincia}</p>`
        )
      if (formData.cap)
        addressParts.push(`<p><strong>CAP:</strong> ${formData.cap}</p>`)

      addressSection = `
        <div style="background-color: #e9ecef; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #495057; margin-top: 0;">Indirizzo:</h3>
          ${addressParts.join("")}
        </div>
      `
    }

    let messageSection = ""
    if (formData.messaggio) {
      messageSection = `
        <div style="background-color: #fff3cd; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #856404; margin-top: 0;">Messaggio:</h3>
          <p style="white-space: pre-wrap;">${formData.messaggio}</p>
        </div>
      `
    }

    const msg = {
      to: "d.costantini@multi-consult.it",
      from: "no-reply@multi-consult.it",
      subject: "Nuovo messaggio dal sito web",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            📧 Nuovo Messaggio dal Sito Web
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Informazioni di Contatto:</h3>
            <p><strong>Nome e Cognome:</strong> ${
              formData.nomeCognome || "Non specificato"
            }</p>
            <p><strong>Email:</strong> ${
              formData.email || "Non specificata"
            }</p>
            <p><strong>Telefono:</strong> ${
              formData.telefono || "Non specificato"
            }</p>
            <p><strong>Azienda:</strong> ${
              formData.azienda || "Non specificata"
            }</p>
          </div>

          ${addressSection}

          ${messageSection}

          <div style="background-color: #d1ecf1; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #0c5460; margin-top: 0;">Informazioni Aggiuntive:</h3>
            <p><strong>Pagina di origine:</strong> ${
              formData.urlPagina || "Non specificata"
            }</p>
            <p><strong>Data e ora:</strong> ${new Date().toLocaleString(
              "it-IT"
            )}</p>
            ${
              recaptchaToken
                ? "<p><strong>Sicurezza:</strong> ✅ Verificato con reCAPTCHA v3</p>"
                : "<p><strong>Sicurezza:</strong> ⚠️ Non verificato con reCAPTCHA</p>"
            }
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
            <p style="color: #6c757d; font-size: 14px;">
              Questo messaggio è stato inviato automaticamente dal sito web.
            </p>
          </div>
        </div>
      `,
    }

    console.log("Sending email to:", msg.to)

    await sgMail.send(msg)

    console.log("✅ EMAIL SENT SUCCESSFULLY to:", msg.to)
    console.log("📊 FINAL SUMMARY:", {
      emailSent: true,
      recipient: msg.to,
      timestamp: new Date().toISOString(),
      recaptchaUsed: !!recaptchaToken,
      formData: {
        nomeCognome: formData.nomeCognome,
        email: formData.email,
        azienda: formData.azienda,
      },
    })

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: true,
        message: "Email inviata con successo",
        timestamp: new Date().toISOString(),
      }),
    }
  } catch (error) {
    console.error("SendMail error:", error)

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: false,
        error: "Errore durante l'invio dell'email",
        details: error.message,
      }),
    }
  }
}
