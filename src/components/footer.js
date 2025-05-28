import {
  Box,
  Container,
  Flex,
  Grid,
  Text,
  Image,
  Link,
} from "@theme-ui/components"
import React, { useContext, useEffect } from "react"
import { useCompany } from "../hooks/useCompany"
import { MagicLink } from "../utils/magicLink"
import { useSocial } from "../hooks/useSocial"
import { useLocation } from "../hooks/useLocation"
import { i18nContext } from "../context/i18nContext"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"
import { FooterContext } from "../context/footerContext"

const Footer = () => {
  const footer = useContext(FooterContext)
  const company = useCompany()
  const locale = useContext(LanguageSwitcherContext).activeLocale

  footer.map(footerItem => {
    footerItem.treeChildren.sort((a, b) => a.position - b.position)
    footerItem.treeChildren.map(footerItem => {
      if (footerItem.treeChildren.length > 0) {
        footerItem.treeChildren.sort((a, b) => a.position - b.position)
      }
    })
  })

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.iubenda.com/iubenda.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Box as="footer" sx={{ backgroundColor: "dark", py: 5, color: "light" }}>
      <i18nContext.Consumer>
        {t => (
          <Container>
            <Grid
              columns={[1, 1, footer.length + 1, footer.length + 1]}
              gap={[4]}
            >
              {footer.map((column, index) => (
                <Flex
                  key={column.id}
                  sx={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Text
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: 500,
                      mb: 3,
                    }}
                  >
                    {column.anchor}
                  </Text>

                  {column.anchor === "POLICY" ? (
                    <>
                      <Box
                        sx={{
                          color: "light",
                          lineHeight: "normal",
                          fontSize: ["14px", "14px", "16px", "21px"],
                          a: {
                            width: "100%",
                            color: "light",
                            textDecoration: "underline",
                            ":hover": {
                              color: "secondary",
                            },
                          },
                        }}
                      >
                        <Link
                          href={t.policies.privacy.url}
                          className="iubenda-nostyle no-brand iubenda-embed"
                        >
                          {t.policies.privacy.anchor}
                        </Link>
                      </Box>
                      <Box
                        sx={{
                          color: "light",
                          lineHeight: "normal",
                          fontSize: ["14px", "14px", "16px", "21px"],
                          a: {
                            width: "100%",
                            color: "light",
                            textDecoration: "underline",
                            ":hover": {
                              color: "secondary",
                            },
                          },
                        }}
                      >
                        <Link
                          href={t.policies.cookie.url}
                          className="iubenda-nostyle no-brand iubenda-embed"
                        >
                          {t.policies.cookie.anchor}
                        </Link>
                      </Box>
                    </>
                  ) : (
                    column.treeChildren.map(link => (
                      <Box
                        key={link.id}
                        sx={{
                          color: "light",
                          lineHeight: "normal",
                          fontSize: ["14px", "14px", "16px", "21px"],
                          fontWeight: "normal",
                          textTransform: "normal",
                          a: {
                            width: "100%",
                            color: "light",
                            textDecoration: "underline",
                            ":hover": {
                              color: "secondary",
                            },
                          },
                        }}
                      >
                        {link.link ? (
                          <MagicLink item={link.link} locale={locale} />
                        ) : (
                          link.anchor
                        )}
                      </Box>
                    ))
                  )}
                </Flex>
              ))}
            </Grid>
            {company && (
              <Box sx={{ mt: 4 }}>
                <Text as="p">
                  {company.legalName} — {t.vatId} {company.vatId}
                </Text>
              </Box>
            )}
          </Container>
        )}
      </i18nContext.Consumer>
    </Box>
  )
}

export default Footer
