import React from "react"
import { graphql } from "gatsby"
import { Container, Heading } from "@theme-ui/components"
import Layout from "../components/layout"
import { getHomePath } from "../utils/path"
import { HelmetDatoCms } from "gatsby-source-datocms"
import LatestArticles from "../components/latestArticles"
import { useFavicon } from "../hooks/useFavicon"

const Home = ({ data: { page, site, articles } }) => {

  const favicon =  useFavicon().site.faviconMetaTags;

  const i18nPaths = site.locales.map(locale => {
    return {
      locale: locale,
      value: getHomePath(locale),
    }
  })

  return (
    <Layout locale={page.locale} i18nPaths={i18nPaths}>
      <HelmetDatoCms seo={page.seoMetaTags} favicon={favicon}>
        <html lang={page.locale} />
      </HelmetDatoCms>
      <Container>
        <Heading as="h1">{page.title}</Heading>
      </Container>
      {articles.nodes.length > 0 && (
        <LatestArticles articles={articles.nodes} />
      )}
    </Layout>
  )
}

export default Home

export const query = graphql`
  query HomeQuery($id: String!, $locale: String!) {
    page: datoCmsHomePage(id: { eq: $id }) {
      id
      title
      locale
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    articles: allDatoCmsArticle(
      sort: { fields: meta___firstPublishedAt, order: DESC }
      filter: { slug: { ne: null }, locale: { eq: $locale } }
      limit: 6
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
`
