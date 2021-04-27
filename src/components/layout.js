/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from "@theme-ui/components"
import { i18nContext, languages } from "../context/i18nContext"
import Header from "./header"

const Layout = ({ children, locale }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site: datoCmsSite {
        locale
      }
    }
  `)

  return (
    <i18nContext.Provider
      value={languages[locale] || languages[data.site.locale]}
    >
      <Header />
      <Box as="main">{children}</Box>
    </i18nContext.Provider>
  )
}

export default Layout
