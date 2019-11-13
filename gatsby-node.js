const path = require("path") // require path module from Node.js

// used to generate slugs from filename for markdown posts
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
    console.log("slug", slug)
  }

  if (node.internal.type === "File") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
    console.log("newSlug#######", slug)
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template:
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const docsTemplate = path.resolve("./src/templates/docs.js")
  // 2. get markdown data
  const res = await graphql(`
    query {
      allFile {
        edges {
          node {
            name
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // 3. create new pages
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate, // template to use
      path: `/blog/${edge.node.fields.slug}`, // route definition from slug
      context: {
        slug: edge.node.fields.slug,
        // passes in the slug so that the context has access to the associated data.
      },
    })
  })

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  res.data.allFile.edges.forEach(edge => {
    // console.log("##################", edge.node)
    createPage({
      component: docsTemplate,
      path: `docs/${edge.node.name}`,
      context: {
        slug: edge.node.name,
      },
    })
  })
}
