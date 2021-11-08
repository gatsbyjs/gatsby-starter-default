import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as ThemeUiLink, NavLink as ThemeUiNavLink } from "theme-ui"
import { OutboundLink as OutLink  } from "gatsby-plugin-google-gtag"

const InboundLink = props => {
  return <ThemeUiLink as={AsLink} {...props} />
}

const AsLink = props => {
  return <GatsbyLink {...props} activeClassName="active" />
}

const OutboundLink = props =>{
  return <ThemeUiLink as={AsOutboundLink} {...props} />
}

const AsOutboundLink = props =>{
  return <OutLink {...props} />
}

export { InboundLink, OutboundLink }
