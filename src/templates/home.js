import React from "react"
import { graphql } from "gatsby"
import { Container, Heading, Box } from "@theme-ui/components"
import Layout from "../components/layout"
import { getHomePath } from "../utils/path"
import { HelmetDatoCms } from "gatsby-source-datocms"
import TitleAndBody from "../components/blocks/titleAndBody"
import Breadcrumbs from "../components/breadcrumbs"
import HomeHero from "./homeHero"
import ImageAndText from "../components/blocks/imageAndText"
import HomeIntro from "../components/homeIntro"
import RelatedCollection from "../components/blocks/relatedCollection"
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

      {page &&
        page.content &&
        page.content.map(block => (
          <Box as="section" key={block.id}>
            {block.model && block.model.apiKey === "home_hero" && (
              <>
                <HomeHero block={block} />
                <Box sx={{ mt: ["40px", "40px", "90px", "90px"] }}></Box>
              </>
            )}
            {block.model && block.model.apiKey === "title_and_body" && (
              <TitleAndBody block={block} />
            )}
            {block.model && block.model.apiKey === "image_and_text" && (
              <ImageAndText
                image={block.image}
                title={block.title}
                body={block.body}
                rightAligned={block.rightAligned}
              />
            )}
            {block.model && block.model.apiKey === "related" && (
              <RelatedCollection block={block} />
            )}
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
      title
      model {
        apiKey
      }
      content {
        ... on DatoCmsHomeHero {
          model {
            apiKey
          }
          title
          body {
            value
          }
          mobile {
            gatsbyImageData(
              width: 700
              placeholder: BLURRED
              imgixParams: { fit: "crop", ar: "1:2", fpZ: 0.7 }
            )
          }

          heroImage {
            mobile: gatsbyImageData(
              width: 700
              placeholder: BLURRED
              imgixParams: { fit: "crop", ar: "1:2", fpZ: 0.7 }
            )
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
        }
        ... on DatoCmsRelated {
          model {
            apiKey
          }
          title
          kicker
          related {
            anchor
            link {
              ... on DatoCmsProductCategory {
                ...ProductCategoryPageDetails
              }
              ... on DatoCmsProduct {
                ...ProductPageDetails
              }
              ... on DatoCmsPage {
                ...PageDetails
              }
              ... on DatoCmsArticle {
                ...ArticleDetails
              }
              ... on DatoCmsArticleCategory {
                ...ArticleCategoryDetails
                ...ArticleCategoryAllSlugLocales
              }
            }
          }
        }
        ... on DatoCmsTitleAndBody {
          leftAligned
          image {
            alt
            title
            url
            gatsbyImageData(width: 1920, placeholder: BLURRED)
            mobile: gatsbyImageData(
              width: 700
              placeholder: BLURRED
              imgixParams: { fit: "crop", ar: "1:2", fpZ: 0.7 }
            )
          }

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
                  }
                  ... on DatoCmsArticle {
                    ...ArticleDetails
                  }
                  ... on DatoCmsProductCategory {
                    ...ProductCategoryPageDetails
                  }
                  ... on DatoCmsProduct {
                    ...ProductPageDetails
                  }
                }
              }
            }
          }
        }
        ... on DatoCmsImageAndText {
          id
          kicker
          image {
            alt
            title
            url
            gatsbyImageData(width: 1920, placeholder: BLURRED)
          }
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
                  }
                }
              }
            }
          }
        }
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
            _allSlugLocales {
              value
              locale
            }
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
            _allSlugLocales {
              value
              locale
            }
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
              _allSlugLocales {
                value
                locale
              }
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
              _allSlugLocales {
                value
                locale
              }
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
                _allSlugLocales {
                  value
                  locale
                }
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
                _allSlugLocales {
                  value
                  locale
                }
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
      }
      ... on DatoCmsBlogPage {
        ...BlogDetails
      }
      ... on DatoCmsPage {
        ...PageDetails
        ...PageTreeParent
      }
      ... on DatoCmsArticle {
        ...ArticleDetails
        _allSlugLocales {
          value
          locale
        }
      }
      ... on DatoCmsArticleCategory {
        ...ArticleCategoryDetails
        ...ArticleCategoryAllSlugLocales
      }
    }
  }
`
