import React from "react"
import { Helmet } from "react-helmet"

const Hreflang = ({ siteUrl, paths }) => {
  return (
    <Helmet>
      {paths.map((link, index) => (
        <link
          rel="alternate"
          hreflang={link.locale}
          href={siteUrl + link.value}
          key={index}
        />
      ))}
      <link rel="alternate" hreflang="x-default" href={siteUrl} />
    </Helmet>
  )
}

export default Hreflang
