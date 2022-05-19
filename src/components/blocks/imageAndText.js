import React from "react"
import { Box, Flex, Grid, Heading, Text } from "@theme-ui/components"
import RichContentStructuredText from "../richContentStructuredText"
import { GatsbyImage } from "gatsby-plugin-image"

const ImageAndText = ({
  title,
  body,
  image,
  label,
  subtitle,
  rightAligned,
}) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: ["relative", "relative", "absolute"],
          width: ["100%", "100%", "80%"],
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
      <Grid
        columns={[
          1,
          1,
          rightAligned ? "3fr 1fr" : "1fr 3fr",
          rightAligned ? "3fr 2fr" : "2fr 3fr",
        ]}
        gap={[0, 0, 32]}
        sx={{ py: [0, 0, 7], position: "relative" }}
      >
        {!rightAligned && <Box></Box>}
        <Flex
          sx={{
            flexDirection: "column",
            backgroundColor: "dark",
            px: [6, 6, 6, 8],
            py: [7],
          }}
        >
          <Box>
            <Text color="light">{label}</Text>
            <Heading color="primary">{title}</Heading>
            <Text color="light">{subtitle}</Text>
          </Box>
          <Box>
            <RichContentStructuredText text={body} theme="dark" />
          </Box>
        </Flex>
        {rightAligned && <Box></Box>}
      </Grid>
    </Box>
  )
}

export default ImageAndText
