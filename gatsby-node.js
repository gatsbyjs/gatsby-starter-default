/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query CreatePageQuery {
      site: datoCmsSite {
        locale
      }
      home: allDatoCmsHomePage {
        nodes {
          id
          locale
        }
      }
      blog: allDatoCmsBlogPage(filter: { title: { ne: null } }) {
        nodes {
          id
          locale
        }
      }
      article: allDatoCmsArticle(filter: { slug: { ne: null } }) {
        nodes {
          id
          slug
          locale
        }
      }
      articleCategory: allDatoCmsArticleCategory(
        filter: { slug: { ne: null } }
      ) {
        nodes {
          id
          slug
          locale
        }
      }
      page: allDatoCmsPage(filter: { slug: { ne: null } }) {
        nodes {
          id
          slug
          locale
          root
          treeParent {
            slug
            root
            treeParent {
              slug
              root
            }
          }
        }
      }
    }
  `)

  const i18nPath = {
    it: {
      category: "categoria",
    },
    en: {
      category: "category",
    },
  }

  function getPagePath(page) {
    let lang = page.locale === data.site.locale ? "" : `${page.locale}/`
    let path = page.slug
    if (page.root) {
      return lang + path
    }
    path = `${page.treeParent.slug}/${path}`
    if (page.treeParent.root) {
      return lang + path
    }
    path = `${page.treeParent.treeParent.slug}/${path}`
    return lang + path
  }

  function getBlogPath(page) {
    return page.locale === data.site.locale ? `/blog` : `/${page.locale}/blog`
  }

  function getArticleCategoryPath(page) {
    return page.locale === data.site.locale
      ? `/blog/${i18nPath[page.locale].category}/${page.slug}`
      : `/${page.locale}/blog/${i18nPath[page.locale].category}/${page.slug}`
  }

  function getArticlePath(page) {
    return page.locale === data.site.locale
      ? `/blog/${page.slug}`
      : `/${page.locale}/blog/${page.slug}`
  }

  data.home.nodes.map(page =>
    actions.createPage({
      path: page.locale === data.site.locale ? "/" : `/${page.locale}`,
      component: require.resolve(`./src/templates/home.js`),
      context: { id: page.id },
    })
  )

  data.page.nodes.map(page =>
    actions.createPage({
      path: getPagePath(page),
      component: require.resolve(`./src/templates/page.js`),
      context: { id: page.id },
    })
  )

  data.blog.nodes.map(page =>
    actions.createPage({
      path: getBlogPath(page),
      component: require.resolve(`./src/templates/blog.js`),
      context: { id: page.id, locale: page.locale },
    })
  )

  data.article.nodes.map(page =>
    actions.createPage({
      path: getArticlePath(page),
      component: require.resolve(`./src/templates/article.js`),
      context: { id: page.id, locale: page.locale },
    })
  )

  data.articleCategory.nodes.map(page =>
    actions.createPage({
      path: getArticleCategoryPath(page),
      component: require.resolve(`./src/templates/articleCategory.js`),
      context: { id: page.id, locale: page.locale },
    })
  )
}
