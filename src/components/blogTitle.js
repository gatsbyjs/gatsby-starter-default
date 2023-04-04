import React from "react"
import { Heading } from "@theme-ui/components"

const BlogTitle = ({ page }) => {
  return (
    <Heading as="h1" sx={{ mb: 5 }}>
      {page.title}
    </Heading>
  )
}

export default BlogTitle
