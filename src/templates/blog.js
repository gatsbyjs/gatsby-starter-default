import React from "react"
import { graphql } from "gatsby"
import { Container } from "@theme-ui/components"
import Layout from "../components/layout"
import { getBlogPath } from "../utils/path"
import ArticlesList from "./articlesList"
import PageTitle from "../components/pageTitle"

const Blog = ({ data: { page, articles, site } }) => {
  // console.log(articles)
  const i18nPaths = site.locales.map(locale => {
    return {
      locale: locale,
      value: getBlogPath(locale),
    }
  })

  return (
    <Layout locale={page.locale} i18nPaths={i18nPaths}>
      <PageTitle page={page} />
      <Container variant="md">
        <ArticlesList articles={articles.nodes} />
      </Container>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query BlogQuery($id: String!, $locale: String!) {
    page: datoCmsBlogPage(id: { eq: $id }) {
      ...BlogDetails
    }
    articles: allDatoCmsArticle(
      filter: { slug: { ne: null }, locale: { eq: $locale } }
    ) {
      nodes {
        ...ArticleDetails
        ...ArticleAllSlugLocales
        ...ArticleMeta
      }
    }
    site: datoCmsSite {
      locales
    }
  }

  fragment BlogDetails on DatoCmsBlogPage {
    id
    locale
    title
    model {
      apiKey
    }
  }
`
