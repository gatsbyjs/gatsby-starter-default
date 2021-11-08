import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"

export const useMenu = () => {
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
                ... on DatoCmsProductCategory {
                  ...ProductCategoryPageDetails
                }
                ... on DatoCmsProduct {
                  ...ProductPageDetails
                  ...AllProductSlugLocales
                }
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
                  ... on DatoCmsProductCategory {
                    ...ProductCategoryPageDetails
                  }
                  ... on DatoCmsProduct {
                    ...ProductPageDetails
                    ...AllProductSlugLocales
                  }
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
                    ... on DatoCmsProductCategory {
                      ...ProductCategoryPageDetails
                    }
                    ... on DatoCmsProduct {
                      ...ProductPageDetails
                      ...AllProductSlugLocales
                    }
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

  const i18nMenu = menu.allDatoCmsMenu.nodes.filter(
    link => link.locale === locale
  )

  return i18nMenu
}
