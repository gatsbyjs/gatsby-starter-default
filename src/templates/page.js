import React from "react"
import { graphql } from "gatsby"
import { Box, Container } from "@theme-ui/components"
import loadable from "@loadable/component"
import Layout from "../components/layout"
import { getPagePath } from "../utils/path"
import { HelmetDatoCms } from "gatsby-source-datocms"
import TitleAndBody from "../components/blocks/titleAndBody"
import PageCarousel from "../components/blocks/pageCarousel"
import Image from "../components/blocks/image"
import ImageGallery from "../components/blocks/imageGallery"
import OrderedList from "../components/blocks/orderedList"
import ItemCarousel from "../components/blocks/itemCarousel"
import Accordion from "../components/blocks/accordion"
import DocumentCollection from "../components/blocks/documentCollection"
import Embed from "../components/blocks/embed"
import PageHero from "./pageHero"
import ImageAndText from "../components/blocks/imageAndText"
import NumbersCollection from "../components/blocks/numbersCollections"
import ContactForm from "../components/blocks/contactFrom"

const LocationsMap = loadable(
  () => import("../components/blocks/locationMap"),
  { ssr: false }
)

const Page = ({ data: { page, site, footer, menu }, pageContext }) => {
  const locale = pageContext.locale

  const pageAllSlugLocales = page._allSlugLocales.sort(function (a, b) {
    return site.locales.indexOf(a.locale) - site.locales.indexOf(b.locale)
  })

  const i18nPaths = pageAllSlugLocales.map(locale => {
    return {
      locale: locale.locale,
      value: getPagePath(page, locale.locale),
    }
  })

  console.log(page.model.apiKey)
  return (
    <Layout
      locale={locale}
      i18nPaths={i18nPaths}
      menuData={menu.nodes}
      footerData={footer.nodes}
    >
      <HelmetDatoCms seo={page.seoMetaTags}>
        <html lang={page.locale} />
      </HelmetDatoCms>
      <PageHero page={page} image={page.heroImage} />
      {page.content.map(block => (
        <Box as="section" key={block.id}>
          {block.model.apiKey === "title_and_body" && (
            <Container>
              <TitleAndBody block={block} />
            </Container>
          )}
          {block.model.apiKey === "ordered_list" && (
            <OrderedList
              title={block.title}
              subtitle={block.subtitle}
              body={block.body}
            />
          )}
          {block.model.apiKey === "page_carousel" && (
            <PageCarousel title={block.title} pages={block.pages} />
          )}
          {block.model.apiKey === "item_carousel" && (
            <ItemCarousel items={block.items} />
          )}
          {block.model.apiKey === "accordion" && (
            <Accordion title={block.title} items={block.items} />
          )}
          {block.model.apiKey === "document_collection" && (
            <DocumentCollection
              title={block.title}
              documents={block.documents}
              showPublicationDate={block.showPublicationDate}
            />
          )}
          {block.model.apiKey === "image" && <Image image={block.image} />}
          {block.model.apiKey === "locations_map" && (
            <LocationsMap locations={block.locations} />
          )}
          {block.model.apiKey === "contact_form" && (
            <ContactForm
              block={block}
              kicker={block.kicker}
              title={block.title}
              subtitle={block.subtitle}
              privacyPolicyDescription={block.privacyPolicyDescription}
              newsletterDescription={block.newsletterDescription}
            />
          )}
          {block.model.apiKey === "embed" && (
            <Embed
              title={block.title}
              code={block.code}
              fullWidth={block.fullWidth}
            />
          )}
          {block.model.apiKey === "image_gallery" && (
            <Container>
              <ImageGallery images={block.images} />
            </Container>
          )}
          {block.model.apiKey === "numbers_collection" && (
            <NumbersCollection
              title={block.title}
              image={block.image}
              numbers={block.numbers}
            />
          )}
          {block.model.apiKey === "contact_form" && (
            <ContactForm
              kicker={block.kicker}
              title={block.title}
              subtitle={block.subtitle}
              privacyPolicyDescription={block.privacyPolicyDescription}
              newsletterDescription={block.newsletterDescription}
            />
          )}

          {block.model.apiKey === "image_and_text" && (
            <ImageAndText
              label={block.content.label}
              subtitle={block.content.subtitle}
              title={block.content.title}
              body={block.content.body}
              image={block.image}
              rightAligned={block.rightAligned}
            />
          )}
        </Box>
      ))}
    </Layout>
  )
}

export default Page

