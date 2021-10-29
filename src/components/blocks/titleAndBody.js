import React from "react"
import { Box, Grid, Heading } from "@theme-ui/components"
import RichContentStructuredText from "../richContentStructuredText"

const TitleAndBody = ({ title, body }) => {
  return (
    <Box>
      <Grid columns={[1, 1, "1fr"]} gap={32}>
        <Box>
          <Heading>{title}</Heading>
        </Box>
        <Box>
          <RichContentStructuredText text={body} />
        </Box>
      </Grid>
    </Box>
  )
}

export default TitleAndBody
