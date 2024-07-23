import React from "react"
import { graphql } from "gatsby"
import { Container, Heading } from "@theme-ui/components"
import Layout from "../components/layout"
import { getHomePath } from "../utils/path"
import { HelmetDatoCms } from "gatsby-source-datocms"

import HomeHero from "./homeHero"

const Home = ({ data: { page, site, footer, menu }, pageContext }) => {
  const locale = pageContext.locale
  console.log(menu.nodes)
  console.log("FOOTER", footer)
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
      <HelmetDatoCms seo={page.seoMetaTags}>
        <html lang={locale} />
      </HelmetDatoCms>
      <HomeHero page={page} />

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
      model {
        apiKey
      }

      heroImage {
        alt
        title
        mimeType
        blurhash
        customData
        video {
          streamingUrl
          thumbnailUrl(format: jpg)
          mp4Url(exactRes: low)
          muxPlaybackId
        }
        gatsbyImageData(width: 1920, placeholder: BLURRED)
      }
      locales
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    site: datoCmsSite {
      locales
    }

    menu: allDatoCmsMenu(
      locale: $locale
      filter: { root: { eq: true }, locales: { eq: $locale } }
      sort: { position: ASC }
    ) {
      nodes {
        ...MenuDetails
      }
    }

    footer: allDatoCmsFooter(
      locale: $locale
      filter: { root: { eq: true }, locales: { eq: $locale } }
      sort: { position: ASC }
    ) {
      nodes {
        ...FooterDetails
      }
    }
  }

  fragment MenuDetails on DatoCmsMenu {
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
            id
            locales
            title
            slug
            description
            _allSlugLocales {
              value
              locale
            }
            model {
              apiKey
            }
          }
          ... on DatoCmsProduct {
            ...ProductPageDetails
            ...AllProductSlugLocales
          }
          ... on DatoCmsBlogPage {
            ...BlogDetails
          }
          ... on DatoCmsPage {
            id
            locales
            title
            slug
            root
            model {
              apiKey
            }
            ...PageTreeParent
            ...AllSlugLocales
          }
          ... on DatoCmsArticle {
            id
            locales
            title
            slug
            model {
              apiKey
            }
            category {
              title
              slug
              ...ArticleCategoryAllSlugLocales
            }
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
              id
              locales
              title
              slug
              description
              _allSlugLocales {
                value
                locale
              }
              model {
                apiKey
              }
            }
            ... on DatoCmsProduct {
              ...ProductPageDetails
              ...AllProductSlugLocales
            }
            ... on DatoCmsBlogPage {
              ...BlogDetails
            }
            ... on DatoCmsPage {
              id
              locales
              title
              slug
              root
              model {
                apiKey
              }
              ...PageTreeParent
              ...AllSlugLocales
            }
            ... on DatoCmsArticle {
              id
              locales
              title
              slug
              model {
                apiKey
              }
              category {
                title
                slug
                ...ArticleCategoryAllSlugLocales
              }
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
                id
                locales
                title
                slug
                description
                _allSlugLocales {
                  value
                  locale
                }
                model {
                  apiKey
                }
              }
              ... on DatoCmsProduct {
                ...ProductPageDetails
                ...AllProductSlugLocales
              }
              ... on DatoCmsBlogPage {
                ...BlogDetails
              }
              ... on DatoCmsPage {
                id
                locales
                title
                slug
                root
                model {
                  apiKey
                }
                ...PageTreeParent
                ...AllSlugLocales
              }
              ... on DatoCmsArticle {
                id
                locales
                title
                slug
                model {
                  apiKey
                }
                category {
                  title
                  slug
                  ...ArticleCategoryAllSlugLocales
                }
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
