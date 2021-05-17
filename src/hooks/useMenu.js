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
          locale
          root
          anchor
          link {
            ... on DatoCmsInternalLink {
              id
              anchor
              locale
              model {
                apiKey
              }
              link {
                ... on DatoCmsBlogPage {
                  ...BlogDetails
                }
                ... on DatoCmsPage {
                  ...PageDetails
                  ...PageTreeParent
                  ...AllSlugLocales
                }
                ... on DatoCmsArticle {
                  ...ArticleDetails
                  ...ArticleAllSlugLocales
                }
                ... on DatoCmsArticleCategory {
                  ...ArticleCategoryDetails
                  ...ArticleCategoryAllSlugLocales
                }
              }
            }
            ... on DatoCmsExternalLink {
              id
              anchor
              url
              model {
                apiKey
              }
            }
          }
          treeChildren {
            id
            locale
            root
            anchor
            link {
              ... on DatoCmsInternalLink {
                id
                anchor
                locale
                model {
                  apiKey
                }
                link {
                  ... on DatoCmsBlogPage {
                    ...BlogDetails
                  }
                  ... on DatoCmsPage {
                    ...PageDetails
                    ...PageTreeParent
                    ...AllSlugLocales
                  }
                  ... on DatoCmsArticle {
                    ...ArticleDetails
                    ...ArticleAllSlugLocales
                  }
                  ... on DatoCmsArticleCategory {
                    ...ArticleCategoryDetails
                    ...ArticleCategoryAllSlugLocales
                  }
                }
              }
              ... on DatoCmsExternalLink {
                id
                anchor
                url
                model {
                  apiKey
                }
              }
            }
            treeChildren {
              id
              locale
              root
              anchor
              link {
                ... on DatoCmsInternalLink {
                  id
                  anchor
                  locale
                  model {
                    apiKey
                  }
                  link {
                    ... on DatoCmsBlogPage {
                      ...BlogDetails
                    }
                    ... on DatoCmsPage {
                      ...PageDetails
                      ...PageTreeParent
                      ...AllSlugLocales
                    }
                    ... on DatoCmsArticle {
                      ...ArticleDetails
                      ...ArticleAllSlugLocales
                    }
                    ... on DatoCmsArticleCategory {
                      ...ArticleCategoryDetails
                      ...ArticleCategoryAllSlugLocales
                    }
                  }
                }
                ... on DatoCmsExternalLink {
                  id
                  anchor
                  url
                  model {
                    apiKey
                  }
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

  // console.log(i18nMenu)

  return i18nMenu
}
