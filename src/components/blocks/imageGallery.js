import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box, Text } from "@theme-ui/components"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Mousewheel, A11y } from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import BackgroundVideo from "./backgroundVideo"

const ImageGallery = ({ images }) => {
  return (
    <Box>
      {images.length > 1 ? (
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {images.map(image => (
            <SwiperSlide key={image.originalId}>
              {image.mimeType === "video/mp4" && (
                <BackgroundVideo media={image} />
              )}
              {image.mimeType === "image/png" && <StyledImage image={image} />}
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
    <Box
      sx={{
        mb: 2,
        ".gatsby-image-wrapper": {
          borderRadius: "md",
          width: "100%",
          img: {
            height: "auto",
          },
        },
      }}
    >
      <GatsbyImage image={image.gatsbyImageData} alt="" />
    </Box>
    <Box>
      <Text variant="caption">{image.title}</Text>
    </Box>
  </>
)

export default ImageGallery
