import React from "react"
import { graphql } from "gatsby"
import { Container, Heading, Box } from "@theme-ui/components"
import Layout from "../components/layout"
import { getHomePath } from "../utils/path"
import { HelmetDatoCms } from "gatsby-source-datocms"
import TitleAndBody from "../components/blocks/titleAndBody"
import Breadcrumbs from "../components/breadcrumbs"
import HomeHero from "./homeHero"
import HomeIntro from "../components/homeIntro"
const Home = ({ data: { page, site, footer, menu }, pageContext }) => {
  const locale = pageContext.locale

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
      <HomeIntro page={page} />
      {page &&
        page.content &&
        page.content.map(block => (
          <Box as="section" key={block.id}>
            {block.model.apiKey === "title_and_body" && (
              <TitleAndBody block={block} />
            )}
            {/*  {block.model.apiKey === "image_and_text" && (
              <ImageAndText block={block} />
            )} */}
          </Box>
        ))}
    </Layout>
  )
}

export default Home

export const query = graphql`
  query HomeQuery($locale: String!) {
    page: datoCmsHomePage(locale: $locale) {
      id
      kicker
      body {
        value
      }
      title
      model {
        apiKey
      }
      content {
        ... on DatoCmsTitleAndBody {
          centered

          model {
            apiKey
          }
          id
          kicker
          title
          content {
            value
            blocks {
              __typename
              ... on DatoCmsImageGallery {
                id: originalId
                images {
                  alt
                  title
                  url
                  gatsbyImageData(width: 1920, placeholder: BLURRED)
                }
              }
              ... on DatoCmsAccordion {
                id: originalId
                title
                body
              }
            }
            links {
              __typename
              ... on DatoCmsInternalLink {
                id: originalId
                anchor
                locales
                model {
                  apiKey
                }
                link {
                  ... on DatoCmsPage {
                    ...PageDetails
                    ...PageTreeParent
                    ...AllSlugLocales
                  }
                }
              }
            }
          }
        }
        ... on DatoCmsImageAndText {
          id
          kicker
          model {
            apiKey
          }
          rightAligned
          body {
            value
            blocks {
              __typename
              ... on DatoCmsImageGallery {
                id: originalId
                images {
                  alt
                  title
                  url
                  gatsbyImageData(width: 1920, placeholder: BLURRED)
                }
              }
            }
            links {
              __typename
              ... on DatoCmsInternalLink {
                id: originalId
                anchor
                locales
                model {
                  apiKey
                }
                link {
                  ... on DatoCmsPage {
                    ...PageDetails
                    ...PageTreeParent
                    ...AllSlugLocales
                  }
                }
              }
            }
          }
        }
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
