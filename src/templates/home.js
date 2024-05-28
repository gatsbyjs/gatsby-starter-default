import React from "react"
import { graphql } from "gatsby"
import { Container, Heading } from "@theme-ui/components"
import Layout from "../components/layout"
import { getHomePath } from "../utils/path"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { useFavicon } from "../hooks/useFavicon"

const Home = ({ data: { page, site, footer, menu }, pageContext }) => {
  const locale = pageContext.locale
  console.log(menu.nodes)
  console.log("FOOTER", footer)
  const favicon = useFavicon().site.faviconMetaTags
  const i18nPaths = site.locales.map(locale => {
    return {
      locale: locale,
      value: getHomePath(locale),
    }
  })

  return (
    <Layout
      locale={locale}
      i18nPaths={i18nPaths}
      footerData={footer.nodes}
      menuData={menu.nodes}
    >
      <HelmetDatoCms seo={page.seoMetaTags} favicon={favicon}>
        <html lang={locale} />
      </HelmetDatoCms>
      <Container>
        <Heading as="h1">{page.title}</Heading>
      </Container>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query HomeQuery($locale: String!) {
    page: datoCmsHomePage(locale: $locale) {
      id
      title
      locales
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    site: datoCmsSite {
      locales
    }
    menu: allDatoCmsMenu(
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
    footer: allDatoCmsFooter(
      locale: $locale
      filter: { root: { eq: true }, anchor: { ne: null } }
      sort: { position: ASC }
    ) {
      nodes {
        ...FooterDetails
      }
    }
  }

  fragment FooterDetails on DatoCmsFooter {
    id
    root
    anchor
    position
    link {
      ... on DatoCmsInternalLink {
        id
        anchor
        model {
          apiKey
        }
        ...InternalLinkPages
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
      root
      anchor
      position
      link {
        ... on DatoCmsInternalLink {
          id
          anchor

          model {
            apiKey
          }
          ...InternalLinkPages
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
        root
        anchor
        position
        link {
          ... on DatoCmsInternalLink {
            id
            anchor

            model {
              apiKey
            }
            ...InternalLinkPages
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

  fragment InternalLinkPages on DatoCmsInternalLink {
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
`
