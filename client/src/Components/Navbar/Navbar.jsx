import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo_tactica_global.jpeg'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='nav-top'>
        <nav className='first'>
          <img src={logo} alt="logo" className='logo-top' />
          <ul className='icon-menu'>
            <li><i className='fas fa-user'></i></li>
            <li><i className='fas fa-globe'></i></li>
            <li><i className='fas fa-circle-xmark'></i></li>
          </ul>
          <i className='fas fa-bars'></i>
        </nav>
      </div>

      <div>
        <hr className='navbar-line' />
      </div>


      <div className='nav-bottom'>
        <nav className='second'>
          <ul className='nav-menu'>
            <li><Link to="/" id='home-link'>Home</Link></li>
            <li><Link to="/About" id='about-link'>About</Link></li>
            <li><Link to="/Blog" id='blog-link'>Blog</Link></li>
            <li><Link to="/Serve" id='serve-link'>Serve</Link></li>
            <li><Link to="/Give" id='give-link'>Give</Link></li>
            <li><Link to="/Global" id='global-link'>Global</Link></li>
            <li><Link to="/Contact" id='contact-link'>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar