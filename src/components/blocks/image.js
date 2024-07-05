import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box, Text, Container } from "@theme-ui/components"
import VideoBlock from "./videoBlock"

const Image = ({ image }) => {
  // console.log(image)
  return (
    <Container mb={5}>
      {image.mimeType === "video/mp4" && (
        <Box sx={{ position: "relative", width: "50%", height: "300px" }}>
          <VideoBlock
            media={image}
            sx={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      )}

      {image.mimeType === "image/png" && (
        <Box
          sx={{
            mb: 2,
            ".gatsby-image-wrapper": {
              width: "100%",
            },
          }}
        >
          <GatsbyImage image={image.gatsbyImageData} alt="" />
        </Box>
      )}
      {image.title && (
        <Box>
          <Text variant="caption">{image.title}</Text>
        </Box>
      )}
    </Container>
  )
}

export default Image
