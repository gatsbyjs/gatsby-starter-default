import React, { useState, useEffect, useRef, useContext } from "react"
import { Box, Flex, Container, Text, Heading } from "@theme-ui/components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { LanguageSwitcherContext } from "../../context/languageSwitcherContext"
import ArrowLeft from "../../images/arrow_right.svg"
import ArrowRight from "../../images/arrow_left.svg"
import { MagicLink } from "../../utils/magicLink"
import { motion } from "framer-motion"
import "swiper/css"
import "swiper/css/navigation"
import { GatsbyImage } from "gatsby-plugin-image"

const RelatedCollection = ({ block }) => {
  const locale = useContext(LanguageSwitcherContext).activeLocale
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  if (!block?.related) return null

  return (
    <Container sx={{ mb: "90px", mt: ["44px", "44px", "136px"] }}>
      <Box>
        <Text variant="kicker">{block.kicker}</Text>
        <Heading as="h3" variant="h2">
          {block.title}
        </Heading>
      </Box>

      <Box sx={{ mt: "60px" }}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          spaceBetween={28}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 28,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
        >
          {block.related.map((item, index) => (
            <SwiperSlide key={item.link.id}>
              <Box
                sx={{
                  height: "450px",
                  backgroundImage: item.link.heroImage?.url
                    ? `url(${item.link.heroImage.url})`
                    : "none",
                  backgroundColor: "primary",
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                  a: {
                    display: "flex",
                    flexDirection: "column",
                    padding: "40px",
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    color: "white",
                    textDecoration: "none",
                    "&:hover .overlay": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <MagicLink
                  item={{
                    link: item.link,
                    anchor: item.anchor,
                  }}
                  locale={locale}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Flex
          sx={{
            justifyContent: "center",
            mt: "40px",
            gap: "20px",
          }}
        >
          <Box
            className="swiper-button-prev"
            sx={{
              backgroundImage: `url(${ArrowLeft})`,
              width: "70px !important",
              height: "70px !important",
              cursor: "pointer",
            }}
          />
          <Box
            className="swiper-button-next"
            sx={{
              backgroundImage: `url(${ArrowRight})`,
              width: "70px !important",
              height: "70px !important",
              cursor: "pointer",
            }}
          />
        </Flex> */}
      </Box>
    </Container>
  )
}

export default RelatedCollection
