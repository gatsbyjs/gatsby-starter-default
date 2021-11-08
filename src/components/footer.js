import { Box, Container, Flex, Grid, Text } from "@theme-ui/components"
import React from "react"
import { useCompany } from "../hooks/useCompany"
import { useFooter } from "../hooks/useFooter"
import { MagicLink } from "../utils/magicLink"
import { useSocial } from "../hooks/useSocial"
import { i18nContext } from "../context/i18nContext"
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "react-feather"

const Footer = () => {
  const footer = useFooter()
  const company = useCompany()
  const social = useSocial()

  footer.map(footerItem => {
    footerItem.treeChildren.sort((a, b) => a.position - b.position)
    footerItem.treeChildren.map(footerItem => {
      if (footerItem.treeChildren.length > 0) {
        footerItem.treeChildren.sort((a, b) => a.position - b.position)
      }
    })
  })

  return (
    <Box as="footer" sx={{ backgroundColor: "dark", py: 5, color: "light" }}>
      <i18nContext.Consumer>
        {t => (
          <>
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
                        <Text
                          sx={{ fontWeight: "bold", mb: 2, display: "block" }}
                        >
                          {link.link ? (
                            <MagicLink item={link.link} />
                          ) : (
                            link.anchor
                          )}
                        </Text>
                        <List key={link.id}>
                          {link.treeChildren.map(link => (
                            <Item>
                              {link.link ? (
                                <MagicLink item={link.link} />
                              ) : (
                                link.anchor
                              )}
                            </Item>
                          ))}
                        </List>
                      </Item>
                    ))}
                  </List>
                ))}
              </Grid>
            </Container>
            <Container sx={{ py: 0 }}>
              <Flex
                sx={{
                  display: "flex",
                  py: 1,
                  justifyContent: "space-between",
                  alignContent: "center",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Grid columns={[4]} gap={[4]} sx={{ mt: [2, 0] }}>
                    {social.facebook && (
                      <Box>
                        <MagicLink target="_blank" href={social.facebook}>
                          <Facebook color="#FFF" />
                        </MagicLink>
                      </Box>
                    )}
                    {social.instagram && (
                      <Box>
                        <MagicLink target="_blank" href={social.instagram}>
                          <Instagram color="#FFF" />
                        </MagicLink>
                      </Box>
                    )}
                    {social.linkedin && (
                      <Box>
                        <MagicLink target="_blank" href={social.linkedin}>
                          <Linkedin color="#FFF" />
                        </MagicLink>
                      </Box>
                    )}
                    {social.youtube && (
                      <Box>
                        <MagicLink target="_blank" href={social.youtube}>
                          <Youtube color="#FFF" />
                        </MagicLink>
                      </Box>
                    )}
                  </Grid>
                </Box>
                <Box
                  sx={{
                    span: { color: "primary" },
                    fontWeight: "400",
                    fontSize: [1],
                    pt: [3, 0],
                    fontFamily: "Teko",
                  }}
                  dangerouslySetInnerHTML={{ __html: t.copyright }}
                ></Box>
              </Flex>
            </Container>
          </>
        )}
      </i18nContext.Consumer>
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
