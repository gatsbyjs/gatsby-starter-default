import React from "react"
import { Container, Heading, Box } from "theme-ui"
import { StructuredText } from "react-datocms"
const HomeIntro = ({ page }) => {
  return (
    <Container>
      <Box>
        <Heading variant="kicker" as="h2">
          {page.kicker} [kicker]
        </Heading>
      </Box>
      <Heading variant="h1" as="h1">
        {page.title} [h1]
      </Heading>
      <Box
        sx={{
          h2: {
            fontSize: [6, 6, 7],
          },
          p: {
            fontSize: [2, 2, 4, 5],
          },
        }}
      >
        <StructuredText data={page.body} />
      </Box>
    </Container>
  )
}

export default HomeIntro
