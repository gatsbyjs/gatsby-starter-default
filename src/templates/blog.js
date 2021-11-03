import React from "react"
import { graphql } from "gatsby"
import { Container } from "@theme-ui/components"
import Layout from "../components/layout"
import { getBlogPath } from "../utils/path"
import ArticlesList from "./articlesList"
import CategoriesList from "./categoriesList"
import BlogTitle from "../components/blogTitle"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { useFavicon } from "../hooks/useFavicon"

const Blog = ({ data: { page, articles, articleCategories, site } }) => {
const favicon = useFavicon().site.faviconMetaTags
  
  // console.log(articleCategories)
  const i18nPaths = site.locales.map(locale => {
    return {
      locale: locale,
      value: getBlogPath(locale),
    }
  })

  return (
    <Layout locale={page.locale} i18nPaths={i18nPaths}>
      <HelmetDatoCms seo={page.seoMetaTags} favicon={favicon}>
        <html lang={page.locale} />
      </HelmetDatoCms>
      <Container variant="md">
        <BlogTitle page={page} />
        <CategoriesList categories={articleCategories.nodes} />
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
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    articles: allDatoCmsArticle(
      sort: { fields: meta___firstPublishedAt, order: DESC }
      filter: { slug: { ne: null }, locale: { eq: $locale } }
    ) {
      nodes {
        ...ArticleDetails
        ...ArticleAllSlugLocales
        ...ArticleMeta
      }
    }
    articleCategories: allDatoCmsArticleCategory(
      sort: { fields: position, order: ASC }
      filter: { slug: { ne: null }, locale: { eq: $locale } }
    ) {
      nodes {
        ...ArticleCategoryDetails
        ...ArticleCategoryAllSlugLocales
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
