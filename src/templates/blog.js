import React from "react"
import { graphql } from "gatsby"
import { Container, Heading } from "@theme-ui/components"
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs"

const Blog = ({ data: { page } }) => {
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

export default Blog

export const query = graphql`
  query BlogQuery($id: String!) {
    page: datoCmsBlogPage(id: { eq: $id }) {
      ...BlogDetails
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
