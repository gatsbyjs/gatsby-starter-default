import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box, Text } from "@theme-ui/components"

const Image = ({ image }) => {
  // console.log(image)
  return (
    <Box mb={5}>
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
      {image.title && (
        <Box>
          <Text variant="caption">{image.title}</Text>
        </Box>
      )}
    </Box>
  )
}

export default Image
