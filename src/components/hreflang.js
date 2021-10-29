import React from "react"
import { Helmet } from "react-helmet"

const Hreflang = ({ siteUrl, paths }) => {
  console.log(paths);
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
      {paths.map(
        (link, index) =>
          link.locale === "en" && (
            <link
              rel="alternate"
              hreflang="x-default"
              href={siteUrl + link.value}
            />
          )
      )}
    </Helmet>
  )
}

export default Hreflang