import React from "react"
import { Container, Heading, Box, Flex } from "theme-ui"
import { StructuredText, renderNodeRule } from "react-datocms"
import { isHeading } from "datocms-structured-text-utils"
import Breadcrumbs from "../breadcrumbs"

const PageIntro = ({ block, page }) => {
  return (
    <Box
      sx={{
        width: "100%",
        zIndex: 999,
        position: "relative",
        height: "100%",
      }}
    >
      <Flex
        sx={{
          pl: ["24px", "24px", "28px", "28px"],
          pr: ["24px", "0", "0", "0"],
          height: "100%",
          flexDirection: "column",
          justifyContent: ["space-between", "flex-end", "flex-end", "flex-end"],
          pt: ["120px", "0", "0", "0"],
          pb: ["60px", "0", "0", "0"],
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Breadcrumbs page={page} />
        </Box>

        <Box
          sx={{
            mb: ["0", "30px", "30px", "30px"],
            width: ["100%", "50%", "50%", "50%"],
            p: {
              width: ["100%", "100%", "100%", "100%"],
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
              color: "light",
              fontSize: ["20px", "20px", "16px", "20px"],
              fontWeight: "600",
              fontFamily: "montserrat",
              my: [0],
            },
          }}
        >
          <StructuredText
            data={block.body.value}
            customNodeRules={[
              renderNodeRule(isHeading, ({ node, children, key }) => {
                return (
                  <Box sx={{ width: ["100%", "100%", "100%", "100%"] }}>
                    <Heading
                      sx={{
                        mt: ["0", "30px", "30px", "30px"],
                        fontSize: ["40px", "48px", "80px", "120px"],
                        lineHeight: 1.2,
                        em: {
                          fontFamily: "Signifier",
                          fontStyle: "italic",
                          fontWeight: 300,
                        },
                      }}
                      key={key}
                      as={`h${node.level}`}
                      variant="h1"
                    >
                      {children}
                    </Heading>
                  </Box>
                )
              }),
            ]}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default PageIntro
