import React from "react"
import { Box, Text, Container, Heading, Flex } from "@theme-ui/components"
import Breadcrumbs from "./breadcrumbs"

const PageTitle = ({ page }) => {
  return (
    <Container>
      <Flex sx={{ justifyContent: "center", mb: 4 }}>
        <Breadcrumbs page={page} />
      </Flex>
      <Heading as="h1" sx={{ textAlign: "center" }}>
        {page.title}
      </Heading>
      {page.meta && page.meta.firstPublishedAt && (
        <Box>
          <Text as="p" variant="caption" sx={{ textAlign: "center", mt: 4 }}>
            {page.meta.firstPublishedAt}
          </Text>
        </Box>
      )}
    </Container>
  )
}

export default PageTitle
