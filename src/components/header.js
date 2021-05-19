import { Box } from "@theme-ui/components"
import React from "react"
import Nav from "./nav"

const Header = () => {
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
      <Nav />
    </Box>
  )
}

export default Header
