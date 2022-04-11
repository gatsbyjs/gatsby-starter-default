/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"

const iubendaCsIt = `var _iub = _iub || [];
_iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"ccpaApplies":true,"consentOnContinuedBrowsing":false,"enableCcpa":true,"floatingPreferencesButtonDisplay":"bottom-right","invalidateConsentWithoutLog":true,"perPurposeConsent":true,"siteId":2608064,"whitelabel":false,"cookiePolicyId":50282401,"lang":"it", "banner":{ "acceptButtonDisplay":true,"closeButtonRejects":true,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-bottom-center","rejectButtonDisplay":true }};`

export const onRenderBody = ({ pathname, setPostBodyComponents }, options) => {
    setPostBodyComponents([
      React.createElement("div", {
        // see https://github.com/gatsbyjs/gatsby/issues/6299
        key: "gatsby-plugin-iubenda-cookie-footer",
        dangerouslySetInnerHTML: {
          __html: `
  <script type="text/javascript" src="//cdn.iubenda.com/cs/tcf/stub.js"></script><script type="text/javascript">
      ${iubendaCsIt}
  </script><script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async> </script>
      `,
        },
      }),
    ])
  }
  