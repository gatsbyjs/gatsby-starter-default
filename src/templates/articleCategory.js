import React from "react"
import { graphql } from "gatsby"
import { Container } from "@theme-ui/components"
import Layout from "../components/layout"
import { getArticleCategoryPath } from "../utils/path"
import ArticlesList from "./articlesList"
import CategoriesList from "./categoriesList"
import BlogTitle from "../components/blogTitle"
import { HelmetDatoCms } from "gatsby-source-datocms"

const ArticleCategory = ({ data: { page, articles, articleCategories } }) => {
  // console.log(page, articles, articleCategories)
  const i18nPaths = page._allSlugLocales.map(path => {
    return {
      locale: path.locale,
      value: getArticleCategoryPath(page, path.locale),
    }
  })

  return (
    <Layout locale={page.locale} i18nPaths={i18nPaths}>
      <HelmetDatoCms seo={page.seoMetaTags}>
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

export default ArticleCategory

export const query = graphql`
  query ArticleCategoryQuery($id: String!, $locale: String!) {
    page: datoCmsArticleCategory(id: { eq: $id }) {
      ...ArticleCategoryDetails
      ...ArticleCategoryAllSlugLocales
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    articles: allDatoCmsArticle(
      sort: { fields: meta___firstPublishedAt, order: DESC }
      filter: {
        slug: { ne: null }
        locale: { eq: $locale }
        category: { id: { eq: $id } }
      }
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

  fragment ArticleCategoryAllSlugLocales on DatoCmsArticleCategory {
    _allSlugLocales {
      value
      locale
    }
  }

  fragment ArticleCategoryDetails on DatoCmsArticleCategory {
    id
    locale
    title
    slug
    model {
      apiKey
    }
  }
`
