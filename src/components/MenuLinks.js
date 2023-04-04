import React from "react"
import { IoLogoSlack, IoNewspaperSharp } from "react-icons/io5"

import Link from "@/components/Link"
import useSiteData from "@/hooks/useSiteData"

const MenuLinks = () => {
  const links = useSiteData("siteMenu")
  const icons = {
    job: <IoNewspaperSharp />,
    slack: <IoLogoSlack />,
  }

  return (
    <nav className="flex gap-x-8">
      {links.map((link, idx) =>
        link.isHidden ? null : ( // Return null to skip the link
          <Link
            key={`ml-${idx}`}
            data-menu--link
            to={link.url}
            icon={link.icon}
            className="menu--link"
            title={link.label}
            target={link.isNewWindow ? "_blank" : "_self"}
          >
            <span>{icons[link.icon]}</span> {link.label}
          </Link>
        )
      )}
    </nav>
  )
}

export default MenuLinks
