import React from "react"
import { Helmet } from "react-helmet"

const Hreflang = ({ siteUrl, paths }) => {
  return (
    <Helmet>
      {paths.map(link => (
        <link
          rel="alternate"
          hrefLang={link.locale}
          href={siteUrl + link.value}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />
    </Helmet>
  )
}

export default Hreflang
