import React, { useState } from "react"
import {
  Box,
  Text,
  Heading,
  Grid,
  Input,
  Textarea,
  Checkbox,
  Label,
  Button,
} from "@theme-ui/components"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

import "leaflet/dist/leaflet.css"
import { i18nContext } from "../../context/i18nContext"

const ContactForm = ({
  block,
  title,
  subtitle,
  privacyPolicyDescription,
  newsletterDescription,
}) => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const isBrowser = typeof window !== "undefined"

  // Debug reCAPTCHA availability
  React.useEffect(() => {
    console.log("🔍 reCAPTCHA Debug Info:", {
      executeRecaptcha: !!executeRecaptcha,
      siteKey: process.env.GATSBY_RECAPTCHA_SITE_KEY ? "✅ Set" : "❌ Missing",
      grecaptcha:
        isBrowser && window.grecaptcha ? "✅ Loaded" : "❌ Not loaded",
    })
  }, [executeRecaptcha, isBrowser])

  const [formData, setFormData] = useState({
    nomeCognome: "",
    azienda: "",
    indirizzo: "",
    citta: "",
    provincia: "",
    cap: "",
    telefono: "",
    email: "",
    messaggio: "",
    urlPagina: isBrowser && window.location.href,
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const sendMail = async event => {
    event.preventDefault()
    setLoading(true)
    setError("")

    try {
      let recaptchaToken = null

      // Try to execute reCAPTCHA if available
      if (executeRecaptcha) {
        try {
          console.log("🔄 Executing reCAPTCHA...")
          recaptchaToken = await executeRecaptcha("contact_form")

          console.log("🔍 reCAPTCHA Token Debug:", {
            tokenExists: !!recaptchaToken,
            tokenLength: recaptchaToken ? recaptchaToken.length : 0,
            tokenStart: recaptchaToken
              ? recaptchaToken.substring(0, 20) + "..."
              : "null",
            tokenType: typeof recaptchaToken,
          })

          if (!recaptchaToken) {
            console.warn(
              "⚠️ reCAPTCHA token is empty - proceeding without verification"
            )
          } else {
            console.log("✅ reCAPTCHA token obtained successfully")
          }
        } catch (recaptchaError) {
          console.error("❌ reCAPTCHA execution failed:", recaptchaError)
          console.warn("Proceeding without reCAPTCHA verification")
          recaptchaToken = null
        }
      } else {
        console.warn(
          "⚠️ reCAPTCHA not available - proceeding without verification"
        )
        // You can choose to either:
        // 1. Proceed without reCAPTCHA (current behavior)
        // 2. Block the form submission
        // For now, we'll proceed but log the warning
      }

      console.log("📧 Sending email...")

      // Prepare data for sending
      const emailData = {
        ...formData,
        recaptchaToken: recaptchaToken,
      }

      console.log("📤 Email data being sent:", {
        hasRecaptchaToken: !!emailData.recaptchaToken,
        formFields: Object.keys(formData),
        recaptchaTokenLength: emailData.recaptchaToken
          ? emailData.recaptchaToken.length
          : 0,
      })

      // Send email via our Netlify function
      const response = await fetch("/.netlify/functions/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      })

      const result = await response.json()

      console.log("📨 SendMail response:", result)

      if (result.success) {
        setSuccess(true)

        // Google Tag Manager event
        if (isBrowser && window.dataLayer) {
          window.dataLayer.push({
            event: "formSubmission",
            formType: "Contact",
          })
        }

        // Reset form
        setFormData({
          nomeCognome: "",
          azienda: "",
          indirizzo: "",
          citta: "",
          provincia: "",
          cap: "",
          telefono: "",
          email: "",
          messaggio: "",
          urlPagina: isBrowser && window.location.href,
        })
      } else {
        throw new Error(result.error || "Errore durante l'invio dell'email")
      }
    } catch (err) {
      console.error("❌ Form submission error:", err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <i18nContext.Consumer>
      {t => (
        <>
          <form onSubmit={sendMail}>
            <Box>
              <Heading sx={{ pb: !subtitle && 3 }}>{title}</Heading>
              {subtitle && (
                <Box sx={{ pb: [5, 5, 5, 6] }}>
                  <Text dangerouslySetInnerHTML={{ __html: subtitle }} />
                </Box>
              )}

              {/* Error Display */}
              {error && (
                <Box
                  sx={{
                    p: 3,
                    mb: 4,
                    backgroundColor: "#f8d7da",
                    border: "1px solid #f5c6cb",
                    borderRadius: "4px",
                    color: "#721c24",
                  }}
                >
                  <Text sx={{ fontWeight: "bold" }}>❌ Errore:</Text>
                  <br />
                  <Text>{error}</Text>
                </Box>
              )}

              {/* Success Display */}
              {success && (
                <Box
                  sx={{
                    p: 3,
                    mb: 4,
                    backgroundColor: "#d4edda",
                    border: "1px solid #c3e6cb",
                    borderRadius: "4px",
                    color: "#155724",
                  }}
                >
                  <Text sx={{ fontWeight: "bold" }}>✅ Successo!</Text>
                  <br />
                  <Text>Email inviata con successo!</Text>
                  <br />
                  <Text sx={{ fontSize: 0, mt: 2, fontStyle: "italic" }}>
                    Controlla la console del browser per vedere i dettagli del
                    reCAPTCHA score.
                  </Text>
                </Box>
              )}

              <Grid
                sx={{
                  flexWrap: "wrap",
                  flexDirection: "column",
                  pb: [6, 6, 0, 0],
                }}
                gap={[0, 0, 0, 0]}
              >
                <Box
                  sx={{
                    pb: [4, 4, 4, 4],
                    width: ["100%", "100%"],
                  }}
                >
                  <Input
                    onChange={e =>
                      setFormData(prevState => ({
                        ...prevState,
                        nomeCognome: e.target.value,
                      }))
                    }
                    value={formData.nomeCognome}
                    name={t.formInputTexts.fullName}
                    placeholder={t.formInputTexts.fullName}
                    variant="inputs.primary"
                    required
                  />
                </Box>
                <Box
                  sx={{
                    pb: [4, 4, 4, 4],
                    width: ["100%", "100%"],
                  }}
                >
                  <Input
                    onChange={e =>
                      setFormData(prevState => ({
                        ...prevState,
                        azienda: e.target.value,
                      }))
                    }
                    value={formData.azienda}
                    name={t.formInputTexts.company}
                    placeholder={t.formInputTexts.company}
                    variant="inputs.primary"
                    required
                  />
                </Box>
                <Grid columns={[1, 2]}>
                  <Box
                    sx={{
                      pb: [4, 4, 4, 4],
                      width: ["100%", "100%"],
                    }}
                  >
                    <Input
                      onChange={e =>
                        setFormData(prevState => ({
                          ...prevState,
                          indirizzo: e.target.value,
                        }))
                      }
                      value={formData.indirizzo}
                      name={t.formInputTexts.address}
                      placeholder={t.formInputTexts.address}
                      variant="inputs.primary"
                      required
                    />
                  </Box>
                  <Box
                    sx={{
                      pb: [4, 4, 4, 4],
                      width: ["100%", "100%"],
                    }}
                  >
                    <Input
                      onChange={e =>
                        setFormData(prevState => ({
                          ...prevState,
                          citta: e.target.value,
                        }))
                      }
                      value={formData.citta}
                      name={t.formInputTexts.city}
                      placeholder={t.formInputTexts.city}
                      variant="inputs.primary"
                      required
                    />
                  </Box>
                </Grid>

                <Grid columns={[1, "1fr .3fr"]}>
                  <Box
                    sx={{
                      pb: [4, 4, 4, 4],
                      width: ["100%", "100%"],
                    }}
                  >
                    <Input
                      onChange={e =>
                        setFormData(prevState => ({
                          ...prevState,
                          provincia: e.target.value,
                        }))
                      }
                      value={formData.provincia}
                      name={t.formInputTexts.province}
                      placeholder={t.formInputTexts.province}
                      variant="inputs.primary"
                      required
                    />
                  </Box>
                  <Box
                    sx={{
                      pb: [4, 4, 4, 4],
                      width: ["100%", "100%"],
                    }}
                  >
                    <Input
                      onChange={e =>
                        setFormData(prevState => ({
                          ...prevState,
                          cap: e.target.value,
                        }))
                      }
                      value={formData.cap}
                      name={t.formInputTexts.zipCode}
                      placeholder={t.formInputTexts.zipCode}
                      type="text"
                      inputmode="numeric"
                      pattern="[0-9]{5}"
                      variant="inputs.primary"
                      required
                    />
                  </Box>
                </Grid>

                <Grid columns={[1, 2]}>
                  <Box
                    sx={{
                      pb: [4, 4, 4, 4],
                      width: ["100%", "100%"],
                    }}
                  >
                    <Input
                      onChange={e =>
                        setFormData(prevState => ({
                          ...prevState,
                          telefono: e.target.value,
                        }))
                      }
                      value={formData.telefono}
                      name={t.formInputTexts.phone}
                      placeholder={t.formInputTexts.phone}
                      inputmode="tel"
                      variant="inputs.primary"
                      required
                    />
                  </Box>
                  <Box
                    sx={{
                      pb: [4, 4, 4, 4],
                      width: ["100%", "100%"],
                    }}
                  >
                    <Input
                      onChange={e =>
                        setFormData(prevState => ({
                          ...prevState,
                          email: e.target.value,
                        }))
                      }
                      value={formData.email}
                      name="email"
                      type="email"
                      placeholder="Email"
                      variant="inputs.primary"
                      required
                    />
                  </Box>
                </Grid>

                <Textarea
                  sx={{
                    fontFamily: "body",
                    fontSize: [2],
                  }}
                  onChange={e =>
                    setFormData(prevState => ({
                      ...prevState,
                      messaggio: e.target.value,
                    }))
                  }
                  value={formData.messaggio}
                  name={t.formInputTexts.message}
                  placeholder={t.formInputTexts.message}
                  variant="inputs.primary"
                  type="textarea"
                />
                <Box sx={{ py: 2 }}>
                  <LabeledCheckbox required={true}>
                    <Box
                      sx={{ p: { mt: 2, mb: 0, fontSize: [0] } }}
                      dangerouslySetInnerHTML={{
                        __html: privacyPolicyDescription,
                      }}
                    />
                  </LabeledCheckbox>
                  <LabeledCheckbox>
                    <Box
                      sx={{ p: { mt: 0, mb: 0, fontSize: [0] } }}
                      dangerouslySetInnerHTML={{
                        __html: newsletterDescription,
                      }}
                    />
                  </LabeledCheckbox>
                </Box>

                {!success ? (
                  <Button
                    type="submit"
                    sx={{ mt: [3, 3, 3, 3] }}
                    variant="buttons.full"
                    disabled={loading}
                  >
                    <i18nContext.Consumer>
                      {t => (
                        <>
                          {loading ? "🔄 Invio in corso..." : t.sendRequestForm}
                        </>
                      )}
                    </i18nContext.Consumer>
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    sx={{ mt: [3, 3, 3, 3] }}
                    variant="buttons.full"
                    disabled
                  >
                    ✅ {t.requestSent}
                  </Button>
                )}

                {/* reCAPTCHA Info */}
                <Box
                  sx={{
                    mt: 3,
                    p: 2,
                    backgroundColor: "#f8f9fa",
                    borderRadius: "4px",
                    fontSize: 0,
                    color: "#6c757d",
                    textAlign: "center",
                  }}
                >
                  <Text>
                    🛡️ Questo modulo è protetto da reCAPTCHA v3 per garantire la
                    sicurezza.
                  </Text>
                  {!executeRecaptcha && (
                    <Text sx={{ mt: 1, fontStyle: "italic", color: "#856404" }}>
                      ⚠️ Modalità sviluppo: reCAPTCHA non configurato
                    </Text>
                  )}
                </Box>
              </Grid>
            </Box>
          </form>
        </>
      )}
    </i18nContext.Consumer>
  )
}

const LabeledCheckbox = ({ children, defaultChecked = false, ...props }) => {
  const [checked, setChecked] = useState(defaultChecked)
  return (
    <Label
      sx={{
        display: "flex",
        alignItems: "center",
        color: "text",
        svg: {
          color: "primary",
        },
        mt: [3, 3, 3, 3],
      }}
    >
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
        {...props}
      />
      {children}
    </Label>
  )
}

export default ContactForm
