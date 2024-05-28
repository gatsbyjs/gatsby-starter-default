import { Box, Container, Flex } from "@theme-ui/components"
import React, { useState, useContext } from "react"

import { getHomePath, getSearchPath } from "../utils/path"
import { InboundLink } from "./link"
import { MagicLink } from "../utils/magicLink"
import LanguageSwitcher from "./languageSwitcher"
import { debounce } from "lodash"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"
import { MenuContext } from "../context/menuContext"
const Nav = ({}) => {
  const menu = useContext(MenuContext)
  console.log(menu)
  const locale = React.useContext(LanguageSwitcherContext).activeLocale
  menu.map(menuItem => {
    menuItem.treeChildren.sort((a, b) => a.position - b.position)
    menuItem.treeChildren.map(menuItem => {
      if (menuItem.treeChildren.length > 0) {
        menuItem.treeChildren.sort((a, b) => a.position - b.position)
      }
    })
  })

  return (
    <Box as="nav">
      <Container variant="header" sx={{ paddingX: [3, 4] }}>
        <Flex sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Box sx={{ paddingX: 2, paddingY: 3 }}>
            <InboundLink to={getHomePath(locale)}>Home</InboundLink>
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
          <Flex
            sx={{
              flexDirection: "row",
              padding: 3,
              margin: 0,
              listStyle: "none",
            }}
          >
            <InboundLink to={getSearchPath(locale)}>Search</InboundLink>
            <LanguageSwitcher />
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

const TextComponent = ({ item, locale, index }) => {
  const [show, setShow] = useState(false)

  const debouncedHandleMouseEnterMenu = debounce(() => {
    setShow(true)
  }, 200)

  const handlOnMouseLeaveMenu = () => {
    setShow(false)
    debouncedHandleMouseEnterMenu.cancel()
  }
  console.log(locale)
  return (
    <Box
      as="li"
      key={item.id}
      sx={{ position: "relative", marginX: 1, paddingX: 2, paddingY: 3 }}
      onMouseEnter={() => debouncedHandleMouseEnterMenu()}
      onMouseLeave={() => handlOnMouseLeaveMenu()}
    >
      {item.link ? (
        <MagicLink item={item.link} locale={locale}></MagicLink>
      ) : (
        <Box sx={{ cursor: "default" }}>{item.anchor}</Box>
      )}
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
                {item.link ? (
                  <MagicLink item={item.link} locale={locale} />
                ) : (
                  <Box sx={{ cursor: "default" }}>{item.anchor}</Box>
                )}
              </Box>
            ) : null
          )}
        </Box>
      )}
    </Box>
  )
}

export default Nav
