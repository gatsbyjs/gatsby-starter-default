import React from "react"
import { Helmet } from "react-helmet"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"

const Canonical = ({ siteUrl, paths }) => {
  const locale = React.useContext(LanguageSwitcherContext).activeLocale
  let path = paths.find(x => x.locale === locale)
    ? paths.find(x => x.locale === locale).value
    : null

  return (
    <Helmet>
      <link rel="canonical" href={siteUrl + path} />
      <meta property="og:url" content={siteUrl + path} />
    </Helmet>
  )
}

export default Canonical
