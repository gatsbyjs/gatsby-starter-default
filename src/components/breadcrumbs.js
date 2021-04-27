import React from "react"
import { Box } from "@theme-ui/components"
import Link from "./link"
import { getBlogPath, getHomePath, getPagePath } from "../utils/path"

const Breadcrumbs = ({ page }) => {
  // console.log(page)
  function renderSwitch(page) {
    switch (page.model.apiKey) {
      case "page":
        return <PageBreadcrumbs page={page} />
      case "article":
        return <ArticleBreadcrumbs page={page} />
      default:
        return <PageBreadcrumbs page={page} />
    }
  }

  const PageBreadcrumbs = ({ page }) => (
    <Box as="ul">
      <Box as="li">
        <Link to={getHomePath(page.locale)}>Home</Link>
      </Box>
      {page.treeParent && page.treeParent.treeParent && (
        <Box as="li">
          <Link to={getPagePath(page.treeParent.treeParent)}>
            {page.treeParent.treeParent.title ||
              page.treeParent.treeParent.name}
          </Link>
        </Box>
      )}
      {page.treeParent && (
        <Box as="li">
          <Link to={getPagePath(page.treeParent)}>{page.treeParent.title}</Link>
        </Box>
      )}
      <Box as="li">{page.title}</Box>
    </Box>
  )

  const ArticleBreadcrumbs = ({ page }) => (
    <Box as="ul">
      <Box as="li">
        <Link to={getHomePath(page.locale)}>Home</Link>
      </Box>
      <Box as="li">
        <Link to={getBlogPath(page)}>Blog</Link>
      </Box>
      <Box as="li">{page.title}</Box>
    </Box>
  )

  return <>{renderSwitch(page)}</>
}

export default Breadcrumbs
