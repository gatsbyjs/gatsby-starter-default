import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            id
            name
            dir
            relativeDirectory
            modifiedTime(formatString: "MMMM Do, YYYY")
            absolutePath
          }
        }
      }
    }
  `)

  // const data = graphql`
  //   query RepoQuery {
  //     allFile(filter: { sourceInstanceName: { eq: "graph-basics" } }) {
  //       edges {
  //         node {
  //           id
  //           relativeDirectory
  //           dir
  //           absolutePath
  //         }
  //       }
  //     }
  //   }
  // `

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {/* {data.allMarkdownRemark.edges.map(edge => {
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
        })} */}
        {data.allFile.edges.map(edge => {
          // console.log(`edge`, edge)
          const { id, name, modifiedTime } = edge.node
          console.log(id, name, modifiedTime)
          if (edge.node.relativeDirectory !== "READMES") {
            console.log(edge.node)
            return null
          }
          return (
            <li key={id} className={blogStyles.post}>
              <Link to={`/docs/${name}`}>
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
