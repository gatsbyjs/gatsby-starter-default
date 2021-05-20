import React from "react"
import { Helmet } from "react-helmet"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"

const Canonical = ({ paths }) => {
  const locale = React.useContext(LanguageSwitcherContext).activeLocale
  let path = paths.find(x => x.locale === locale).value
  return (
    <Helmet>
      <link rel="canonical" href={path} />
    </Helmet>
  )
}

export default Canonical
