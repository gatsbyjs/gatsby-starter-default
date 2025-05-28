/**
 * Netlify Function to verify reCAPTCHA v3 tokens (Free Version)
 * Calculates reliability score and validates user requests
 * Uses process.env for environment variables (works locally and on Netlify)
 */

// Polyfill for fetch in Node.js environment
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args))

exports.handler = async (event, context) => {
  // Only allow POST requests
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

  // Handle CORS preflight
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
    // Parse request body
    const { token, action } = JSON.parse(event.body || "{}")

    // Debug token information
    console.log("🔍 Token Debug Info:", {
      tokenExists: !!token,
      tokenType: typeof token,
      tokenLength: token ? token.length : 0,
      tokenStart: token ? token.substring(0, 20) + "..." : "null",
      action: action,
      requestOrigin: event.headers?.origin || "unknown",
      userAgent: event.headers?.["user-agent"] || "unknown",
    })

    // Validate required parameters
    if (!token) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          error: "reCAPTCHA token is required",
        }),
      }
    }

    if (!action) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          error: "Action parameter is required",
        }),
      }
    }

    // Get environment variables using process.env (works locally and on Netlify)
    const secretKey = process.env.RECAPTCHA_SECRET_KEY
    const siteKey = process.env.GATSBY_RECAPTCHA_SITE_KEY
    const minScore = parseFloat(process.env.RECAPTCHA_MIN_SCORE || "0.5")

    // Log environment check (without exposing secrets)
    console.log("Environment check:", {
      hasSecretKey: !!secretKey,
      hasSiteKey: !!siteKey,
      minScore: minScore,
      nodeEnv: process.env.NODE_ENV,
      context: context.clientContext?.environment || "unknown",
    })

    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY environment variable is not set")
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          error: "Server configuration error: Missing RECAPTCHA_SECRET_KEY",
        }),
      }
    }

    if (!siteKey) {
      console.error("GATSBY_RECAPTCHA_SITE_KEY environment variable is not set")
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          error:
            "Server configuration error: Missing GATSBY_RECAPTCHA_SITE_KEY",
        }),
      }
    }

    console.log(`Verifying reCAPTCHA token for action: ${action}`)

    // Verify with Google reCAPTCHA API (Free Version)
    const verifyUrl = "https://www.google.com/recaptcha/api/siteverify"
    const verifyParams = new URLSearchParams({
      secret: secretKey,
      response: token,
    })

    const verifyResponse = await fetch(verifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: verifyParams.toString(),
    })

    if (!verifyResponse.ok) {
      throw new Error(`reCAPTCHA API returned status: ${verifyResponse.status}`)
    }

    const verifyData = await verifyResponse.json()

    console.log("reCAPTCHA API response:", {
      success: verifyData.success,
      score: verifyData.score,
      action: verifyData.action,
      hostname: verifyData.hostname,
      errorCodes: verifyData["error-codes"],
    })

    // Check if verification was successful
    if (!verifyData.success) {
      console.log("reCAPTCHA verification failed:", verifyData["error-codes"])
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          error: "reCAPTCHA verification failed",
          details: verifyData["error-codes"] || [],
        }),
      }
    }

    // Extract score and validate action
    const score = verifyData.score
    const receivedAction = verifyData.action
    const hostname = verifyData.hostname

    // Check if the action matches
    if (receivedAction !== action) {
      console.log(
        `Action mismatch. Expected: ${action}, Received: ${receivedAction}`
      )
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          score: score,
          error: `Action mismatch. Expected: ${action}, Received: ${receivedAction}`,
        }),
      }
    }

    // Validate hostname for additional security (local development or production)
    const allowedHosts = [
      "localhost",
      "localhost:8000", // Gatsby develop
      "localhost:8888", // Netlify dev
      "127.0.0.1",
      "127.0.0.1:8000", // Gatsby develop on 127.0.0.1
      "127.0.0.1:8888", // Netlify dev on 127.0.0.1
      "0.0.0.0",
      "0.0.0.0:8000", // Gatsby develop on 0.0.0.0
      "0.0.0.0:8888", // Netlify dev on 0.0.0.0
      process.env.URL ? new URL(process.env.URL).hostname : null,
      process.env.DEPLOY_PRIME_URL
        ? new URL(process.env.DEPLOY_PRIME_URL).hostname
        : null,
    ].filter(Boolean)

    console.log("Hostname validation:", {
      received: hostname,
      allowed: allowedHosts,
      isValid: allowedHosts.some(
        host => hostname.includes(host) || host.includes(hostname)
      ),
    })

    // Calculate reliability assessment
    const reliability = calculateReliability(score)

    // Check if score meets minimum threshold
    if (score < minScore) {
      console.log(`Score ${score} is below minimum threshold ${minScore}`)
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          score: score,
          reliability: reliability,
          threshold: minScore,
          error: `reCAPTCHA score ${score} is below minimum threshold ${minScore}`,
        }),
      }
    }

    // Success response
    console.log(
      `reCAPTCHA verification successful. Score: ${score}, Reliability: ${reliability.level}, Hostname: ${hostname}`
    )

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: true,
        score: score,
        reliability: reliability,
        action: receivedAction,
        hostname: hostname,
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || "unknown",
      }),
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: false,
        error: "Internal server error during reCAPTCHA verification",
        details: error.message,
      }),
    }
  }
}

/**
 * Calculate reliability assessment based on reCAPTCHA score
 * @param {number} score - reCAPTCHA score (0.0-1.0)
 * @returns {Object} Reliability assessment
 */
function calculateReliability(score) {
  if (score >= 0.9) {
    return {
      level: "VERY_HIGH",
      description: "Molto probabilmente un utente umano genuino",
      color: "green",
      percentage: Math.round(score * 100),
    }
  } else if (score >= 0.7) {
    return {
      level: "HIGH",
      description: "Probabilmente un utente umano",
      color: "lightgreen",
      percentage: Math.round(score * 100),
    }
  } else if (score >= 0.5) {
    return {
      level: "MEDIUM",
      description: "Utente potenzialmente genuino ma da monitorare",
      color: "orange",
      percentage: Math.round(score * 100),
    }
  } else if (score >= 0.3) {
    return {
      level: "LOW",
      description: "Comportamento sospetto, probabile bot",
      color: "red",
      percentage: Math.round(score * 100),
    }
  } else {
    return {
      level: "VERY_LOW",
      description: "Molto probabilmente un bot o attività automatizzata",
      color: "darkred",
      percentage: Math.round(score * 100),
    }
  }
}
