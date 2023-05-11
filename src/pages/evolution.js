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
      <main className="container evolution px-4 mb-20 max-w-prose static">
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(content),
          }}
        />
        <div className="footer fixed bottom-0 left-0 w-full h-12 bg-secondary border-t-2">
        <a href="#toc" 
          className="rounded-xl no-underline bg-white text-link py-1 px-4 font-heading font-semibold uppercase transition-colors duration-200 fixed bottom-2 right-2">
          ^ TOC
        </a>
        </div>
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
