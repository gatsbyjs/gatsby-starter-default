import React from "react"
import { Box, Container, Flex, Grid, Heading, Text } from "@theme-ui/components"

// Begin swiper
import SwiperCore, { Pagination, Mousewheel, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.min.css"
import StyledStructuredText from "../styledStructuredText"
SwiperCore.use([Mousewheel, Pagination, A11y])
// End swiper

const ItemCarousel = ({ items }) => {
  console.log(items)
  return (
    <Box>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        grabCursor={true}
      >
        {items.map(item => (
          <SwiperSlide key={item.originalId}>
            <Item richContent={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

const Item = ({ richContent }) => (
  <Grid columns={[1,1,2]} gap={0}>
    <Flex
      sx={{
        backgroundColor: "secondary",
        alignItems: "center",
        justifyContent: "center",
        padding: 7,
        minHeight: "30rem",
      }}
    >
      <Heading sx={{ color: "light", textAlign: "center" }}>
        {richContent.title}
      </Heading>
    </Flex>
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "lightBackground",
        padding: 4,
      }}
    >
      <Heading variant="lead">{richContent.subtitle}</Heading>
      <Box>
        <StyledStructuredText text={richContent.body} />
      </Box>
    </Flex>
  </Grid>
)

export default ItemCarousel
