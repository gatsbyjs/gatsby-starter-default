import {
  Box,
  Container,
  Flex,
  Grid,
  Text,
  Image,
  Heading,
} from "@theme-ui/components"
import React from "react"
import { useCompany } from "../hooks/useCompany"
import { useFooter } from "../hooks/useFooter"
import { MagicLink } from "../utils/magicLink"
import { useSocial } from "../hooks/useSocial"
import { useLocation } from "../hooks/useLocation"
import { i18nContext } from "../context/i18nContext"
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "react-feather"
import Logo from "../images/logo.svg"
import { MapPin, Phone, Mail } from "react-feather"

const Footer = () => {
  const footer = useFooter()
  const company = useCompany()
  const social = useSocial()
  const locations = useLocation()

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
              <Grid
                columns={[1, `.8fr repeat(${footer.length + (company.addresses.length + 1)},1fr)`]}
                gap={[4]}
              >
                <Flex
                  sx={{
                    flexDirection: "column",
                    p: { fontSize: 1 },
                    "*:first-child": { mt: 0 },
                  }}
                >
                  <Image src={Logo} sx={{ maxWidth: "150px" }} />
                  {company.description && (
                    <Text
                      dangerouslySetInnerHTML={{ __html: company.description }}
                    />
                  )}
                </Flex>

                {locations.map((location) => (
                  <Flex
                    sx={{
                      flexDirection: "column",
                      p: { fontSize: 1 },
                      "*:first-child": { mt: 0 },
                    }}
                  >
                    {
                      location.name &&
                      <Box sx={{ "*": { fontSize: [2], fontWeight: "500" } }} dangerouslySetInnerHTML={{ __html: location.name }} />
                    }

                    {
                      location.streetAddress &&
                      <Grid columns={["40px 1fr"]} sx={{ pb: [2], justifyContent: "center", alignItems: "center" }} gap={[0]}>
                        <Box>
                          <MapPin size={24} />
                        </Box>
                        <Box>
                          <Box>
                            {location.streetAddress}
                          </Box>
                          <Box>
                            {location.postalCode} {location.addressLocality} {location.addressRegion}
                          </Box>
                        </Box>
                      </Grid>
                    }

                    {
                      location.email &&
                      <Grid columns={["40px 1fr"]} sx={{ pb: [2], justifyContent: "center", alignItems: "center" }} gap={[0]}>
                        <Box>
                          <Mail size={24} />
                        </Box>
                        <Box as="div" sx={{ p: { m: [0, 0, 0] } }} dangerouslySetInnerHTML={{ __html: location.email }} />
                      </Grid>
                    }
                    {
                      location.telephone &&
                      <Grid columns={["40px 1fr"]} sx={{ pb: [2], justifyContent: "center", alignItems: "center" }} gap={[0]}>
                        <Box>
                          <MapPin size={24} />
                        </Box>
                        <Box as="div" sx={{ p: { m: [0, 0, 0] } }} dangerouslySetInnerHTML={{ __html: location.telephone }} />
                      </Grid>
                    }
                    {
                      location.faxNumber &&
                      <Grid columns={["40px 1fr"]} sx={{ pb: [2], justifyContent: "center", alignItems: "center" }} gap={[0]}>
                        <Box>
                          <MapPin size={24} />
                        </Box>
                        <Box as="div" sx={{ p: { m: [0, 0, 0] } }} dangerouslySetInnerHTML={{ __html: location.faxNumber }} />
                      </Grid>
                    }
                  </Flex>
                ))}

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
              <Box>
                <Text sx={{ fontSize: [0] }}>
                  {console.log(company)}
                  © 2022 {company.legalName} |
                  {company.vatId && " P.IVA " + company.vatId}{" "}
                  {company.vatId && " C.S. " + company.shareCapital + "€"}{" "}
                  {company.registrationNumber &&
                    "- REA " + company.registrationNumber}{" "}
                  {company.addresses[0] && company.addresses[0].streetAddress &&
                    "- Sede legale: " + company.addresses[0].streetAddress}
                  {company.addresses[0] && company.addresses[0].postalCode &&
                    ", " + company.addresses[0].postalCode}{" "}
                  {company.addresses[0] && company.addresses[0].addressLocality &&
                    ", " + company.addresses[0].addressLocality}{" "}
                  {company.addresses[0] && company.addresses[0].addressRegion &&
                    ", " + company.addresses[0].addressRegion}{" "}
                  {company.addresses[0] && company.addresses[0].addressCountry &&
                    "- " + company.addresses[0].addressCountry}{" "}
                  - Tutti i Diritti Riservati / All rights reserved
                </Text>
              </Box>
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
