const defaultLocale = "it"

export function getPagePath(page, locale) {
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

export function getBlogPath(locale) {
  return locale === defaultLocale ? `/blog` : `/${locale}/blog`
}

export function getArticlePath(page, locale) {
  const pageLocale = locale
  return locale === defaultLocale
    ? `/blog/${page._allSlugLocales.find(x => x.locale === pageLocale).value}`
    : `/${locale}/blog/${
        page._allSlugLocales.find(x => x.locale === pageLocale).value
      }`
}
