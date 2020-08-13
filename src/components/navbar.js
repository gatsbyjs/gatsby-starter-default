import React from "react"
import styled from "styled-components"
import Logo from "../images/logo.svg"

export default function Navbar() {
  return (
    <NavigationWrapper>
      <img
        style={{ width: "120px" }}
        class="navigation__logo"
        src={Logo}
        alt="Logo"
      />
      <Navigation>
        <a href="#features">
          <li>Features</li>
        </a>
        <a href="#team">
          <li>Team</li>
        </a>
        <a href="#signin">
          <li>Sign in</li>
        </a>
      </Navigation>
    </NavigationWrapper>
  )
}
const NavigationWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`
const Navigation = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`
