import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.css"
const Header = ({ siteTitle, navItems }) => (
  <header
    style={{
      background: `#fff`,
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      margin: `0 10% 1.45rem 10%`
    }}
  >
    <h1 style={{ margin: 0, fontSize: `1em` }}>
      <Link
        to="/"
        style={{
          color: `#000`,
          textDecoration: `none`,
          fontSize: `1em`,
          textDecorationStyle: `none`
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <nav>
      <div className="nav-item-continer">
        {navItems.map((navItem, index) => {
          return (
            <div className="nav-item">
              <h5 style={{ margin: 0, fontSize: `1em` }}>
                <Link
                  key={navItem.key}
                  to={navItem.link}
                  style={{
                    color: `#000`,
                    textDecoration: `none`,
                    fontSize: `1em`,
                    textDecorationStyle: `none`,
                    fontWeight: `normal`
                  }}
                >
                  {navItem.displayName}
                </Link>
              </h5>
            </div>
          )
        })}
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
