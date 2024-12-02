import React from "react"
import {
  Box,
  Grid,
  Heading,
  Text,
  Container,
  Image,
  Flex,
} from "@theme-ui/components"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { StructuredText } from "react-datocms"
import { LanguageSwitcherContext } from "../../context/languageSwitcherContext"
import ImageBlockGallery from "./imageBlockGallery"
import Accordion from "./accordion"
import BackgroundVideo from "./backgroundVideo"
import { MagicLink } from "../../utils/magicLink"
import { useThemeUI } from "theme-ui"

const TitleAndBody = ({ block }) => {
  const activeLocale = React.useContext(LanguageSwitcherContext).activeLocale
  const { theme } = useThemeUI()

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const titleVariants = {
    hidden: { opacity: 0, x: [0, -50, -50], y: [50, 0, 0] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  const bodyVariants = {
    hidden: { opacity: 0, x: [0, 50, 50], y: [50, 0, 0] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  return (
    <Container>
      <Box
        sx={{
          zIndex: 999,
          position: "relative",
        }}
      >
        <Box sx={{ zIndex: 0 }}>
          {block.background && block.background.mimeType === "video/mp4" && (
            <BackgroundVideo media={block.background} />
          )}
        </Box>
        <Container sx={{ position: "relative " }} id={block.id}>
          <Box sx={{}}>
            {block.kicker && (
              <Box>
                <Text variant="kicker" as="p">
                  {block.kicker}
                </Text>
              </Box>
            )}

            <Grid
              ref={ref}
              columns={[1, 1, "1fr 1fr"]}
              sx={{
                zIndex: 99999,
              }}
            >
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={titleVariants}
              >
                <Box>
                  <Heading
                    as="h2"
                    sx={{
                      lineHeight: [1.3],
                      width: block.image ? ["100%", "100%", "70%"] : "100%",
                    }}
                  >
                    {block.title}
                  </Heading>
                  {block.image && (
                    <Flex
                      sx={{
                        justifyContent: "flex-end",

                        overflow: "hidden",
                      }}
                    >
                      <Image
                        sx={{ borderRadius: "32px" }}
                        src={block.image.url}
                      />
                    </Flex>
                  )}
                </Box>
              </motion.div>
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={bodyVariants}
              >
                <Flex
                  sx={{
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    color: block.background ? "light" : "dark",
                  }}
                >
                  {block.originalbody && (
                    <Box
                      dangerouslySetInnerHTML={{ __html: block.originalbody }}
                    />
                  )}
                  <Box
                    sx={{
                      color:
                        block.backgroundColor === "#1B1B1B"
                          ? "light"
                          : block.backgroundColor === "#F93822"
                          ? "light"
                          : "dark",

                      h4: {
                        fontSize: [2, 2, "24px"],
                        fontWeight: 400,
                      },
                      p: {
                        lineHeight: "1.4",
                        fontSize: block.image ? [2, 2, 2] : [3, 2, 2],
                        fontWeight: 300,
                        a: {
                          zIndex: 9999,
                          display: "inline-block",
                          color: "primary",
                          fontWeight: 400,
                          fontSize: [2, 2, 2],
                          textDecoration: "none",
                        },
                      },
                    }}
                  >
                    {block.content && (
                      <StructuredText
                        data={block.content}
                        renderBlock={({ record }) => {
                          switch (record.__typename) {
                            case "DatoCmsImageGallery":
                              return (
                                <Flex sx={{ mb: ["48px", "48px", 5] }}>
                                  <ImageBlockGallery
                                    images={record.images}
                                    key={record.id}
                                  />
                                </Flex>
                              )
                            case "DatoCmsAccordion":
                              return (
                                <Box mt={5} mb={5}>
                                  <Accordion
                                    title={record.title}
                                    body={record.body}
                                  />
                                </Box>
                              )
                            case "DatoCmsCard":
                              return (
                                <Flex
                                  sx={{
                                    backgroundColor: record.background.hex,
                                    borderRadius: "40px",
                                    flexDirection: "column",
                                    border:
                                      record.background.hex === "#ffffff"
                                        ? "1px solid #1B1B1B"
                                        : "none",
                                    color:
                                      record.background.hex === "#ffffff"
                                        ? "dark!important"
                                        : "light",
                                    p: 5,
                                    mb: 5,
                                    height: "350px",
                                  }}
                                >
                                  <Flex
                                    sx={{
                                      flexDirection: "column",
                                      flexGrow: 1,
                                    }}
                                  >
                                    <Heading
                                      sx={{
                                        color:
                                          record.background.hex === "#ffffff"
                                            ? "dark"
                                            : "light",
                                        fontSize: "36px",
                                        fontFamily: "Poppins",
                                        fontWeight: 400,
                                        flexGrow: 0,
                                      }}
                                    >
                                      {record.title}
                                    </Heading>
                                    <Box
                                      dangerouslySetInnerHTML={{
                                        __html: record.body,
                                      }}
                                      sx={{
                                        p: {
                                          fontSize: "16px",
                                          fontWeight: 300,
                                          color:
                                            record.background.hex === "#ffffff"
                                              ? "dark"
                                              : "light",
                                          fontFamily: "Inter",
                                        },
                                        span: {
                                          color:
                                            record.background.hex === "#ffffff"
                                              ? "dark"
                                              : "light",
                                          fontSize: "16px",
                                          fontWeight: 300,

                                          fontFamily: "Inter",
                                        },
                                        flexGrow: 1,
                                      }}
                                      as="p"
                                    />
                                  </Flex>
                                </Flex>
                              )

                            default:
                              return null
                          }
                        }}
                        renderInlineRecord={({ record }) => {
                          switch (record.__typename) {
                            case "DatoCmsInternalLink":
                              return (
                                <Box
                                  sx={{
                                    a: {
                                      color: "primary",
                                      ":hover": {
                                        color: "secondary",
                                        textDecoration: "underline",
                                      },
                                    },
                                  }}
                                >
                                  <MagicLink
                                    item={record}
                                    locale={record.locales.find(
                                      locale => locale === activeLocale
                                    )}
                                  />
                                </Box>
                              )
                            default:
                              return null
                          }
                        }}
                      />
                    )}
                  </Box>
                </Flex>
              </motion.div>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Container>
  )
}

export default TitleAndBody
