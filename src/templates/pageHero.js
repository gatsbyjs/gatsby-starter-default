import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Box, Container, Flex, Image, Heading } from "theme-ui"
import Breadcrumbs from "../components/breadcrumbs"
import BackgroundVideo from "../components/blocks/backgroundVideo"
import PageIntro from "../components/blocks/pageIntro"
const PageHero = ({ block, page }) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "primary",
        height: ["100vh"],
        minHeight: ["600px", "550px", "550px"],
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
      <Container
        sx={{ position: "relative", height: "100%", pb: [4, 4, 7, 9] }}
      >
        <Flex
          sx={{
            justifyContent: "flex-end",
            flexDirection: "column",
            height: ["100%"],
          }}
        >
          <Flex
            sx={{
              width: "100%",
              position: "absolute",
              height: "100%",
            }}
          >
            {block.body && <PageIntro page={page} block={block} />}
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default PageHero
