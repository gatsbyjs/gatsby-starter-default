import React from "react"
import {
  getArticleCategoryPath,
  getArticlePath,
  getBlogPath,
  getPagePath,
} from "./path"
import { Link } from "../components/link"
import { Link as ThemeUiLink } from "theme-ui"

function linkSwitch(item, locale) {
  // console.log(item)
  if (item.link) {
    switch (item.link.model.apiKey) {
      case "page":
        return <Link to={getPagePath(item.link, locale)}>{item.anchor}</Link>
      case "blog_page":
        return <Link to={getBlogPath(locale)}>{item.anchor}</Link>
      case "article":
        return <Link to={getArticlePath(item.link, locale)}>{item.anchor}</Link>
      case "article_category":
        return (
          <Link to={getArticleCategoryPath(item.link, locale)}>
            {item.anchor}
          </Link>
        )
      default:
        return null
    }
  }
  return (
    <ThemeUiLink href={item.url} target="blank" rel="nofollow noopener">
      {item.anchor}
    </ThemeUiLink>
  )
}

export default linkSwitch
