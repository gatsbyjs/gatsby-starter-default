import React from "react"
import { Box, Flex } from "@theme-ui/components"
import { Link } from "./link"
import {
  getArticleCategoryPath,
  getBlogPath,
  getHomePath,
  getPagePath,
} from "../utils/path"

const Breadcrumbs = ({ page }) => {
  // console.log(page)
  function renderSwitch(page) {
    switch (page.model.apiKey) {
      case "article":
        return <ArticleBreadcrumbs page={page} />
      default:
        return <PageBreadcrumbs page={page} />
    }
  }

  const PageBreadcrumbs = ({ page }) => (
    <List>
      <Item>
        <Link color="light" to={getHomePath(page.locale)}>Home</Link>
      </Item>
      {page.treeParent && page.treeParent.treeParent && (
        <Item>
          <Link to={getPagePath(page.treeParent.treeParent)}>
            {page.treeParent.treeParent.title ||
              page.treeParent.treeParent.name}
          </Link>
        </Item>
      )}
      {page.treeParent && (
        <Item>
          <Link to={getPagePath(page.treeParent)}>{page.treeParent.title}</Link>
        </Item>
      )}
      <Item>{page.title}</Item>
    </List>
  )

  const ArticleBreadcrumbs = ({ page }) => (
    <List>
      <Item>
        <Link to={getHomePath(page.locale)}>Home</Link>
      </Item>
      <Item>
        <Link to={getBlogPath(page.locale)}>Blog</Link>
      </Item>
      {page.category && (
        <Item>
          <Link to={getArticleCategoryPath(page.category, page.locale)}>
            {page.category.title}
          </Link>
        </Item>
      )}
    </List>
  )

  return renderSwitch(page)
}

const List = props => {
  return (
    <Flex
      {...props}
      sx={{
        flexDirection: "row",
        margin: 0,
        padding: 0,
        listStyle: "none",
        a: {
          textDecoration: "none",
          color: "#dedede",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      }}
      as="ul"
    />
  )
}

const Item = props => {
  return (
    <Box
      {...props}
      sx={{
        marginRight: 2,
        "&::after": {
          content: '"|"',
          color: "dedede",
          marginLeft: 2,
          display: ["inline"],
        },
        "&:last-child": {
          marginRight: 0,
          "&::after": {
            display: "none",
          },
        },
      }}
      as="li"
    />
  )
}

export default Breadcrumbs
