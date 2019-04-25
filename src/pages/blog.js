import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    # query {
    #   allMarkdownRemark {
    #     edges {
    #       node {
    #         frontmatter {
    #           title
    #           date
    #         }
    #         fields {
    #           slug
    #         }
    #       }
    #     }
    #   }
    # }
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <p>posts will show up here</p>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
