import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Box, Image } from "theme-ui"
import BackgroundVideo from "../components/blocks/backgroundVideo"

const HomeHero = ({ page }) => (
  <Box
    sx={{
      position: "relative",
      backgroundColor: "primary",
      height: `calc(100vh - var(--navbar-height))`,
      minHeight: ["300px", "400px", `calc(100vh - var(--navbar-height))`],
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
      {page.heroImage.mimeType === "video/mp4" ? (
        <BackgroundVideo media={page.heroImage} />
      ) : page.heroImage.gatsbyImageData ? (
        <GatsbyImage image={page.heroImage.gatsbyImageData} alt="" />
      ) : (
        <Image src={page.heroImage.url} alt="" />
      )}
    </Box>
  </Box>
)

export default HomeHero
