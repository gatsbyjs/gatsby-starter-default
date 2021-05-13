import React from "react"
import { Box, Text, Container, Heading, Flex } from "@theme-ui/components"
import Breadcrumbs from "./breadcrumbs"
import { Link } from "./link"
import { getArticleCategoryPath } from "../utils/path"

const BlogTitle = ({ page }) => {
  return (
    <Heading as="h1" sx={{ mb: 5 }}>
      {page.title}
    </Heading>
  )
}

export default BlogTitle
