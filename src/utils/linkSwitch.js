import React from "react"
import { getArticlePath, getBlogPath, getPagePath } from "./path"
import { Link, NavLink } from "../components/link"
import { Link as ThemeUiLink, Box } from "theme-ui"

function linkSwitch(item, locale) {
  if (item.link) {
    switch (item.link.model.apiKey) {
      case "page":
        return (
          <NavLink to={getPagePath(item.link, locale)}>{item.anchor}</NavLink>
        )
      case "blog_page":
        return <Link to={getBlogPath(locale)}>{item.anchor}</Link>
      case "article":
        return <Link to={getArticlePath(item.link, locale)}>{item.anchor}</Link>
      case "external_link":
        return (
          <ThemeUiLink
            href={item.link.url}
            target="blank"
            rel="nofollow noopener"
          >
            {item.anchor}
          </ThemeUiLink>
        )
      default:
        return null
    }
  }
  return <Box>{item.anchor}</Box>
}

export default linkSwitch
