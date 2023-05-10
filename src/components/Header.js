import cn from "classnames"
import React from "react"

import Link from "@/components/Link"
import MenuLinks from "@/components/MenuLinks"

const Header = ({ hideLogo = false }) => {
  return (
    <header
      className={cn(
        "container flex flex-col sm:flex-row items-center py-4 h-full relative z-10",
        {
          "justify-center sm:justify-end": hideLogo,
          "justify-between": !hideLogo,
        }
      )}
    >
      {!hideLogo && (
        <Link to="/" title="Return home">
          <h1 className="text-teal-600 hover:text-pink-600 text-3xl tracking-tighter leading-relaxed drop-shadow-md mt-0">
            <strong className="font-bold font-heading">YYJ</strong>
            <span className=" font-heading !font-thin ml-0.5">Tech</span>
          </h1>
        </Link>
      )}
      <MenuLinks />
    </header>
  )
}

export default Header
