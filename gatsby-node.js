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
        locales
      }
      home: datoCmsHomePage {
        id
        _allTitleLocales {
          locale
          value
        }
      }
      blog: datoCmsBlogPage {
        id
        _allTitleLocales {
          locale
          value
        }
      }
      article: allDatoCmsArticle {
        nodes {
          id
          slug
          locales
          _allSlugLocales {
            value
            locale
          }
        }
      }
      articleCategory: allDatoCmsArticleCategory {
        nodes {
          id
          slug
          locales
          _allSlugLocales {
            value
            locale
          }
        }
      }
      product: allDatoCmsProduct {
        nodes {
          slug
          id
          locales
          _allSlugLocales {
            value
            locale
          }
          category {
            id
            slug
          }
        }
      }
      category: allDatoCmsProductCategory {
        nodes {
          slug
          id
          locales
        }
      }
      page: allDatoCmsPage {
        nodes {
          id
          _allSlugLocales {
            locale
            value
          }
          root
          treeParent {
            _allSlugLocales {
              locale
              value
            }
            root
            treeParent {
              slug
              _allSlugLocales {
                locale
                value
              }
            }
          }
        }
      }
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
  const defaultLocale = data.site.locales[0]

  function getCategoryPath(page) {
    return page.locale === data.site.locale
      ? `/${i18nPath[page.locale.toLowerCase()].category}/${page.slug}/`
      : `/${page.locale.toLowerCase()}/${
          i18nPath[page.locale.toLowerCase()].category
        }/${page.slug}/`
  }
  function getArticlePath(page, locale) {
    let lang = locale === defaultLocale ? "" : `${locale.toLowerCase()}/`
    let path = page._allSlugLocales.find(
      slugLocale => slugLocale.locale === locale
    ).value
    return `${lang}blog/${path}/`
  }
  function getProductPath(page, locale) {
    let lang = locale === defaultLocale ? "" : `${locale.toLowerCase()}/`
    let path = page._allSlugLocales.find(
      slugLocale => slugLocale.locale === locale
    ).value
    let productPath = i18nPath[locale.toLowerCase()].products.toLowerCase()
    return `${lang}${productPath}/${path}/`
  }
  function getPagePath(page, locale) {
    let lang = locale === defaultLocale ? "" : `${locale.toLowerCase()}/`
    let path = page._allSlugLocales.find(
      slugLocale => slugLocale.locale === locale
    ).value
    if (page.root) {
      return lang + `${path}/`
    }

    let parentPath = page.treeParent._allSlugLocales.find(
      slugLocale => slugLocale.locale === locale
    ).value
    path = `${parentPath}/${path}/`
    if (page.treeParent.root) {
      return lang + path
    }

    let grandParentPath = page.treeParent.treeParent._allSlugLocales.find(
      slugLocale => slugLocale.locale === locale
    ).value
    path = `${grandParentPath}/${path}/`
    return lang + path
  }

  function getBlogPath(locale) {
    return locale === defaultLocale
      ? `/blog/`
      : `/${locale.toLowerCase()}/blog/`
  }

  function getArticleCategoryPath(page, locale) {
    return locale === defaultLocale
      ? `/blog/${i18nPath[locale.toLowerCase()].category}/${page.slug}/`
      : `/${page.locale.toLowerCase()}/blog/${
          i18nPath[page.locale.toLowerCase()].category
        }/${page.slug}/`
  }

  data.home._allTitleLocales.map(title =>
    actions.createPage({
      path:
        title.locale === defaultLocale
          ? "/"
          : `/${title.locale.toLowerCase()}/`,
      component: require.resolve(`./src/templates/home.js`),
      context: { locale: title.locale },
    })
  )

  data.blog._allTitleLocales.map(title =>
    actions.createPage({
      path: getBlogPath(title.locale),
      component: require.resolve(`./src/templates/blog.js`),
      context: { locale: title.locale },
    })
  )

  data.page.nodes.map(page =>
    page._allSlugLocales.map(slug =>
      actions.createPage({
        path: getPagePath(page, slug.locale),
        component: require.resolve(`./src/templates/page.js`),
        context: { id: page.id, locale: slug.locale },
      })
    )
  )

  data.product.nodes.map(page =>
    page._allSlugLocales.map(slug =>
      actions.createPage({
        path: getProductPath(page, slug.locale),
        component: require.resolve(`./src/templates/product.js`),
        context: {
          id: page.id,
          locale: slug.locale,
          categoryId: page.category.id,
        },
      })
    )
  )

  data.article.nodes.map(page =>
    page._allSlugLocales.map(slug =>
      actions.createPage({
        path: getArticlePath(page, slug.locale),
        component: require.resolve(`./src/templates/article.js`),
        context: { id: page.id, locale: slug.locale },
      })
    )
  )
  // data.articleCategory.nodes.map(page =>
  //   page._allSlugLocales.map(slug =>
  //     actions.createPage({
  //       path: getArticleCategoryPath(page, slug.locale),
  //       component: require.resolve(`./src/templates/articleCategory.js`),
  //       context: { id: page.id, locale: slug.locale },
  //     })
  //   )
  // )

  data.site.locales.map(locale =>
    actions.createPage({
      path: `/${locale.toLowerCase()}/search/`,
      component: require.resolve(`./src/templates/search.js`),
      context: { locale: locale },
    })
  )

  // data.category.nodes.map(page =>
  //   actions.createPage({
  //     path: getCategoryPath(page),
  //     component: require.resolve(`./src/templates/productCategory.js`),
  //     context: { id: page.id, locale: page.locale },
  //   })
  // )
}
