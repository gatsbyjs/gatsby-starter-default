/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import "./src/assets/style/layout.css"

import React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

export const wrapRootElement = ({ element }) => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
    scriptProps={{
      async: false, // Load synchronously for better reliability
      defer: false,
      appendTo: "head", // Append to head for better loading
    }}
  >
    {element}
  </GoogleReCaptchaProvider>
)
