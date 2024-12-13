import React, {
  useState,
  useContext,
  useRef,
  useCallback,
  useEffect,
} from "react"
import { Box, Container, Flex } from "@theme-ui/components"
import { getHomePath, getSearchPath } from "../utils/path"
import { InboundLink } from "./link"
import Logo from "../images/logo.svg"
import { MagicLink } from "../utils/magicLink"
import LanguageSwitcher from "./languageSwitcher"
import { debounce } from "lodash"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"
import { MenuContext } from "../context/menuContext"

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const lastScrollY = useRef(0)
  const menu = useContext(MenuContext)
  const locale = useContext(LanguageSwitcherContext).activeLocale

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    // Show/hide based on scroll direction
    if (currentScrollY < lastScrollY.current) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }

    // Update top state
    setIsAtTop(currentScrollY === 0)
    lastScrollY.current = currentScrollY
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const Logo = () => (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path
          d="M128,0 C57.3075981,0 0,57.307374 0,128 C0,198.69285 57.3078221,256 128,256 C198.69285,256 256,198.692626 256,128 C256,57.307374 198.69285,0 128,0 Z M27.503973,129.334313 L126.665463,228.496027 C72.2144512,227.786305 28.2134711,183.785325 27.503973,129.334313 Z M150.496265,225.983324 L30.0166761,105.503735 C40.2328216,60.8232766 80.2223482,27.4871709 128,27.4871709 C161.397489,27.4871709 190.984927,43.7800881 209.262736,68.8464075 L195.346089,81.125855 C180.519662,59.8637627 155.886614,45.9486835 128,45.9486835 C92.4948508,45.9486835 62.259523,68.5011796 50.8311596,100.061636 L155.938588,205.169064 C181.463942,195.925651 201.095107,174.378594 207.669894,147.692325 L164.102633,147.692325 L164.102633,128.000224 L210.051317,128.000224 L210.051317,127.999776 L228.512829,127.999776 L228.512829,128 C228.512829,175.777652 195.176947,215.767178 150.496265,225.983324 Z"
          fill="#744C9E"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )

  menu.map(menuItem => {
    menuItem.treeChildren.sort((a, b) => a.position - b.position)
    menuItem.treeChildren.map(menuItem => {
      if (menuItem.treeChildren.length > 0) {
        menuItem.treeChildren.sort((a, b) => a.position - b.position)
      }
    })
  })

  return (
    <Box
      as="nav"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition:
          "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
        backgroundColor: isAtTop ? "transparent" : "primary",
        zIndex: 1000,
      }}
    >
      <Container variant="header" sx={{ paddingX: [3, 4] }}>
        <Flex
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ paddingX: 2, paddingY: 3, img: { height: "100%" } }}>
            <InboundLink to={getHomePath(locale)}>
              <Logo />
            </InboundLink>
          </Box>
          <MenuItems menu={menu} locale={locale} />
          <Box sx={{ width: "3%" }}>
            <LanguageSwitcher />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

const MenuItems = ({ menu, locale }) => (
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
)

const TextComponent = ({ item, locale }) => {
  const [show, setShow] = useState(false)
  const debouncedHandleMouseEnterMenu = debounce(() => {
    // Only show submenu if item has no link but has children
    if (!item.link && item.treeChildren?.length > 0) {
      setShow(true)
    }
  }, 200)
  const handleOnMouseLeaveMenu = () => {
    setShow(false)
    debouncedHandleMouseEnterMenu.cancel()
  }

  useEffect(() => {
    return () => {
      debouncedHandleMouseEnterMenu.cancel()
    }
  }, [debouncedHandleMouseEnterMenu])

  return (
    <Box
      as="li"
      sx={{ position: "relative", marginX: 1, paddingX: 2, paddingY: 3 }}
      onMouseEnter={debouncedHandleMouseEnterMenu}
      onMouseLeave={handleOnMouseLeaveMenu}
    >
      <MagicLinkOrAnchor item={item} locale={locale} />
      {show && <SubMenu items={item.treeChildren} locale={locale} />}
    </Box>
  )
}

const SubMenu = ({ items, locale }) => (
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
      boxShadow: "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)",
      borderRadius: "sm",
    }}
  >
    {items.map(item =>
      item.anchor ? (
        <Box as="li" key={item.id}>
          <MagicLinkOrAnchor item={item} locale={locale} />
        </Box>
      ) : null
    )}
  </Box>
)

const MagicLinkOrAnchor = ({ item, locale }) =>
  item.link ? (
    <MagicLink item={item.link} locale={locale} />
  ) : (
    <Box sx={{ cursor: "default" }}>{item.anchor}</Box>
  )

/* const SearchAndLanguageSwitcher = ({ locale }) => (
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
) */

export default Nav
