import React from "react"
import { Box, Flex, Grid, Heading, Text } from "@theme-ui/components"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Mousewheel, A11y } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import RichContentStructuredText from "../richContentStructuredText"

const ItemCarousel = ({ items }) => {
  // console.log(items)
  return (
    <Box>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoHeight={true}
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
  <Grid columns={[1, 1, 2]} gap={0}>
    <Flex
      sx={{
        backgroundColor: "secondary",
        alignItems: "center",
        justifyContent: "center",
        padding: 7,
        minHeight: ["20rem", "30rem"],
      }}
    >
      <Text variant="h3" sx={{ color: "light", textAlign: "center", mt: 0 }}>
        {richContent.title}
      </Text>
    </Flex>
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "lightBackground",
        padding: 4,
        minHeight: ["20rem"],
      }}
    >
      <Heading variant="h3" sx={{ mt: 0 }}>
        {richContent.subtitle}
      </Heading>
      <Box>
        <RichContentStructuredText text={richContent.body} />
      </Box>
    </Flex>
  </Grid>
)

export default ItemCarousel
