const defaultLocale = "it"

const i18nPath = {
  it: {
    category: "categoria",
    search: "cerca",
  },
  en: {
    category: "category",
    search: "search",
  },
  "en-us": {
    category: "category",
    search: "search",
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
  console.log("locale-getSearchPath",locale)
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

export function getArticlePath(page, locale) {
  return locale === defaultLocale
    ? `/blog/${page._allSlugLocales.find(x => x.locale === locale).value}`
    : `/${locale.toLowerCase()}/blog/${
        page._allSlugLocales.find(x => x.locale === locale).value
      }/`
}
