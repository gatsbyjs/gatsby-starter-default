import { graphql, useStaticQuery } from "gatsby"

export const useSiteData = type => {
  const { site } = useStaticQuery(
    graphql`
      query SiteDataQuery {
        site: site {
          siteMetadata {
            description
            title

            siteMenu {
              icon
              label
              url
              isNewWindow
              isHidden
            }
          }
        }
      }
    `
  )

  switch (type) {
    case "siteMenu":
      return site.siteMetadata.siteMenu

    default:
      return site.siteMetadata
  }
}

export default useSiteData
