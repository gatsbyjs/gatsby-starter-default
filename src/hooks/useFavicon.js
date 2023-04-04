import { useStaticQuery, graphql } from "gatsby"

export const useFavicon = () => {
  const favicon = useStaticQuery(graphql`
    query FaviconQuery {
      site: datoCmsSite {
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
    }
  `)

  return favicon
}
