import React from "react"
import { graphql } from "gatsby"
import { Container, Heading } from "@theme-ui/components"
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs"

const Home = ({ data: { page } }) => {
  // console.log(page)
  return (
    <Layout locale={page.locale}>
      <Container>
        <Heading as="h1">{page.title}</Heading>
        <Breadcrumbs page={page} />
      </Container>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query PageQuery($id: String!) {
    page: datoCmsPage(id: { eq: $id }) {
      ...PageDetails
      ...PageTreeParent
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
      treeParent {
        id
        title
        slug
        root
        locale
      }
    }
  }
`
