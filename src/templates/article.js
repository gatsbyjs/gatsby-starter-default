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
import PageTitle from "../components/pageTitle"

const Article = ({ data: { page } }) => {
  // console.log(page)
  const i18nPaths = page._allSlugLocales.map(path => {
    return {
      locale: path.locale,
      value: getArticlePath(page, path.locale),
    }
  })

  return (
    <Layout locale={page.locale} i18nPaths={i18nPaths}>
      <PageTitle page={page} />
      <Box sx={{ ".gatsby-image-wrapper": { width: "100%" } }}>
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
                      <Text as={`h${node.level}`} variant={`h${node.level}`}>
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
                      <Text as="p" mb={3}>
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
                return <ImageGallery images={record.images} key={record.id} />
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
    page: datoCmsArticle(id: { eq: $id }) {
      ...ArticleDetails
      ...ArticleAllSlugLocales
      ...ArticleMeta
      meta {
        firstPublishedAt(locale: $locale, formatString: "DD MMMM Y")
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
    locale
    title
    slug
    model {
      apiKey
    }
    heroImage {
      gatsbyImageData(
        width: 1480
        height: 740
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
          images {
            gatsbyImageData(
              width: 1024
              placeholder: BLURRED
              forceBlurhash: false
            )
            alt
            title
          }
        }
      }
    }
  }
`
