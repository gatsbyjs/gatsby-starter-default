/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import theme from "../theme"
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { Toolbar } from "@mui/material"

const Layout = ({ showApplyNow, ...props }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeTopLayout theme={theme}>
      <Header
        showApplyNow={showApplyNow}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          <main>{props.children}</main>
        </Box>
        <footer
          style={{
            marginTop: `2rem`
          }}
        >
          <div
            style={{
              fontSize: 14,
              color: "grey"
            }}
          >
            © Cachar driving school{" | "}
            {new Date().getFullYear()}
            <a
              style={{
                color: "grey",
                textDecoration: "none"
              }}
              href="upi://pay?pa=samplevpa@ybl"
            >
              {" | "}(site author)
            </a>
          </div>
        </footer>
      </Container>
    </ThemeTopLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
