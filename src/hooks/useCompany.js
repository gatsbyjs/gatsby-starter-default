import { useStaticQuery, graphql } from "gatsby"

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
