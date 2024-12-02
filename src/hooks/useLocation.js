import { useStaticQuery, graphql } from "gatsby"

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
        }
      }
    }
  `)

  return locations.allDatoCmsLocation.nodes
}
