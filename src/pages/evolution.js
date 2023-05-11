import { graphql } from "gatsby"
import React from "react"

import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import { sanitizeHtml } from "@/utils/sanitizeHtml"

const Evolution = ({ data }) => {
  const content = data.allMarkdownRemark.edges[0].node.html

  return (
    <Layout>
      <Header />
      <main className="container evolution mb-10 max-w-prose">
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(content),
          }}
        />
      </main>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo />

export const query = graphql`
  query EvolutionQuery {
    allMarkdownRemark(filter: { frontmatter: { slug: { eq: "/evolution" } } }) {
      edges {
        node {
          frontmatter {
            slug
          }
          html
        }
      }
    }
  }
`

export default Evolution
