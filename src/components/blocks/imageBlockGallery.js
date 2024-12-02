import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box, Text, Grid, Container, Flex, Image } from "@theme-ui/components"

const ImageBlockGallery = ({ images }) => {
  console.log(images)
  if (images.length === 1) {
    return (
      <Box>
        <SingleImageLayout image={images[0]} />
      </Box>
    )
  }

  return (
    <Flex
      sx={{
        gap: 5,
      }}
    >
      {images.map((image, index) => (
        <Flex
          sx={{
            justifyContent: "space-between",
            alignContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Text sx={{ fontSize: "24px", fontWeight: 400 }} variant="caption">
            {image.title}
          </Text>
          <Image src={image.url} />
        </Flex>
      ))}
    </Flex>
  )
}

const SingleImageLayout = ({ image }) => (
  <Box
    sx={{
      mb: 2,
      ".gatsby-image-wrapper": {
        borderRadius: "md",
        maxWidth: "150px",
        img: {
          height: "auto",
        },
      },
    }}
  >
    {image.url && <Image src={image.url} alt={image.title} />}

    <Box>
      <Text variant="caption">{image.title}</Text>
    </Box>
  </Box>
)

export default ImageBlockGallery
