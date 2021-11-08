import React from "react"
import { Box, Flex } from "@theme-ui/components"
import { InboundLink, OutboundLink  } from "./link"
import {
  getArticleCategoryPath,
  getBlogPath,
  getHomePath,
  getCategoryPath,
  getPagePath,
} from "../utils/path"

const Breadcrumbs = ({ page , productCategory = undefined}) => {
  // console.log(page)
  function renderSwitch(page) {
    switch (page.model.apiKey) {
      case "product":
        return (
          <ProductBreadcrumbs
            page={page}
            pageCategory={
              productCategory ? productCategory : (page.category && page.category)
            }
          />
        )
      case "product_category":
        return <CategoryBreadcrumbs page={page} />
      case "article":
        return <ArticleBreadcrumbs page={page} />
      default:
        return <PageBreadcrumbs page={page} />
    }
  }

  const ProductBreadcrumbs = ({ page, pageCategory}) => (
    <List>
      <Item>
        <InboundLink color="secondary" to={getHomePath(page.locale)}>
          Home
        </InboundLink>
      </Item>
      {pageCategory && (
        <Item>
          <InboundLink color="secondary" to={getCategoryPath(pageCategory,pageCategory.locale)}>
            {pageCategory.title}
          </InboundLink>
        </Item>
      )}
      <Item color="light">{page.title}</Item>
    </List>
  )


  const CategoryBreadcrumbs = ({ page }) => (
    <List>
      <Item>
        <InboundLink color="secondary" to={getHomePath(page.locale)}>
          Home
        </InboundLink>
      </Item>
      {page.treeParent && page.treeParent.treeParent && (
        <Item>
          <InboundLink to={getCategoryPath(page.treeParent.treeParent)}>
            {page.treeParent.treeParent.title}
          </InboundLink>
        </Item>
      )}
      {page.treeParent && (
        <Item>
          <InboundLink to={getCategoryPath(page.treeParent)}>{page.treeParent.title}</InboundLink>
        </Item>
      )}
      <Item color="light">{page.title}</Item>
    </List>
  )

  const PageBreadcrumbs = ({ page }) => (
    <List>
      <Item>
        <InboundLink color="light" to={getHomePath(page.locale)}>Home</InboundLink>
      </Item>
      {page.treeParent && page.treeParent.treeParent && (
        <Item>
          <InboundLink to={getPagePath(page.treeParent.treeParent)}>
            {page.treeParent.treeParent.title ||
              page.treeParent.treeParent.name}
          </InboundLink>
        </Item>
      )}
      {page.treeParent && (
        <Item>
          <InboundLink to={getPagePath(page.treeParent)}>{page.treeParent.title}</InboundLink>
        </Item>
      )}
      <Item>{page.title}</Item>
    </List>
  )

  const ArticleBreadcrumbs = ({ page }) => (
    <List>
      <Item>
        <InboundLink to={getHomePath(page.locale)}>Home</InboundLink>
      </Item>
      <Item>
        <InboundLink to={getBlogPath(page.locale)}>Blog</InboundLink>
      </Item>
      {page.category && (
        <Item>
          <InboundLink to={getArticleCategoryPath(page.category, page.locale)}>
            {page.category.title}
          </InboundLink>
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
