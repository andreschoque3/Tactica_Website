import React from 'react'
import './Navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
          <p>tactica logo</p>
      </div>

      <div>
        <ul className='nav-menu'>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Serve</li>
          <li>Give</li>
          <li>Divisions</li>
          <li>Contact</li>
          <li>Shop</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar