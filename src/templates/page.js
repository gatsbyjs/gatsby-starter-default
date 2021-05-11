import React from "react"
import { graphql } from "gatsby"
import { Container, Heading } from "@theme-ui/components"
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs"
import { getPagePath } from "../utils/path"

const Page = ({ data: { page } }) => {
  const i18nPaths = page._allSlugLocales.map(locale => {
    return {
      locale: locale.locale,
      value: getPagePath(page, locale.locale),
    }
  })
  return (
    <Layout locale={page.locale} i18nPaths={i18nPaths}>
      <Container>
        <Heading as="h1">{page.title}</Heading>
        <Breadcrumbs page={page} />
      </Container>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query PageQuery($id: String!) {
    page: datoCmsPage(id: { eq: $id }) {
      ...PageDetails
      ...PageTreeParent
      ...AllSlugLocales
    }
  }

  fragment AllSlugLocales on DatoCmsPage {
    _allSlugLocales {
      value
      locale
    }
  }

  fragment PageDetails on DatoCmsPage {
    id
    locale
    title
    slug
    root
    model {
      apiKey
    }
  }

  fragment PageTreeParent on DatoCmsPage {
    treeParent {
      id
      title
      slug
      root
      locale
      ...AllSlugLocales
      treeParent {
        id
        title
        slug
        root
        locale
        ...AllSlugLocales
      }
    }
  }
`
