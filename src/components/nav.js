import { Box, Container, Flex } from "@theme-ui/components"
import React, { useState } from "react"
import { i18nContext } from "../context/i18nContext"
import { useMenu } from "../hooks/useMenu"
import { getHomePath } from "../utils/path"
import { Link } from "./link"
import linkSwitch from "../utils/linkSwitch"
import LanguageSwitcher from "./languageSwitcher"

const Nav = () => {
  const locale = React.useContext(i18nContext).locale
  const menu = useMenu(locale)
  //   console.log(menu)

  return (
    <Box as="nav">
      <Container variant="fw" sx={{ paddingX: [3, 4] }}>
        <Flex sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Box sx={{ paddingX: 2, paddingY: 3 }}>
            <Link to={getHomePath(locale)}>Home</Link>
          </Box>
          <Flex
            sx={{
              flexDirection: "row",
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
            as="ul"
          >
            {menu.map(item => (
              <TextComponent item={item} locale={locale} key={item.id} />
            ))}
          </Flex>
          <Box sx={{ paddingX: 2, paddingY: 3 }}>
            <LanguageSwitcher />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

const TextComponent = ({ item, locale }) => {
  const [show, setShow] = useState(false)
  return (
    <Box
      as="li"
      key={item.id}
      sx={{ position: "relative", marginX: 1, paddingX: 2, paddingY: 3 }}
      onMouseEnter={() => setShow(!show)}
      onMouseLeave={() => setShow(!show)}
    >
      {linkSwitch(item, locale)}
      {item.treeChildren.length > 0 && show && (
        <Box
          as="ul"
          sx={{
            listStyle: "none",
            padding: 3,
            margin: 0,
            backgroundColor: "lightBackground",
            position: "absolute",
            top: 40,
            width: "max-content",
            boxShadow:
              "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)",
            borderRadius: "sm",
          }}
        >
          {item.treeChildren.map(item =>
            item.anchor ? (
              <Box as="li" key={item.id}>
                {linkSwitch(item, locale)}
              </Box>
            ) : null
          )}
        </Box>
      )}
    </Box>
  )
}

export default Nav
