import { useCallback } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

/**
 * Custom hook to handle reCAPTCHA v3 verification
 * Provides easy integration with backend verification
 */
export const useRecaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  /**
   * Verify reCAPTCHA token with backend
   * @param {string} action - The action name for reCAPTCHA
   * @returns {Promise<Object>} Verification result with score and reliability
   */
  const verifyRecaptcha = useCallback(
    async (action = "submit") => {
      if (!executeRecaptcha) {
        throw new Error(
          "reCAPTCHA not available. Make sure GoogleReCaptchaProvider is properly configured."
        )
      }

      try {
        // Generate reCAPTCHA token
        console.log(`Generating reCAPTCHA token for action: ${action}`)
        const token = await executeRecaptcha(action)

        if (!token) {
          throw new Error("Failed to generate reCAPTCHA token")
        }

        console.log("reCAPTCHA token generated, verifying with backend...")

        // Send token to backend for verification
        const response = await fetch("/.netlify/functions/verify-recaptcha", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: token,
            action: action,
          }),
        })

        const result = await response.json()

        if (!response.ok) {
          console.error("Backend verification failed:", result)
          throw new Error(result.error || "Backend verification failed")
        }

        console.log("reCAPTCHA verification successful:", {
          score: result.score,
          reliability: result.reliability.level,
          percentage: result.reliability.percentage,
        })

        return {
          success: true,
          score: result.score,
          reliability: result.reliability,
          action: result.action,
          hostname: result.hostname,
          timestamp: result.timestamp,
        }
      } catch (error) {
        console.error("reCAPTCHA verification error:", error)

        return {
          success: false,
          error: error.message || "reCAPTCHA verification failed",
          score: 0,
          reliability: {
            level: "ERROR",
            description: "Errore durante la verifica",
            color: "red",
            percentage: 0,
          },
        }
      }
    },
    [executeRecaptcha]
  )

  /**
   * Check if reCAPTCHA is available and ready
   */
  const isReady = useCallback(() => {
    return executeRecaptcha !== undefined
  }, [executeRecaptcha])

  return {
    verifyRecaptcha,
    isReady,
  }
}
