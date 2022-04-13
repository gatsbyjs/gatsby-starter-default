import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"

export const useLocation = () => {
  const locations = useStaticQuery(graphql`
    query LocationQuery {
      allDatoCmsLocation {
        nodes {
          id
          name
          addressCountry
          addressRegion
          addressLocality
          email
          faxNumber
          coordinates {
            latitude
            longitude
          }
          postalCode
          streetAddress
          telephone
          locale
        }
      }
    }
  `)

  const locale = React.useContext(LanguageSwitcherContext).activeLocale

  const i18nLocations = locations.allDatoCmsLocation.nodes.filter(
    location => {
      console.log("locale",location.locale , locale)
      return location.locale === locale
    }
  )

  return i18nLocations
}
