import { Link as GatsbyLink } from "gatsby"
import React from "react"

// NOTE: Via...https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#reminder-use-link-only-for-internal-links

const Link = ({ children, to, activeClassName, partiallyActive, ...props }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        className="menu--link"
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...props}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...props} className="menu--link">
      {children}
    </a>
  )
}

export default Link
