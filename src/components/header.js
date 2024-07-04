import * as React from "react"
import { Box } from "@theme-ui/components"
import Nav from "./nav"
import MobileNav from "./mobileNav"

const Header = locale => {
  return (
    <Box
      as="header"
      sx={{
        backgroundColor: "light",
        borderBottom: "1px solid",
        borderColor: "lightGray",
        position: "fixed",
        width: "100%",
        zIndex: "9999",
      }}
    >
      <Box
        sx={{
          display: ["none", "none", "none", "block"],

          zIndex: 4,
        }}
      >
        <Nav locale={locale} />
      </Box>
      <Box sx={{ display: ["block", "block", "block", "none"], zIndex: 4 }}>
        <MobileNav locale={locale} />
      </Box>
    </Box>
  )
}

export default Header
