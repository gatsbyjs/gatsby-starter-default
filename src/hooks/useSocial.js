import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"

export const useSocial = () => {
  const socials = useStaticQuery(graphql`
    query SocialQuery {
      allDatoCmsSocial {
        nodes {
          id
          locales
          facebook
          linkedin
          instagram
          youtube
          twitter
        }
      }
    }
  `)
  
  return socials.allDatoCmsSocial.nodes[0]
}
