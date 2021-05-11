import React from "react"
import { graphql } from "gatsby"
import { Container, Heading } from "@theme-ui/components"
import Layout from "../components/layout"
import { getHomePath } from "../utils/path"

const Home = ({ data: { page, site } }) => {
  const i18nPaths = site.locales.map(locale => {
    return {
      locale: locale,
      value: getHomePath(locale),
    }
  })
  return (
    <Layout locale={page.locale} i18nPaths={i18nPaths}>
      <Container>
        <Heading as="h1">{page.title}</Heading>
      </Container>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query HomeQuery($id: String!) {
    page: datoCmsHomePage(id: { eq: $id }) {
      id
      title
      locale
    }
    site: datoCmsSite {
      locales
    }
  }
`
