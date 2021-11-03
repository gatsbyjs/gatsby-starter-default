const defaultLocale = "it"

const i18nPath = {
  it: {
    category: "categoria",
    search: "cerca",
    products: "prodotti"
  },
  en: {
    category: "category",
    search: "search",
    products: "products"
  },
  "en-us": {
    category: "category",
    search: "search",
    products: "products"
  },
}

export function getPagePath(page, locale) {
  const pageLocale = locale || page.locale
  let lang = pageLocale === defaultLocale ? "/" : `/${pageLocale.toLowerCase()}/`
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

export function getHomePath(locale) {
  return locale === defaultLocale ? "/" : `/${locale.toLowerCase()}/`
}

export function getSearchPath(locale) {
  return locale === defaultLocale
    ? `/${i18nPath[locale.toLowerCase()].search}/`
    : `/${locale.toLowerCase()}/${i18nPath[locale.toLowerCase()].search}/`
}

export function getBlogPath(locale) {
  return locale === defaultLocale ? `/blog/` : `/${locale.toLowerCase()}/blog/`
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

export function getCategoryPath(page, locale) {
  return page.locale === defaultLocale
    ? `/${i18nPath[page.locale.toLowerCase()].category}/${page.slug}/`
    : `/${page.locale.toLowerCase()}/${
        i18nPath[page.locale.toLowerCase()].category
      }/${page.slug}/`
}

export function getArticlePath(page, locale) {
  return locale === defaultLocale
    ? `/blog/${page._allSlugLocales.find(x => x.locale === locale).value}`
    : `/${locale.toLowerCase()}/blog/${
        page._allSlugLocales.find(x => x.locale === locale).value
      }/`
}

export function getProductPath(page, locale) {
  return locale === defaultLocale
  ? `/${i18nPath[locale.toLowerCase()].products}/${page.slug}/`
  : `/${locale.toLowerCase()}/${i18nPath[page.locale.toLowerCase()].products}/${page.slug}/`
}
