/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import "./src/assets/style/layout.css"

import React from "react"
import {
    GoogleReCaptchaProvider
  } from 'react-google-recaptcha-v3';

export const wrapRootElement = ({ element }) => (
    <GoogleReCaptchaProvider reCaptchaKey="6Lfb1fwcAAAAADmyEPNghVeB3dowQdIP23wDh_G2">
        {element}
    </GoogleReCaptchaProvider>
)
