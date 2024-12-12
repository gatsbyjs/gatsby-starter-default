const defaultLocale = "it" //cambiare in base al default del site

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
  "en-US": {
    category: "category",
    search: "search",
    products: "products",
  },
}

export function getPagePath(page, locale) {
  const pageLocale = locale || page.locale
  let lang =
    pageLocale === defaultLocale ? "/" : `/${pageLocale.toLowerCase()}/`

  let path = `${page._allSlugLocales.find(x => x.locale === pageLocale).value}`
  if (page.root) {
    return lang + `${path}/`
  }

  path = `${
    page.treeParent._allSlugLocales.find(x => x.locale === pageLocale).value
  }/${path}`
  if (page.treeParent.root) {
    return lang + `${path}/`
  }
  path = `${
    page.treeParent.treeParent._allSlugLocales.find(
      x => x.locale === pageLocale
    ).value
  }${path}`
  return lang + `${path}/`
}
export function getCategoryPath(category, locale) {
  const localeSlug = category._allSlugLocales.find(x => x.locale === locale)
  if (!localeSlug) return null // Return null if locale is not found

  let lang = locale === defaultLocale ? "/" : `/${locale.toLowerCase()}/`
  let categoryPath = i18nPath[locale].category.toLowerCase()
  return lang + `${categoryPath}/${localeSlug.value}/`
}
export function getProductPath(page, locale) {
  let lang = locale === defaultLocale ? "/" : `/${locale.toLowerCase()}/`
  let path = `${page.slug}`
  let productPath = i18nPath[locale].products.toLowerCase()
  return lang + `${productPath}/${path}/`
}

export function getHomePath(locale) {
  return locale === defaultLocale ? "/" : `/${locale.toLowerCase()}/`
}

export function getSearchPath(locale) {
  if (typeof locale !== "string") {
    console.error(new Error(`Stack trace:`).stack)
    throw new Error(
      `Expected string but received ${typeof locale}: ${JSON.stringify(locale)}`
    )
  }
  return `/${locale.toLowerCase()}/search/`
}
export function getBlogPath(locale) {
  return locale === defaultLocale ? `/blog/` : `/${locale.toLowerCase()}/blog/`
}

export function getArticlePath(page, locale) {
  return locale === defaultLocale
    ? `/blog/${page.slug}`
    : `/${locale.toLowerCase()}/blog/${page.slug}/`
}

export function getArticleCategoryPath(page, locale) {
  return locale === defaultLocale
    ? `/blog/${i18nPath[locale].category}/${
        page._allSlugLocales.find(x => x.locale === locale).value
      }/`
    : `/${locale.toLowerCase()}/blog/${i18nPath[locale].category}/${
        page._allSlugLocales.find(x => x.locale === locale).value
      }/`
}