export const query = graphql`
  query PageQuery($id: String!, $locale: String!) {
    site: datoCmsSite {
      locales
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

    menu: allDatoCmsMenu(
      locale: $locale
      filter: { root: { eq: true }, locales: { eq: $locale } }
      sort: { position: ASC }
    ) {
      nodes {
        ...MenuDetails
      }
    }

    page: datoCmsPage(id: { eq: $id }, locale: $locale) {
      ...PageDetails
      ...PageTreeParent
      ...AllSlugLocales
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      content {
        ... on DatoCmsNumbersCollection {
          id
          title
          image {
            gatsbyImageData(
              width: 1480
              placeholder: BLURRED
              forceBlurhash: false
            )
          }
          numbers {
            legend
            float
            suffix
            prefix
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsContactForm {
          id
          kicker
          title
          subtitle
          privacyPolicyDescription
          newsletterDescription
          model {
            apiKey
          }
        }
        ... on DatoCmsEmbed {
          id
          ...EmbedDetails
        }
        ... on DatoCmsImageAndText {
          id
          content {
            ... on DatoCmsRichContent {
              ...RichContent
            }
          }
          image {
            gatsbyImageData(
              width: 1480
              placeholder: BLURRED
              forceBlurhash: false
            )
          }
          rightAligned
          model {
            apiKey
          }
        }
        ... on DatoCmsImage {
          id
          image {
            mimeType
            gatsbyImageData(
              width: 1480
              placeholder: BLURRED
              forceBlurhash: false
            )
            video {
              streamingUrl
              thumbnailUrl(format: jpg)
              mp4Url(exactRes: low)
              muxPlaybackId
            }
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsLocationsMap {
          id
          locations {
            originalId
            id
            name
            addressCountry
            addressRegion
            addressLocality
            email
            faxNumber
            coordinates {
              latitude
              longitude
            }
            postalCode
            streetAddress
            telephone
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsImageGallery {
          id
          ...ImageGallery
        }
        ... on DatoCmsDocumentCollection {
          id
          title
          showPublicationDate
          documents {
            title
            subtitle
            documents {
              url
              title
              format
            }
            meta {
              firstPublishedAt(locale: $locale, formatString: "DD MMMM Y")
            }
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsAccordion {
          id
          title
          items: content {
            ... on DatoCmsRichContent {
              ...RichContent
            }
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsTitleAndBody {
          kicker
          id
          title
          originalbody: body
          centered
          content {
            value
            blocks {
              __typename
              ... on DatoCmsImageGallery {
                id: originalId
                ...ImageGallery
              }
              ... on DatoCmsEmbed {
                id: originalId
                ...EmbedDetails
              }
              ... on DatoCmsNumbersGroup {
                id: originalId
                numbers {
                  legend
                  float
                  suffix
                  prefix
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
            }
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsOrderedList {
          id
          title
          subtitle
          body {
            blocks
            links
            value
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsPageCarousel {
          id
          title
          pages {
            ... on DatoCmsPage {
              ...PageDetails
              ...PageTreeParent
              ...AllSlugLocales
            }
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsContactForm {
          id
          kicker
          title
          subtitle
          privacyPolicyDescription
          newsletterDescription
          model {
            apiKey
          }
        }
        ... on DatoCmsItemCarousel {
          id
          items {
            ... on DatoCmsRichContent {
              ...RichContent
            }
          }
          model {
            apiKey
          }
        }
      }
    }
  }

  fragment RichContent on DatoCmsRichContent {
    title
    label
    subtitle
    image {
      gatsbyImageData(width: 1480, placeholder: BLURRED, forceBlurhash: false)
    }
    body {
      blocks {
        __typename
        ... on DatoCmsImageGallery {
          id: originalId
          ...ImageGallery
        }
        ... on DatoCmsEmbed {
          id: originalId
          ...EmbedDetails
        }
        ... on DatoCmsNumbersGroup {
          id: originalId
          numbers {
            legend
            float
            suffix
            prefix
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
      }
      value
    }
    model {
      apiKey
    }
  }

  fragment AllSlugLocales on DatoCmsPage {
    _allSlugLocales {
      value
      locale
    }
  }

  fragment PageDetails on DatoCmsPage {
    id
    locales
    title
    slug
    root
    model {
      apiKey
    }
    heroImage {
      gatsbyImageData(
        width: 1920
        placeholder: NONE
        forceBlurhash: false
        imgixParams: { monochrome: "00A889" }
      )
    }
  }

  fragment EmbedDetails on DatoCmsEmbed {
    title
    code
    fullWidth
    model {
      apiKey
    }
  }

  fragment PageTreeParent on DatoCmsPage {
    treeParent {
      id
      title
      slug
      root
      locales
      ...AllSlugLocales
      treeParent {
        id
        title
        slug
        root
        locales
        ...AllSlugLocales
      }
    }
  }
`
