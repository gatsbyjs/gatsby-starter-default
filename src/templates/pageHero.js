import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Box, Container, Flex, Image, Heading } from "theme-ui"
import Breadcrumbs from "../components/breadcrumbs"
import BackgroundVideo from "../components/blocks/backgroundVideo"

const PageHero = ({ page, image }) => {
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
          <Heading as="h1">{page.title}</Heading>
          {page.subtitle && (
            <Box
              dangerouslySetInnerHTML={{ __html: page.subtitle }}
              as="h2"
              sx={{
                width: ["100%", "100%", "75%", "40%"],
                mt: "40px",
                lineHeight: 0.9,
                color: "light",
                fontSize: ["50px", "50px", "80px"],
                "@media screen and (max-height: 720px) and (min-width: 769px)":
                  {
                    fontSize: ["30px", "40px", "60px"],
                  },
                fontWeight: 300,
                m: [0],
              }}
            />
          )}
          <Box
            sx={{
              pt: ["40px", "40px", "40px", "80px"],
              ml: "3px",
              "@media screen and (max-width: 768px)": {
                pt: ["20px", "20px", "20px", "20px"],
              },
            }}
          >
            <Breadcrumbs page={page} />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default PageHero
