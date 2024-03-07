import React, {useState} from 'react'
import './Navbar.css'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import logo from '../Assets/tactica-global-real.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  // Redirect the user to the login page
  const handleUserIconClick = () => {
    window.location.href = '/login';
  };

  // Language selection

  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const handleLanguageIconClick = () => {
    // Toggle the visibility of the language dropdown
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const handleLanguageSelection = (language) => {
    // Handle the language selection here
    console.log(`Selected language: ${language}`);
    toast.success(`Successfuly selected: ${language}`)
    // You can use this function to change the language of your application
    // based on the user's selection
  };

  return (
    <div className='navbar'>

        <nav className='first'>
          <img src={logo} alt="logo" className='logo-top' />
          <ul className='icon-menu'>
            <li><i className='fas fa-user' onClick={handleUserIconClick}></i></li>
            <li><i className='fas fa-globe'onClick={handleLanguageIconClick}></i></li>
              {/* Language dropdown */}
      {showLanguageDropdown && (
        <div className="language-dropdown">
          <button onClick={() => handleLanguageSelection('English')}>English</button>
          <button onClick={() => handleLanguageSelection('Spanish')}>Spanish</button>
          
        </div>
      )}
            <li><i className='fas fa-circle-xmark'></i></li>
          </ul>
          <i className='fas fa-bars'></i>
        </nav>

        <div>
         <hr className='navbar-line' />
        </div>

        <nav className='second'>
          <ul className='nav-menu'>
            <li><Link to="/" id='home-link'>Home</Link></li>
            <li><Link to="/About" id='about-link'>About</Link></li>
            <li><Link to="/Blog" id='blog-link'>Blog</Link></li>
            <li><Link to="/Serve" id='serve-link'>Serve</Link></li>
            <li><Link to="/Give" id='give-link'>Give</Link></li>
            <li><Link to="/Global" id='global-link'>Global</Link></li>
            <li><Link to="/Contact" id='contact-link'>Contact</Link></li>
            <li><Link to="/Shop" id='shop-link'>Shop</Link></li>
          </ul>
        </nav>
      
    </div>
  )
}

export default Navbar