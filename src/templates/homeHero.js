import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Box, Container, Flex, Image, Heading } from "theme-ui"
import BackgroundVideo from "../components/blocks/backgroundVideo"

const HomeHero = ({ block }) => {
  return (
    <Box
      sx={{
        position: "relative",

        height: `calc(100vh - var(--navbar-height))`,
        minHeight: ["300px", "400px", `calc(100vh - var(--navbar-height))`],
        overflow: "hidden",
      }}
    >
      {block.heroImage && (
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
            {block.heroImage.mimeType === "video/mp4" ? (
              <BackgroundVideo media={block.heroImage} />
            ) : block.heroImage.gatsbyImageData ? (
              <GatsbyImage image={block.heroImage.gatsbyImageData} alt="" />
            ) : (
              <Image src={block.heroImage.url} alt="" />
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
            {block.mobile ? (
              block.mobile.mimeType === "video/mp4" ? (
                <BackgroundVideo media={block.mobile} />
              ) : (
                <GatsbyImage image={block.mobile.gatsbyImageData} alt="" />
              )
            ) : (
              <GatsbyImage image={block.heroImage.mobile} alt="" />
            )}
          </Box>
        </>
      )}
    </Box>
  )
}

export default HomeHero
