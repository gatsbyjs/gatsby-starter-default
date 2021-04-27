import React from "react"
import { graphql } from "gatsby"
import { Container, Heading } from "@theme-ui/components"
import Layout from "../components/layout"

const Home = ({ data: { page } }) => {
  // console.log(page)
  return (
    <Layout locale={page.locale}>
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
  }
`
