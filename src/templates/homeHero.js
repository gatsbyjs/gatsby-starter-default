import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Box, Container, Flex, Image } from "theme-ui"
import BackgroundVideo from "../components/blocks/backgroundVideo"

const HomeHero = ({ page, image }) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "primary",
        height: `calc(100vh - var(--navbar-height))`,
        minHeight: ["300px", "400px", `calc(100vh - var(--navbar-height))`],
        overflow: "hidden",
      }}
    >
      {image && (
        <>
          {/* Desktop version */}
          <Box
            sx={{
              display: ["none", "none", "block"],
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: "100%",
              width: "100%",
              ".gatsby-image-wrapper": {
                height: "100%",
                width: "100%",
              },
            }}
          >
            {image.mimeType === "video/mp4" ? (
              <BackgroundVideo media={image} />
            ) : image.gatsbyImageData ? (
              <GatsbyImage image={image.gatsbyImageData} alt="" />
            ) : (
              <Image src={image.url} alt="" />
            )}
          </Box>

          {/* Mobile version with fallback logic */}
          <Box
            sx={{
              display: ["block", "block", "none", "none"],
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: "100%",
              width: "100%",
              ".gatsby-image-wrapper": {
                height: "100%",
                width: "100%",
              },
            }}
          >
            {page.mobileImage ? (
              image.mimeType === "video/mp4" ? (
                <BackgroundVideo media={page.mobileImage} />
              ) : (
                <GatsbyImage image={page.mobileImage.gatsbyImageData} alt="" />
              )
            ) : (
              <GatsbyImage image={image.mobile} alt="" />
            )}
          </Box>
        </>
      )}
    </Box>
  )
}

export default HomeHero
