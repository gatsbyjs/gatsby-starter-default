const defaultLocale = "it"

export function getPagePath(page) {
  let lang = page.locale === defaultLocale ? "" : `/${page.locale}`
  let path = `/${page.slug}`
  if (page.root) {
    return lang + path
  }
  path = `/${page.treeParent.slug}${path}`
  if (page.treeParent.root) {
    return lang + path
  }
  path = `/${page.treeParent.treeParent.slug}${path}`
  return lang + path
}

export function getHomePath(locale) {
  return locale === defaultLocale ? "/" : `/${locale}`
}

export function getBlogPath(page) {
  return page.locale === defaultLocale ? `/blog` : `/${page.locale}/blog`
}

export function getArticlePath(page) {
  return page.locale === defaultLocale ? `/blog/${page.slug}` : `/${page.locale}/blog/${page.slug}`
}
