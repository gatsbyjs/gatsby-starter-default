import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box, Text } from "@theme-ui/components"

// Begin swiper
import SwiperCore, { Pagination, Mousewheel, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.min.css"
SwiperCore.use([Mousewheel, Pagination, A11y])
// End swiper

const ImageGallery = ({ images }) => {
  console.log(images)
  return (
    <Box
      mb={4}
      mt={4}
      sx={{
        marginX: [0, 0, -7],
      }}
    >
      {images.length > 1 ? (
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {images.map(image => (
            <SwiperSlide key={image.originalId}>
              <StyledImage image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <StyledImage image={images[0]} />
      )}
    </Box>
  )
}

const StyledImage = ({ image }) => (
  <>
    <Box sx={{ mb: 2, ".gatsby-image-wrapper": { borderRadius: "md" } }}>
      <GatsbyImage image={image.gatsbyImageData} />
    </Box>
    <Box sx={{ paddingX: [0, 0, 7] }}>
      <Text
        variant="caption"
      >
        {image.title}
      </Text>
    </Box>
  </>
)

export default ImageGallery
