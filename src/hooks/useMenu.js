import { useStaticQuery, graphql } from "gatsby"

export const useMenu = lang => {
  const menu = useStaticQuery(graphql`
    query MenuQuery {
      allDatoCmsMenu(
        filter: { root: { eq: true }, anchor: { ne: null } }
        sort: { fields: position, order: ASC }
      ) {
        nodes {
          id
          anchor
          locale
          root
          link {
            ... on DatoCmsPage {
              ...PageDetails
              ...PageTreeParent
              ...AllSlugLocales
            }
            ... on DatoCmsExternalLink {
              id
              anchor
              url
              model {
                apiKey
              }
            }
            ... on DatoCmsBlogPage {
              ...BlogDetails
            }
            ... on DatoCmsArticle {
              ...ArticleDetails
            }
          }
          treeChildren {
            id
            anchor
            locale
            link {
              ... on DatoCmsPage {
                ...PageDetails
                ...PageTreeParent
                ...AllSlugLocales
              }
              ... on DatoCmsExternalLink {
                id
                anchor
                url
                model {
                  apiKey
                }
              }
              ... on DatoCmsBlogPage {
                ...BlogDetails
              }
              ... on DatoCmsArticle {
                ...ArticleDetails
              }
            }
            treeChildren {
              id
              anchor
              locale
              link {
                ... on DatoCmsPage {
                  ...PageDetails
                  ...PageTreeParent
                  ...AllSlugLocales
                }
                ... on DatoCmsExternalLink {
                  id
                  anchor
                  url
                  model {
                    apiKey
                  }
                }
                ... on DatoCmsBlogPage {
                  ...BlogDetails
                }
                ... on DatoCmsArticle {
                  ...ArticleDetails
                }
              }
            }
          }
        }
      }
    }
  `)

  const i18nMenu = menu.allDatoCmsMenu.nodes.filter(
    link => link.locale === lang
  )

  //   console.log(i18nMenu)

  return i18nMenu
}
