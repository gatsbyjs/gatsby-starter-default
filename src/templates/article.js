import React from "react"
import { graphql } from "gatsby"
import { Container, Heading } from "@theme-ui/components"
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs"

const Article = ({ data: { page } }) => {
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

export default Article

export const query = graphql`
  query ArticleQuery($id: String!) {
    page: datoCmsArticle(id: { eq: $id }) {
      ...ArticleDetails
    }
  }

  fragment ArticleDetails on DatoCmsArticle {
    id
    locale
    title
    slug
    model {
      apiKey
    }
  }

`
