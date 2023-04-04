/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query CreatePageQuery {
      site: datoCmsSite {
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
        locale
        locales
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
      product: allDatoCmsProduct(filter: { slug: { ne: null } }) {
        nodes {
          slug
          id
          locale
          category {
            id
            slug
          }
        }
      }
      category: allDatoCmsProductCategory(filter: { slug: { ne: null } }) {
        nodes {
          slug
          id
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

    fragment GatsbyDatoCmsFaviconMetaTags on DatoCmsFaviconMetaTags {
      tags
    }
  `)

  const i18nPath = {
    it: {
      category: "categoria",
      search: "cerca",
      products: "prodotti",
    },
    en: {
      category: "category",
      search: "search",
      products: "products",
    },
    "en-us": {
      category: "category",
      search: "search",
      products: "products",
    },
  }

  function getCategoryPath(page) {
    
    return page.locale === data.site.locale
      ? `/${i18nPath[page.locale.toLowerCase()].category}/${page.slug}/`
      : `/${page.locale.toLowerCase()}/${
          i18nPath[page.locale.toLowerCase()].category
        }/${page.slug}/`
  }

  function getPagePath(page) {
    let lang =
      page.locale === data.site.locale ? "" : `${page.locale.toLowerCase()}/`
    let path = page.slug
    if (page.root) {
      return lang + `${path}/`
    }

    path = `${page.treeParent.slug}/${path}/`
    if (page.treeParent.root) {
      return lang + path
    }
    path = `${page.treeParent.treeParent.slug}/${path}/`
    return lang + path
  }

  function getBlogPath(page) {
    return page.locale === data.site.locale
      ? `/blog/`
      : `/${page.locale.toLowerCase()}/blog/`
  }

  function getArticleCategoryPath(page) {
    return page.locale === data.site.locale
      ? `/blog/${i18nPath[page.locale.toLowerCase()].category}/${page.slug}/`
      : `/${page.locale.toLowerCase()}/blog/${
          i18nPath[page.locale.toLowerCase()].category
        }/${page.slug}/`
  }

  function getArticlePath(page) {
    return page.locale === data.site.locale
      ? `/blog/${page.slug}/`
      : `/${page.locale.toLowerCase()}/blog/${page.slug}/`
  }

  function getProductPath(page) {
    return page.locale === data.site.locale
      ? `/${i18nPath[page.locale.toLowerCase()].products}/${page.slug}/`
      : `/${page.locale.toLowerCase()}/${i18nPath[
          page.locale
        ].products.toLowerCase()}/${page.slug}/`
  }

  data.home.nodes.map(page =>
    actions.createPage({
      path:
        page.locale === data.site.locale
          ? "/"
          : `/${page.locale.toLowerCase()}/`,
      component: require.resolve(`./src/templates/home.js`),
      context: { id: page.id, locale: page.locale },
    })
  )

  data.page.nodes.map(page =>
    actions.createPage({
      path: getPagePath(page),
      component: require.resolve(`./src/templates/page.js`),
      context: { id: page.id, locale: page.locale  },
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

  data.site.locales.map(locale =>
    actions.createPage({
      path:
        data.site.locale === locale
          ? `/${i18nPath[locale].search}/`
          : `/${locale.toLowerCase()}/${
              i18nPath[locale.toLowerCase()].search
            }/`,
      component: require.resolve(`./src/templates/search.js`),
      context: { locale: locale },
    })
  )

  data.category.nodes.map(page =>
    actions.createPage({
      path: getCategoryPath(page),
      component: require.resolve(`./src/templates/productCategory.js`),
      context: { id: page.id, locale: page.locale },
    })
  )

  data.product.nodes.map(product =>
    product.slug
      ? actions.createPage({
          path: getProductPath(product),
          component: require.resolve(`./src/templates/product.js`),
          context: {
            categoryId: product.category.id,
            id: product.id,
            locale: product.locale
          },
        })
      : null
  )

    createPage({
      path: "/using-dsg",
      component: require.resolve("./src/templates/using-dsg.js"),
      context: {},
      defer: true,
    })

}
