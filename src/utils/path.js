const defaultLocale = "it" //cambiare in base al default del site

const i18nPath = {
  it: {
    category: "categoria",
    search: "cerca",
    products: "prodotti",
    jobs: "lavori",
  },
  en: {
    category: "category",
    search: "search",
    products: "products",
    jobs: "jobs",
  },
  "en-US": {
    category: "category",
    search: "search",
    products: "products",
    jobs: "jobs",
  },
}

export function getPagePath(page, locale) {
  const pageLocale = locale || page.locale
  const localeSlug = page._allSlugLocales.find(x => x.locale === pageLocale)
  if (!localeSlug) return null

  let lang =
    pageLocale === defaultLocale ? "/" : `/${pageLocale.toLowerCase()}/`

  if (page.root) {
    return lang + `${localeSlug.value}/`
  }

  const parentLocaleSlug = page.treeParent._allSlugLocales.find(
    x => x.locale === pageLocale
  )
  if (!parentLocaleSlug) return null

  let path = `${parentLocaleSlug.value}/${localeSlug.value}`

  if (page.treeParent.root) {
    return lang + `${path}/`
  }

  const grandParentLocaleSlug = page.treeParent.treeParent._allSlugLocales.find(
    x => x.locale === pageLocale
  )
  if (!grandParentLocaleSlug) return null

  path = `${grandParentLocaleSlug.value}${path}`
  return lang + `${path}/`
}
export function getCategoryPath(category, locale) {
  const localeSlug = category._allSlugLocales.find(x => x.locale === locale)
  if (!localeSlug) return null // Return null if locale is not found

  let lang = locale === defaultLocale ? "/" : `/${locale.toLowerCase()}/`
  let categoryPath = i18nPath[locale].category.toLowerCase()
  return lang + `${categoryPath}/${localeSlug.value}/`
}
export function getJobPath(page, locale) {
  const localeSlug = page._allSlugLocales.find(x => x.locale === locale)
  if (!localeSlug) return null

  return locale === defaultLocale
    ? `/${i18nPath[locale.toLowerCase()].jobs}/${localeSlug.value}/`
    : `/${locale.toLowerCase()}/${i18nPath[locale.toLowerCase()].jobs}/${
        localeSlug.value
      }/`
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
  const localeSlug = page._allSlugLocales.find(x => x.locale === locale)
  if (!localeSlug) return null

  return locale === defaultLocale
    ? `/blog/${localeSlug.value}`
    : `/${locale.toLowerCase()}/blog/${localeSlug.value}/`
}

export function getArticleCategoryPath(page, locale) {
  const localeSlug = page._allSlugLocales.find(x => x.locale === locale)
  if (!localeSlug) return null

  return locale === defaultLocale
    ? `/blog/${i18nPath[locale].category}/${localeSlug.value}/`
    : `/${locale.toLowerCase()}/blog/${i18nPath[locale].category}/${
        localeSlug.value
      }/`
}
