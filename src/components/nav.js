import { Box } from "@theme-ui/components"
import React from "react"
import { i18nContext } from "../context/i18nContext"
import { useMenu } from "../hooks/useMenu"
import {
  getArticlePath,
  getBlogPath,
  getHomePath,
  getPagePath,
} from "../utils/path"
import Link from "./link"
import { Link as ThemeUiLink } from "theme-ui"

const Nav = () => {
  const locale = React.useContext(i18nContext).locale
  const menu = useMenu(locale)
  //   console.log(menu)

  function renderSwitch(item) {
    if (item.link) {
      switch (item.link.model.apiKey) {
        case "page":
          return <Link to={getPagePath(item.link)}>{item.anchor}</Link>
        case "blog_page":
          return <Link to={getBlogPath(item.link)}>{item.anchor}</Link>
        case "article":
          return <Link to={getArticlePath(item.link)}>{item.anchor}</Link>
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

  const TextComponent = ({ item }) => (
    <>
      {item.treeChildren && (
        <Box as="ul">
          {item.treeChildren.map(item =>
            item.anchor ? (
              <Box as="li" key={item.id}>
                {renderSwitch(item)}
                {item.treeChildren && <TextComponent item={item} />}
              </Box>
            ) : null
          )}
        </Box>
      )}
    </>
  )

  return (
    <Box as="nav">
      <Box as="ul">
        <Box as="li">
          <Link to={getHomePath(locale)}>Home</Link>
        </Box>
        {menu.map(item => (
          <Box as="li" key={item.id}>
            {renderSwitch(item)}
            <TextComponent item={item} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Nav
