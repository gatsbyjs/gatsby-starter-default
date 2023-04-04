import React from "react"
import { Box, Text, Grid, Heading, Container } from "@theme-ui/components"
import RichContentStructuredText from "../richContentStructuredText"

const OrderedList = ({ title, subtitle, body }) => {
  return (
    <Box sx={{ backgroundColor: "dark", py: 7 }}>
      <Container>
        <Box
          sx={{
            borderBottom: "1px solid",
            borderColor: "primary",
            pb: 6,
            mb: 6,
          }}
        >
          <Heading variant="h2">{title}</Heading>
        </Box>
        <Grid columns={[1, 1, "2fr 4fr"]} gap={[32, 64, 128]}>
          <Box>
            <Text sx={{ color: "light" }}>{subtitle}</Text>
          </Box>
          <Box>
            <RichContentStructuredText text={body} theme={"dark"} />
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default OrderedList
