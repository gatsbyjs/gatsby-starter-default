import React from "react"
import { graphql } from "gatsby"
import { Container, Heading } from "@theme-ui/components"
import Layout from "../components/layout"
import { getHomePath } from "../utils/path"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { useFavicon } from "../hooks/useFavicon"

const Home = ({ data: { page, site }, pageContext }) => {
  const locale = pageContext.locale
  console.log(site)
  const favicon = useFavicon().site.faviconMetaTags
  const i18nPaths = site.locales.map(locale => {
    return {
      locale: locale,
      value: getHomePath(locale),
    }
  })

  return (
    <Layout locale={locale} i18nPaths={i18nPaths}>
      <HelmetDatoCms seo={page.seoMetaTags} favicon={favicon}>
        <html lang={locale} />
      </HelmetDatoCms>
      <Container>
        <Heading as="h1">{page.title}</Heading>
      </Container>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query HomeQuery($locale: String!) {
    page: datoCmsHomePage(locale: $locale) {
      id
      title
      locales
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    site: datoCmsSite {
      locales
    }
  }
`
