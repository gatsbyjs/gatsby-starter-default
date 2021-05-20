import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"

export const useFooter = () => {
  const menu = useStaticQuery(graphql`
    query FooterQuery {
      allDatoCmsFooter(
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

  const locale = React.useContext(LanguageSwitcherContext).activeLocale

  const i18nFooter = menu.allDatoCmsFooter.nodes.filter(
    link => link.locale === locale
  )

  return i18nFooter
}
