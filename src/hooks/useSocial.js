import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"

export const useSocial = () => {
  const socials = useStaticQuery(graphql`
    query SocialQuery {
      allDatoCmsSocial {
        nodes {
          id
          locale
          facebook
          linkedin
          instagram
          youtube
          twitter
        }
      }
    }
  `)
  
  const locale = React.useContext(LanguageSwitcherContext).activeLocale
  const i18nSocial = socials.allDatoCmsSocial.nodes.filter(
    social => {
      return social.locale === locale
    }
  )

  return i18nSocial[0]
}
