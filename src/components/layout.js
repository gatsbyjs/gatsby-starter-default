/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from "@theme-ui/components"
import { i18nContext, languages } from "../context/i18nContext"
import Header from "./header"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"
import Hreflang from "./hreflang"
import Footer from "./footer"

const Layout = ({ children, locale, i18nPaths }) => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      datoCmsSite: datoCmsSite {
        locale
      }
      gatsbySite: site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  return (
    <i18nContext.Provider
      value={languages[locale] || languages[data.datoCmsSite.locale]}
    >
      <LanguageSwitcherContext.Provider
        value={{ activeLocale: locale, paths: i18nPaths || [] }}
      >
        <Hreflang
          paths={i18nPaths}
          siteUrl={data.gatsbySite.siteMetadata.siteUrl}
        />
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh",
          }}
        >
          <Header />
          <Box as="main" sx={{ pt: 5 }}>
            {children}
          </Box>
          <Footer />
        </Flex>
      </LanguageSwitcherContext.Provider>
    </i18nContext.Provider>
  )
}

export default Layout
