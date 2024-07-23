import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Box, Container } from "theme-ui"
import Video from "../components/blocks/video"
import BackgroundVideo from "../components/blocks/backgroundVideo"

const HomeHero = ({ page }) => (
  <Box
    sx={{
      position: "relative",
      backgroundColor: "primary",
      height: ["100%", "100%", "100vh"],

      minHeight: ["300px", "400px", "100vh"],
    }}
  >
    <Box
      sx={{
        ".gatsby-image-wrapper": {
          width: "100%",
          height: "100%",
        },
      }}
    >
      {page.heroImage.mimeType === "image/png" && (
        <GatsbyImage image={page.heroImage.gatsbyImageData} alt="" />
      )}
    </Box>
    <BackgroundVideo media={page.heroImage} />
  </Box>
)

export default HomeHero
