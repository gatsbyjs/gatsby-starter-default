import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { getSearchPath } from "../utils/path"
import { Container, Text } from "@theme-ui/components"
import SearchResults from "../components/searchResults"
import { i18nContext } from "../context/i18nContext"

const SearchPage = ({ data: { site }, pageContext }) => {
  const i18nPaths = site.locales.map(locale => {
    return {
      locale: locale,
      value: getSearchPath(locale),
    }
  })

  return (
    <Layout locale={pageContext.locale} i18nPaths={i18nPaths}>
      <i18nContext.Consumer>
        {t => (
          <>
            <Helmet>
              <html lang={pageContext.locale} />
              <title>{t.search}</title>
            </Helmet>
            <Container>
              <Text as="h1" variant="h1">
                {t.search}
              </Text>
              <SearchResults locale={pageContext.locale} />
            </Container>
          </>
        )}
      </i18nContext.Consumer>
    </Layout>
  )
}

export default SearchPage

export const query = graphql`
  query SearchPageQuery {
    site: datoCmsSite {
      locales
    }
  }
`
