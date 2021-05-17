import React, { useEffect } from "react"
import { Box, Text } from "@theme-ui/components"
import { StructuredText } from "react-datocms"
import {
  isHeading,
  isParagraph,
  isList,
  renderRule,
} from "datocms-structured-text-utils"
import ImageGallery from "./blocks/imageGallery"
import linkSwitch from "../utils/linkSwitch"

const RichContentStructuredText = ({ text, theme }) => {
  const compoenentTheme = theme || "light"
  const light = compoenentTheme === "light" ? "light" : "dark"
  const dark = compoenentTheme === "light" ? "dark" : "light"
  return (
    <Box
      sx={{
        "*:first-child": {
          marginTop: 0,
        },
        "*:last-child": {
          marginBottom: 0,
        },
      }}
    >
      <StructuredText
        data={text}
        renderLinkToRecord={({ record }) => {
          // console.log(record)
          switch (record.__typename) {
            case "DatoCmsInternalLink":
              return linkSwitch(record, record.locale)
            default:
              return null
          }
        }}
        renderInlineRecord={({ record }) => {
          // console.log(record)
          switch (record.__typename) {
            case "DatoCmsInternalLink":
              return <Box>{linkSwitch(record, record.locale)}</Box>
            default:
              return null
          }
        }}
        renderBlock={({ record }) => {
          // console.log(record)
          switch (record.__typename) {
            case "DatoCmsImageGallery":
              return (
                <Box mt={5} mb={5}>
                  <ImageGallery images={record.images} key={record.id} />
                </Box>
              )
            default:
              return null
          }
        }}
        customRules={[
          renderRule(
            isHeading,
            ({ adapter: { renderNode }, node, children, key }) => {
              return renderNode(
                () => {
                  return (
                    <Text
                      as={`h${node.level}`}
                      variant={`h${node.level}`}
                      color={"primary"}
                    >
                      {children}
                    </Text>
                  )
                },
                { key },
                children
              )
            }
          ),
          renderRule(
            isParagraph,
            ({ adapter: { renderNode }, node, children, key }) => {
              return renderNode(
                () => {
                  return (
                    <Text as="p" mb={3} color={dark}>
                      {children}
                    </Text>
                  )
                },
                { key },
                children
              )
            }
          ),
          renderRule(
            isList,
            ({ adapter: { renderNode }, node, children, key }) => {
              return renderNode(
                () => {
                  return (
                    <Box mt={4}>
                      <Box
                        as={node.style === "numbered" ? "ol" : "ul"}
                        mb={3}
                        sx={{
                          color: dark,
                          listStyle: "none",
                          columns: [1, 1, 1, 2],
                          margin: 0,
                          padding: 0,
                          li: {
                            display: "flex",
                            counterIncrement: "inst",
                            mb: 3,
                            alignItems: "center",
                            "&::before": {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              content: "counter(inst)",
                              marginRight: 4,
                              width: "2rem",
                              height: "2rem",
                              position: "relative",
                              lineHeight: "body",
                              backgroundColor: dark,
                              color: light,
                              borderRadius: "full",
                            },
                            p: {
                              mb: 0,
                            },
                          },
                        }}
                      >
                        {children}
                      </Box>
                    </Box>
                  )
                },
                { key },
                children
              )
            }
          ),
        ]}
      />
    </Box>
  )
}

export default RichContentStructuredText
