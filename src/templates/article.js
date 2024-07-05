import React from "react"
import { graphql } from "gatsby"
import { StructuredText } from "react-datocms"
import {
  isHeading,
  isParagraph,
  renderRule,
} from "datocms-structured-text-utils"
import { Box, Text, Container } from "@theme-ui/components"
import Layout from "../components/layout"
import { getArticlePath } from "../utils/path"
import { GatsbyImage } from "gatsby-plugin-image"
import ImageGallery from "../components/blocks/imageGallery"
import ArticleTitle from "../components/articleTitle"
import { HelmetDatoCms } from "gatsby-source-datocms"

const Article = ({ data: { page, site, footer, menu }, pageContext }) => {
  const locale = pageContext.locale
  console.log(footer)
  const i18nPaths = page._allSlugLocales.map(path => {
    return {
      locale: path.locale,
      value: getArticlePath(page, path.locale),
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
        <html lang={page.locale} />
      </HelmetDatoCms>
      <ArticleTitle page={page} />
      <Box sx={{ mb: 5, ".gatsby-image-wrapper": { width: "100%" } }}>
        <GatsbyImage image={page.heroImage.gatsbyImageData} />
      </Box>
      <Container variant="sm">
        <StructuredText
          data={page.body}
          customRules={[
            renderRule(
              isHeading,
              ({ adapter: { renderNode }, node, children, key }) => {
                return renderNode(
                  () => {
                    return (
                      <Text
                        as={`h${node.level}`}
                        variant={`h${node.level}`}
                        sx={{ mb: 3 }}
                      >
                        {children}
                      </Text>
                    )
                  },
                  { key },
                  children
                )
              }
            ),
            renderRule(
              isParagraph,
              ({ adapter: { renderNode }, node, children, key }) => {
                return renderNode(
                  () => {
                    return (
                      <Text as="p" mb={3} variant="article">
                        {children}
                      </Text>
                    )
                  },
                  { key },
                  children
                )
              }
            ),
          ]}
          renderBlock={({ record }) => {
            // console.log(record)
            switch (record.__typename) {
              case "DatoCmsImageGallery":
                return (
                  <Box mt={5} mb={5}>
                    <ImageGallery images={record.images} key={record.id} />
                  </Box>
                )
              default:
                return null
            }
          }}
        />
      </Container>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query ArticleQuery($id: String!, $locale: String!) {
    page: datoCmsArticle(id: { eq: $id }, locale: $locale) {
      ...ArticleDetails
      ...ArticleAllSlugLocales
      ...ArticleMeta
      meta {
        firstPublishedAt(locale: $locale, formatString: "DD MMMM Y")
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
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

  fragment ArticleMeta on DatoCmsArticle {
    meta {
      firstPublishedAt(locale: $locale, formatString: "DD MMMM Y")
    }
  }

  fragment ArticleAllSlugLocales on DatoCmsArticle {
    _allSlugLocales {
      value
      locale
    }
  }

  fragment ArticleDetails on DatoCmsArticle {
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
    heroImage {
      gatsbyImageData(
        width: 1480
        height: 986
        placeholder: BLURRED
        forceBlurhash: false
      )
    }
    ...ArticleBody
  }

  fragment ArticleBody on DatoCmsArticle {
    body {
      value
      blocks {
        __typename
        ... on DatoCmsImageGallery {
          id: originalId
          ...ImageGallery
        }
      }
    }
  }

  fragment ImageGallery on DatoCmsImageGallery {
    images {
      gatsbyImageData(width: 1480, placeholder: BLURRED, forceBlurhash: false)
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
    }

    model {
      apiKey
    }
  }
`
