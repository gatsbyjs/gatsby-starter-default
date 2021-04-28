const defaultLocale = "it"

export function getPagePath(page, locale) {
  console.log(page)
  const pageLocale = locale || page.locale
  let lang = pageLocale === defaultLocale ? "" : `/${pageLocale}`
  let path = `/${page._allSlugLocales.find(x => x.locale === pageLocale).value}`
  if (page.root) {
    return lang + path
  }
  path = `/${
    page.treeParent._allSlugLocales.find(x => x.locale === pageLocale).value
  }${path}`
  if (page.treeParent.root) {
    return lang + path
  }
  path = `/${
    page.treeParent.treeParent._allSlugLocales.find(
      x => x.locale === pageLocale
    ).value
  }${path}`
  return lang + path
}

export function getHomePath(locale) {
  return locale === defaultLocale ? "/" : `/${locale}`
}

export function getBlogPath(page) {
  return page.locale === defaultLocale ? `/blog` : `/${page.locale}/blog`
}

export function getArticlePath(page) {
  return page.locale === defaultLocale
    ? `/blog/${page.slug}`
    : `/${page.locale}/blog/${page.slug}`
}
