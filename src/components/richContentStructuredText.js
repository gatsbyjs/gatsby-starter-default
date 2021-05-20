import React from "react"
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
import NumbersGroup from "./blocks/numbersGroup"
import Embed from "./blocks/embed"

const RichContentStructuredText = ({ text, theme }) => {
  console.log(text)
  const componentTheme = theme || "light"
  const light = componentTheme === "light" ? "light" : "dark"
  const dark = componentTheme === "light" ? "dark" : "light"
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
      {text.value && (
        <StructuredText
          data={text}
          renderLinkToRecord={({ record }) => {
            console.log(record)
            switch (record.__typename) {
              case "DatoCmsInternalLink":
                return linkSwitch(record, record.locale)
              default:
                return null
            }
          }}
          renderInlineRecord={({ record }) => {
            console.log(record)
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
              case "DatoCmsNumbersGroup":
                return (
                  <Box mt={5} mb={5}>
                    <NumbersGroup numbers={record.numbers} key={record.id} />
                  </Box>
                )
              case "DatoCmsEmbed":
                return <Embed code={record.code} fullWidth={record.fullWidth} />
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
      )}
    </Box>
  )
}

export default RichContentStructuredText
