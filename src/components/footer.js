import { Box, Container, Flex, Grid, Text } from "@theme-ui/components"
import React from "react"
import { useCompany } from "../hooks/useCompany"
import { useFooter } from "../hooks/useFooter"
import linkSwitch from "../utils/linkSwitch"

const Footer = () => {
  const footer = useFooter()
  const company = useCompany()
  console.log(company)

  return (
    <Box as="footer" sx={{ backgroundColor: "dark", py: 5, color: "light" }}>
      <Container>
        <Grid columns={[2, footer.length + 1]} gap={[64]}>
          <Box
            sx={{ p: { fontSize: 1 }, "*:first-child": { mt: 0 } }}
            dangerouslySetInnerHTML={{ __html: company.body }}
          />
          {footer.map(column => (
            <List key={column.id}>
              {column.treeChildren.map(link => (
                <Item>
                  <Text sx={{ fontWeight: "bold", mb: 2, display: "block" }}>
                    {link.link ? linkSwitch(link.link) : link.anchor}
                  </Text>
                  <List key={link.id}>
                    {link.treeChildren.map(link => (
                      <Item>
                        {link.link ? linkSwitch(link.link) : link.anchor}
                      </Item>
                    ))}
                  </List>
                </Item>
              ))}
            </List>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

const List = props => {
  return (
    <Flex
      {...props}
      sx={{
        flexDirection: "column",
        margin: 0,
        padding: 0,
        mb: 4,
        listStyle: "none",
        a: {
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      }}
      as="ul"
    />
  )
}

const Item = props => {
  return <Box {...props} as="li" sx={{ mb: 2, "&:last-child": { mb: 0 } }} />
}

export default Footer
