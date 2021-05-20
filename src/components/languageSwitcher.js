import React, { useState } from "react"
import { Box, Flex } from "@theme-ui/components"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"
import { Link } from "./link"

const LanguageSwitcher = () => {
  const [show, setShow] = useState(false)
  const languagesCountry = {
    it: "Italiano",
    en: "English",
    "en-US": "English (United States)",
    "en-CA": "English (Canada)",
    fr: "Français",
    de: "Deutsch",
    es: "Español",
    pt: "Português",
    pl: "Polski",
    ru: "Русский",
  }
  return (
    <LanguageSwitcherContext.Consumer>
      {({ activeLocale, paths }) => {
        const activeLink = paths.find(x => x.locale === activeLocale)
        return (
          <Box
            sx={{ position: "relative" }}
            onMouseEnter={() => setShow(!show)}
            onMouseLeave={() => setShow(!show)}
          >
            <Box>
              <Link
                to={activeLink.value}
                sx={{
                  marginLeft: 3,
                  color: "primary",
                }}
              >
                {activeLink.locale}
              </Link>
            </Box>
            {show && (
              <Flex
                as={"ul"}
                sx={{
                  flexDirection: "column",
                  // alignItems: "flex-start",
                  position: "absolute",
                  right: 0,
                  margin: 0,
                  padding: 3,
                  backgroundColor: "light",
                  listStyle: "none",
                  boxShadow: "default",
                  borderRadius: "sm",
                }}
              >
                {paths
                  .sort((a, b) => b.locale.localeCompare(a.locale))
                  .map((link, index) => (
                    <Box as="li" key={index}>
                      <Link
                        to={link.value}
                        sx={{
                          whiteSpace: "nowrap",
                          padding: 2,
                          display: "block",
                          borderRadius: "xs",
                          color:
                            activeLocale === link.locale ? "primary" : "dark",
                          backgroundColor:
                            activeLocale === link.locale
                              ? "lightBackground"
                              : "light",
                        }}
                      >
                        {languagesCountry[link.locale] || link.locale}
                      </Link>
                    </Box>
                  ))}
              </Flex>
            )}
          </Box>
        )
      }}
    </LanguageSwitcherContext.Consumer>
  )
}

export default LanguageSwitcher
