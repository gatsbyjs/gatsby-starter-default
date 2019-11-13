import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            id
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
      allFile {
        edges {
          node {
            id
            name
            modifiedTime(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          if (edge.node.frontmatter.title) {
            return (
              <li key={edge.node.id} className={blogStyles.post}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                  <p>source: markdown/local</p>
                </Link>
              </li>
            )
          }
          return null
        })}
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li key={edge.node.title} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
                <p>source: contentful</p>
              </Link>
            </li>
          )
        })}
        {data.allFile.edges.map(edge => {
          // console.log(`edge`, edge)
          const { id, name, modifiedTime } = edge.node
          // console.log(id, name, modifiedTime)
          return (
            <li key={id} className={blogStyles.post}>
              <Link to={`/blog/${name}`}>
                <h2>{name}</h2>
                <p>{modifiedTime}</p>
                <p>source: github</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

// export default BlogPage

/*
  



*/
