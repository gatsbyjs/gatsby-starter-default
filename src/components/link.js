import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as ThemeUiLink, NavLink as ThemeUiNavLink } from "theme-ui"

const Link = props => {
  return <ThemeUiLink as={AsLink} {...props} />
}

const NavLink = props => {
  return <ThemeUiNavLink as={AsLink} {...props} />
}

const AsLink = props => {
  return <GatsbyLink {...props} activeClassName="active" />
}

export { Link, NavLink }
