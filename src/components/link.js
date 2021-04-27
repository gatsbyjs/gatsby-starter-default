import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as ThemeUiLink } from "theme-ui"

const Link = props => {
  return <ThemeUiLink as={AsLink} {...props} />
}

const AsLink = props => {
  return <GatsbyLink {...props} />
}

export default Link
