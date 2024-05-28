import * as React from "react"
import { Box } from "@theme-ui/components"
import Nav from "./nav"

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
      <Nav locale={locale} />
    </Box>
  )
}

export default Header
