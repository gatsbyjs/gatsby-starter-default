import React from "react"
import { graphql } from "gatsby"
import { Container } from "@theme-ui/components"
import Layout from "../components/layout"
import { getBlogPath } from "../utils/path"
import ArticlesList from "./articlesList"
import CategoriesList from "./categoriesList"
import BlogTitle from "../components/blogTitle"
import { HelmetDatoCms } from "gatsby-source-datocms"

const Blog = ({
  data: { page, articles, articleCategories, site, footer, menu },
  pageContext,
}) => {
  const locale = pageContext.locale
  const i18nPaths = site.locales.map(locale => {
    return {
      locale: locale,
      value: getBlogPath(locale),
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
  query BlogQuery($locale: String!) {
    page: datoCmsBlogPage(locale: $locale) {
      ...BlogDetails
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

    articles: allDatoCmsArticle(
      locale: $locale
      sort: { meta: { firstPublishedAt: DESC } }
      filter: { locales: { eq: $locale } }
    ) {
      nodes {
        ...ArticleDetails
        ...ArticleAllSlugLocales
        ...ArticleMeta
      }
    }
    articleCategories: allDatoCmsArticleCategory(
      locale: $locale
      sort: { position: ASC }
      filter: { locales: { eq: $locale } }
    ) {
      nodes {
        ...ArticleCategoryDetails
        ...ArticleCategoryAllSlugLocales
      }
    }

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
  }

  fragment BlogDetails on DatoCmsBlogPage {
    id
    locales
    title
    model {
      apiKey
    }
  }
`
