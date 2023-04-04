import React from "react"
import { Box, Container, Grid, Heading, Text } from "@theme-ui/components"
import RichContentStructuredText from "../richContentStructuredText"
import {
  Accordion as AccordionWrapper,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const Accordion = ({ title, items }) => {
  return (
    <Box mb={[3, 5]}>
      <Container>
        <Grid columns={[1, 1, "2fr 3fr"]} gap={32}>
          <Box></Box>
          <Heading variant="h2">{title}</Heading>
        </Grid>
      </Container>
      <AccordionWrapper allowMultipleExpanded={true} allowZeroExpanded={true}>
        {items.map((item, index) => (
          <Box
            sx={{
              borderTop: "1px solid",
              borderColor: "lightGrey",
            }}
          >
            <AccordionItem key={item.id}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Box
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "lightBackground",
                      },
                    }}
                  >
                    <Container>
                      <Grid
                        columns={["1fr 5fr", "1fr 5fr", "2fr 3fr"]}
                        gap={32}
                      >
                        <Box>
                          <Text sx={{ fontSize: 7, color: "primary", mt: 0 }}>
                            {index + 1}
                          </Text>
                        </Box>
                        <Box>
                          <Text variant="h5">{item.title}</Text>
                        </Box>
                      </Grid>
                    </Container>
                  </Box>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Container sx={{ paddingTop: [0, 0, 0] }}>
                  <Grid
                    columns={[1, 1, "2fr 3fr"]}
                    gap={32}
                    sx={{
                      borderTop: "1px solid",
                      borderColor: "lightGrey",
                      paddingTop: [2, 5],
                    }}
                  >
                    <Text variant="h4" sx={{ mt: 0 }}>
                      {item.subtitle}
                    </Text>
                    <RichContentStructuredText text={item.body} />
                  </Grid>
                </Container>
              </AccordionItemPanel>
            </AccordionItem>
          </Box>
        ))}
      </AccordionWrapper>
    </Box>
  )
}

export default Accordion
