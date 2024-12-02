import React from "react"
import { Box, Container, Grid, Heading, Text, Flex } from "@theme-ui/components"
import { StructuredText } from "react-datocms"
import {
  Accordion as AccordionWrapper,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const Accordion = ({ title, subtitle, body }) => {
  const Plus = ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
    </svg>
  )

  return (
    <Container>
      <Box mb={[3, 5]}>
        <AccordionWrapper allowMultipleExpanded={true} allowZeroExpanded={true}>
          <Box
            sx={{
              borderTop: "1px solid",
              borderColor: "lightGrey",
            }}
          >
            <AccordionItem>
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
                      <Flex
                        sx={{
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Heading variant="h5" sx={{ my: [0, 0, 0] }}>
                          {title}
                        </Heading>
                        <Plus
                          sx={{
                            fill: "primary",

                            transition: "transform 0.2s ease",
                            "&[data-expanded='true']": {
                              transform: "rotate(45deg)",
                            },
                          }}
                        />
                      </Flex>
                    </Container>
                  </Box>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Box dangerouslySetInnerHTML={{ __html: body }} />
              </AccordionItemPanel>
            </AccordionItem>
          </Box>
        </AccordionWrapper>
      </Box>
    </Container>
  )
}

export default Accordion
