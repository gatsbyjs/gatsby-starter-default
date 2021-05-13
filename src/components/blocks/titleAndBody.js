import React from "react"
import { Box, Text, Grid, Heading } from "@theme-ui/components"
import { StructuredText } from "react-datocms"
import {
  isHeading,
  isParagraph,
  renderRule,
} from "datocms-structured-text-utils"
import StyledStructuredText from "../styledStructuredText"

const TitleAndBody = ({ title, body }) => {
  return (
    <Box>
      <Grid columns={[1, 1, "2fr 3fr"]} gap={32}>
        <Box>
          <Heading>{title}</Heading>
        </Box>
        <Box>
          <StyledStructuredText text={body} />
        </Box>
      </Grid>
    </Box>
  )
}

export default TitleAndBody
