import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { getSearchPath } from "../utils/path"
import { Container, Text } from "@theme-ui/components"
import loadable from "@loadable/component"
import { i18nContext } from "../context/i18nContext"

const SearchResultsComponents = loadable(
  () => import("../components/searchResults"),
  { ssr: false }
)

const SearchPage = ({ data: { site, footer, menu }, pageContext }) => {
  const locale = pageContext.locale

  const i18nPaths = site.locales.map(locale => {
    return {
      locale: locale,
      value: getSearchPath(locale),
    }
  })

  return (
    <Layout
      locale={locale}
      i18nPaths={i18nPaths}
      footerData={footer.nodes}
      menuData={menu.nodes}
    >
      <i18nContext.Consumer>
        {t => (
          <>
            <Helmet>
              <html lang={locale} />
              <title>{t.search}</title>
            </Helmet>
            <Container>
              <Text as="h1" variant="h1">
                {t.search}
              </Text>
              <SearchResultsComponents locale={locale} />
            </Container>
          </>
        )}
      </i18nContext.Consumer>
    </Layout>
  )
}

export default SearchPage

export const query = graphql`
  query SearchPageQuery($locale: String!) {
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
  }
`
