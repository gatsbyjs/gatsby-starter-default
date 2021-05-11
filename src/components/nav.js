import { Box, Container, Flex } from "@theme-ui/components"
import React from "react"
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
      <Container variant="fw">
        <Flex sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Box>
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
              <Box as="li" key={item.id} sx={{ position: "relative" }}>
                {linkSwitch(item, locale)}
                {item.treeChildren.length > 0 && (
                  <Box
                    sx={{
                      padding: 3,
                      backgroundColor: "lightBackground",
                      position: "absolute",
                      top: 20,
                      width: "max-content",
                    }}
                  >
                    <TextComponent item={item} locale={locale} />
                  </Box>
                )}
              </Box>
            ))}
          </Flex>
          <LanguageSwitcher />
        </Flex>
      </Container>
    </Box>
  )
}

const TextComponent = ({ item, locale }) => {
  return (
    <Box as="ul" sx={{ listStyle: "none", padding: 0, margin: 0 }}>
      {item.treeChildren.map(item =>
        item.anchor ? (
          <Box as="li" key={item.id}>
            {linkSwitch(item, locale)}
            {item.treeChildren && <TextComponent item={item} />}
          </Box>
        ) : null
      )}
    </Box>
  )
}

export default Nav
