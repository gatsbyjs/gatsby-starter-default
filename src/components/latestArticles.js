import React from "react"
import { Box, Container, Text } from "@theme-ui/components"
import ArticleThumb from "../components/articleThumb"

// Begin swiper
import SwiperCore, { Pagination, Mousewheel, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { i18nContext } from "../context/i18nContext"
SwiperCore.use([Mousewheel, Pagination, A11y])
// End swiper

const LatestArticles = ({ articles }) => {
  return (
    <Box sx={{ ".swiper-wrapper": { alignItems: "stretch" } }}>
      <Container>
        <Text as="h2" variant="h2" mb={5}>
          <i18nContext.Consumer>{t => t.latestArticles}</i18nContext.Consumer>
        </Text>
        <Swiper
          spaceBetween={32}
          pagination={{ clickable: true }}
          autoHeight={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            896: {
              slidesPerView: 3,
            },
          }}
        >
          {articles.map(article => (
            <SwiperSlide key={article.id}>
              <ArticleThumb article={article} small />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  )
}

export default LatestArticles
