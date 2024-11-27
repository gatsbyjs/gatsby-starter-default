import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"
import LanguageSwitcher from "../components/languageSwitcher"
export const useCompany = () => {
  const company = useStaticQuery(graphql`
    query CompanyQuery {
      allDatoCmsCompany {
        nodes {
          id
          locales
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

  return company.allDatoCmsCompany.nodes[0]
}
