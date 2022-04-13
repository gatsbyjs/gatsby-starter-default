import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"

export const useCompany = () => {
  const menu = useStaticQuery(graphql`
    query CompanyQuery {
      allDatoCmsCompany {
        nodes {
          id
          locale
          description
          legalName
          addresses {
            id
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
            
          }
          vatId
          shareCapital
          registrationNumber
          model {
            apiKey
          }
        }
      }
    }
  `)

  const locale = React.useContext(LanguageSwitcherContext).activeLocale

  const i18nCompany = menu.allDatoCmsCompany.nodes.filter(
    company => company.locale === locale
  )

  return i18nCompany[0]
}
