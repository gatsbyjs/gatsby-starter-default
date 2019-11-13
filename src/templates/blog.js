import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
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
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

export default props => {
  let title = props.data.markdownRemark
    ? props.data.markdownRemark.frontmatter.title
    : props.data.contentfulBlogPost
    ? props.data.contentfulBlogPost.title
    : null

  const options = {
    // reference to the type of node we want to render:
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={`Blog: ${title}`} />
      {props.data.markdownRemark && (
        <>
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
          <div
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          />
        </>
      )}
      {props.data.contentfulBlogPost && (
        <>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )}
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
