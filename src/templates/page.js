import React from "react"
import { graphql } from "gatsby"
import { Box, Container } from "@theme-ui/components"
import loadable from "@loadable/component"
import Layout from "../components/layout"
import { getPagePath } from "../utils/path"
import { HelmetDatoCms } from "gatsby-source-datocms"
import TitleAndBody from "../components/blocks/titleAndBody"

import Image from "../components/blocks/image"
import ImageGallery from "../components/blocks/imageGallery"
import OrderedList from "../components/blocks/orderedList"

import Accordion from "../components/blocks/accordion"
import DocumentCollection from "../components/blocks/documentCollection"
import Embed from "../components/blocks/embed"
import PageHero from "./pageHero"
import ImageAndText from "../components/blocks/imageAndText"
import NumbersCollection from "../components/blocks/numbersCollections"
import ContactForm from "../components/blocks/contactFrom"
import RelatedCollection from "../components/blocks/relatedCollection"
import JobCollection from "../components/blocks/jobCollection"
import JobForm from "../components/blocks/jobForm"
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
  console.log(page.content)

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
          {block.model && block.model.apiKey === "title_and_body" && (
            <TitleAndBody block={block} />
          )}

          {block.model && block.model.apiKey === "image_and_text" && (
            <ImageAndText
              block={block}
              image={block.image}
              title={block.title}
              body={block.body}
              rightAligned={block.rightAligned}
            />
          )}
          {block.model && block.model.apiKey === "related" && (
            <RelatedCollection block={block} />
          )}
          {block.model.apiKey === "document_collection" && (
            <DocumentCollection
              title={block.title}
              documents={block.documents}
              showPublicationDate={block.showPublicationDate}
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
          {block.model.apiKey === "job_form" && <JobForm block={block} />}
          {block.model.apiKey === "job_collection" && (
            <JobCollection block={block} />
          )}

          {/*   {block.model.apiKey === "image_gallery" && (
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
          )} */}

          {/* {block.model && block.model.apiKey === "ordered_list" && (
            <OrderedList
              title={block.title}
              subtitle={block.subtitle}
              body={block.body}
            />
          )}

          {block.model.apiKey === "item_carousel" && (
            <ItemCarousel items={block.items} />
          )}
          {block.model.apiKey === "accordion" && (
            <Accordion title={block.title} items={block.items} />
          )} */}
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
      _allSlugLocales {
        value
        locale
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      content {
        ... on DatoCmsJobForm {
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
        ... on DatoCmsJobCollection {
          id
          title
          jobs {
            id
            locales
            _allSlugLocales {
              value
              locale
            }
            name
            description
            link
          }
          model {
            apiKey
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
            }
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
      }
    }
  }

  fragment PageDetails on DatoCmsPage {
    id
    locales
    title
    slug
    root
    _allSlugLocales {
      value
      locale
    }
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
      url
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
      _allSlugLocales {
        value
        locale
      }
      treeParent {
        id
        title
        slug
        root
        locales
        _allSlugLocales {
          value
          locale
        }
      }
    }
  }
`
