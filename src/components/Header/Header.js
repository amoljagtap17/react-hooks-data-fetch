import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="meu-text">REACT HOOKS</li>
      </ul>
    </div>
    <nav className="top-bar-right">
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/details">Details</Link></li>
      </ul>
    </nav>
  </div>
)

export default Header
