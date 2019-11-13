import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default props => {
  let title = props.data.markdownRemark.frontmatter.title

  return (
    <Layout>
      <Head title={`Docs: ${title}`} />
      {props.data.markdownRemark && (
        <>
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
          <div
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          />
        </>
      )}
    </Layout>
  )
}

/*

    allFile(name: { eq: $slug }) {
      id
      name
      modifiedTime(formatString: "MMMM Do, YYYY")
    }

    
    {props.data.allFile && (
      <>
        <h1>{props.data.allFile.name}</h1>
        <p>{props.data.allFile.modifiedTime}</p>
      </>
    )}
*/
