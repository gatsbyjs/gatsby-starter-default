import React from 'react'
import { Link } from 'gatsby'
import Logo from '../components/logo'
import './header.css'

const Header = () => (
  <div className="header">
    <Link to="/">
      <Logo />
    </Link>
  </div>
)

export default Header
