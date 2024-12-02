import React, { useContext } from "react"
import { Box, Flex, Grid, Heading, Text, Container } from "@theme-ui/components"
import { GatsbyImage } from "gatsby-plugin-image"
import { StructuredText } from "react-datocms"
import { MagicLink } from "../../utils/magicLink"
import ImageBlockGallery from "./imageBlockGallery"
import Accordion from "./accordion"
import { LanguageSwitcherContext } from "../../context/languageSwitcherContext"

const ImageAndText = ({
  title,
  body,
  image,
  label,
  subtitle,
  rightAligned,
}) => {
  const { activeLocale } = useContext(LanguageSwitcherContext)

  return (
    <Container variant="fw">
      <Grid columns={[1, 1, "1fr 1fr"]} gap={[32]}>
        {rightAligned ? (
          <>
            <Box
              sx={{
                h2: {
                  color: "dark",
                  fontSize: "48px",
                },
                h3: { color: "dark", fontSize: "32px" },
              }}
            >
              {body && (
                <StructuredText
                  data={body}
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
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  height: "100%",
                  top: 0,
                  left: rightAligned ? null : 0,
                  right: rightAligned ? 0 : null,
                  ".gatsby-image-wrapper": {
                    height: "100%",
                  },
                }}
              >
                <GatsbyImage image={image.gatsbyImageData} alt="" />
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  height: "100%",
                  top: 0,
                  left: rightAligned ? null : 0,
                  right: rightAligned ? 0 : null,
                  ".gatsby-image-wrapper": {
                    height: "100%",
                  },
                }}
              >
                <GatsbyImage image={image.gatsbyImageData} alt="" />
              </Box>
            </Box>
            <Box
              sx={{
                h2: {
                  color: "dark",
                  fontSize: "48px",
                },
                h3: { color: "dark", fontSize: "32px" },
              }}
            >
              {body && (
                <StructuredText
                  data={body}
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
          </>
        )}
      </Grid>
    </Container>
  )
}

export default ImageAndText
