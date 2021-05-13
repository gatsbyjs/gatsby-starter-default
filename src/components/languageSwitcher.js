import React from "react"
import { Box } from "@theme-ui/components"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"
import { Link } from "./link"

const LanguageSwitcher = () => {
  return (
    <LanguageSwitcherContext.Consumer>
      {({ activeLocale, paths }) => {
        return (
          <Box>
            {paths
              .sort((a, b) => b.locale.localeCompare(a.locale))
              .map((link, index) => (
                <Link
                  to={link.value}
                  sx={{
                    marginLeft: 3,
                    color: activeLocale === link.locale ? "primary" : "dark",
                  }}
                  key={index}
                >
                  {link.locale}
                </Link>
              ))}
          </Box>
        )
      }}
    </LanguageSwitcherContext.Consumer>
  )
}

export default LanguageSwitcher
