import React from 'react'
import './Navbar.css'
import logo from './Assets/logo_tactica_global.jpeg'
//import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-top'>
        <nav className='first'>
          <img src={logo} alt="logo" className='logo' />
          <ul className='icon-menu'>
            <li><i className='fas fa-user'></i></li>
            <li><i className='fas fa-globe'></i></li>
          </ul>
        </nav>
      </div>

      <div>
        <hr />
      </div>


      <div className='nav-bottom'>
        <nav className='second'>
          <ul className='nav-menu'>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Serve</li>
            <li>Give</li>
            <li>Global</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar