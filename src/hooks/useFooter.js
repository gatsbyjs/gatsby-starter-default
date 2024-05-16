import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"

export const useFooter = () => {
  const footer = useStaticQuery(graphql`
    query FooterQuery {
      allDatoCmsFooter(
        filter: { root: { eq: true }, anchor: { ne: null } }
        sort: { position: ASC }
      ) {
        nodes {
          id
          locales
          root
          anchor
          link {
            ... on DatoCmsInternalLink {
              id
              anchor
              locales
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
            locales
            root
            anchor
            position
            link {
              ... on DatoCmsInternalLink {
                id
                anchor
                locales
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
              locales
              root
              anchor
              link {
                ... on DatoCmsInternalLink {
                  id
                  anchor
                  locales
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

  return footer.allDatoCmsFooter.nodes
}
