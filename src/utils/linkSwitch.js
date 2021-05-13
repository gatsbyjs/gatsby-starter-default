import React from "react"
import {
  getArticleCategoryPath,
  getArticlePath,
  getBlogPath,
  getPagePath,
} from "./path"
import { Link, NavLink } from "../components/link"
import { Link as ThemeUiLink, Box } from "theme-ui"

function linkSwitch(item, locale) {
  // console.log(item)
  if (item.link && item.link.link) {
    switch (item.link.link.model.apiKey) {
      case "page":
        return (
          <Link to={getPagePath(item.link.link, locale)}>{item.anchor}</Link>
        )
      case "blog_page":
        return <Link to={getBlogPath(locale)}>{item.anchor}</Link>
      case "article":
        return (
          <Link to={getArticlePath(item.link.link, locale)}>{item.anchor}</Link>
        )
      case "article_category":
        return (
          <Link to={getArticleCategoryPath(item.link.link, locale)}>
            {item.anchor}
          </Link>
        )
      default:
        return null
    }
  }
  if (item.link) {
    return (
      <ThemeUiLink
        href={item.link.url}
        target="blank"
        rel="nofollow noopener"
      >
        {item.anchor}
      </ThemeUiLink>
    )
  }
  return <Box sx={{ cursor: "default" }}>{item.anchor}</Box>
}

export default linkSwitch
