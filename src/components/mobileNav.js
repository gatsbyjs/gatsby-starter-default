import React, { useState, useContext, useEffect } from "react"
import { motion } from "framer-motion"
import Burger from "../images/burger.svg"
import { Box, Image } from "@theme-ui/components"
import Logo from "../images/logo.svg"

import X from "../images/close.svg"
import { getHomePath } from "../utils/path"
import { InboundLink } from "./link"
import { MagicLink } from "../utils/magicLink"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"
import { MenuContext } from "../context/menuContext"

import { FooterContext } from "../context/footerContext"
const MobileNav = ({}) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const locale = useContext(LanguageSwitcherContext).activeLocale
  const menu = useContext(MenuContext)

  const footer = useContext(FooterContext)

  footer &&
    footer.map(footerItem => {
      footerItem.treeChildren.sort((a, b) => a.position - b.position)
      footerItem.treeChildren.map(footerItem => {
        if (footerItem.treeChildren.length > 0) {
          footerItem.treeChildren.sort((a, b) => a.position - b.position)
        }
      })
    })

  menu &&
    menu.map(menuItem => {
      menuItem.treeChildren.sort((a, b) => a.position - b.position)
      menuItem.treeChildren.map(menuItem => {
        if (menuItem.treeChildren.length > 0) {
          menuItem.treeChildren.sort((a, b) => a.position - b.position)
        }
      })
    })

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      zIndex: 100,
      transition: {
        // delay: 0.15,
        duration: 0.5,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-200%",
      transition: {
        // delay: 0.35,
        duration: 0.6,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  }

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "initial"
    }
  }, [mobileNavOpen])

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 100000000,
        backgroundColor: "primary",
      }}
    >
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        style={{
          a: {
            textTransform: "uppercase",
          },
          zIndex: 100000,
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "10px",
          paddingTop: "15px",
          paddingLeft: "20px",
          paddingRight: "20px",
          position: "relative",
        }}
      >
        <Box sx={{ a: { display: "block" } }}>
          <InboundLink to={getHomePath(locale)} className="logo-link">
            <Image sx={{ height: "40px" }} src={Logo} alt="Logo" />
          </InboundLink>
        </Box>
        <Box sx={{}} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          <Image sx={{ height: "30px", width: "30px" }} src={Burger} />
        </Box>
        <motion.div
          variants={mobileMenuVariant}
          style={{
            zIndex: 1000,
            position: "fixed",
            top: "0",
            left: "0",
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            alignItems: "center",
            backgroundColor: "#00a889",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              paddingX: 2,
              paddingY: 3,
              width: "100%",
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              backgroundColor: "primary",
              justifyContent: "space-between",
              a: {
                textTransform: "uppercase",
              },
            }}
          >
            <InboundLink to={getHomePath(locale)} className="logo-link">
              <Image sx={{ height: "40px" }} src={Logo} alt="Logo" />
            </InboundLink>
            <Box sx={{}} onClick={() => setMobileNavOpen(false)}>
              <Image sx={{ height: "30px", width: "30px" }} src={X} />
            </Box>
          </Box>
          {menu && menu.length > 0 && (
            <motion.ul
              style={{
                marginTop: [7],
                listStyle: "none",
                paddingLeft: "16px",
                width: "100%",
                a: {
                  backgroundColor: "dark",
                  textTransform: "uppercase",
                },
              }}
            >
              {menu.map(navItem => (
                <MenuItemComponent
                  key={navItem.id}
                  menuItem={navItem}
                  locale={locale}
                />
              ))}
            </motion.ul>
          )}
        </motion.div>
      </motion.nav>
    </Box>
  )
}

const MenuItemComponent = ({ menuItem, locale }) => {
  return (
    <Box key={"mobile" + menuItem.id}>
      {menuItem.link ? (
        <motion.li
          whileTap={{ scale: 0.95 }}
          style={{
            overflowY: "hidden",
            userSelect: "none",
          }}
        >
          <motion.div
            style={{
              display: "flex",
              justifyContent: "space-between",
              textTransform: "capitalize",
              padding: "15px 0",
            }}
          >
            <MagicLink
              variant="links.nav"
              item={menuItem.link}
              locale={locale}
              sx={{
                color: "light",
                backgroundColor: "dark",
                borderRadius: "80px",
                textTransform: "uppercase",
                textDecoration: "none",
                py: "10px",
                px: "15px",
                fontSize: ["18px"],
                "&.active": {
                  color: "light",
                },
              }}
            />
          </motion.div>
        </motion.li>
      ) : menuItem.treeChildren && menuItem.treeChildren.length > 0 ? (
        <TreeChildrenComponent
          treeChildren={menuItem.treeChildren}
          locale={locale}
        />
      ) : null}
    </Box>
  )
}

const TreeChildrenComponent = ({ treeChildren, locale }) => {
  return (
    <>
      {treeChildren.map(child => (
        <motion.li
          whileTap={{ scale: 0.95 }}
          key={child.id}
          style={{
            overflowY: "hidden",
            userSelect: "none",
          }}
        >
          <motion.div
            style={{
              display: "flex",
              justifyContent: "space-between",
              textTransform: "capitalize",
              padding: "15px 0",
            }}
          >
            <MagicLink
              variant="links.nav"
              item={child.link}
              locale={locale}
              sx={{
                color: "light",
                backgroundColor: "dark",
                borderRadius: "80px",
                textTransform: "uppercase",
                textDecoration: "none",
                py: "10px",
                px: "15px",
                fontSize: ["18px"],
                "&.active": {
                  color: "light",
                },
              }}
            />
          </motion.div>
        </motion.li>
      ))}
    </>
  )
}

export default MobileNav
