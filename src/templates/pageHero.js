import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Box, Container, Heading } from "theme-ui"
import Breadcrumbs from "../components/breadcrumbs"

const PageHero = ({ page, image }) => (
  <Box sx={{ position: "relative", backgroundColor: "primary", mb: 4 }}>
    {image && (
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          ".gatsby-image-wrapper": { width: "100%" },
          overflow: "hidden",
        }}
      >
        <GatsbyImage image={image.gatsbyImageData} />
      </Box>
    )}
    <Container sx={{ paddingTop: [5, 9], position: "relative" }}>
      <Heading as="h1" variant="h1" color="light">
        {page.title}
      </Heading>
      {page.model.apiKey === "page" && <Breadcrumbs page={page} />}
    </Container>
  </Box>
)

export default PageHero
