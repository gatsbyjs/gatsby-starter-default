import React from "react"
import { Box, Grid, Heading, Text, Container } from "@theme-ui/components"

const TitleAndBody = ({ block }) => {
  return (
    <Container>
      {block.kicker && (
        <Box sx={{ borderBottom: "1px solid black", py: 2 }}>
          <Text variant="kicker" as="p">
            {block.kicker}
          </Text>
        </Box>
      )}

      <Grid columns={[1, 1, "1fr 1fr"]} gap={5} sx={{ mt: 4 }}>
        <Box>
          <Heading>{block.title}</Heading>
        </Box>
        <Box dangerouslySetInnerHTML={{ __html: block.originalbody }} />
        <Box></Box>
      </Grid>
    </Container>
  )
}

export default TitleAndBody
