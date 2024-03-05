import React from 'react'
import './Footer.css'
import logo from '../Assets/tactica-global-real.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='top'>
        <nav className='first'>
          <img src={logo} alt="logo" className='logo-bottom' />
          <ul className='menu'>
            <li><Link to="/" id='home-link'>Home</Link></li>
            <li><Link to="/About" id='about-link'>About</Link></li>
            <li><Link to="/Blog" id='blog-link'>Blog</Link></li>
            <li><Link to="/Serve" id='serve-link'>Serve</Link></li>
            <li><Link to="/Give" id='give-link'>Give</Link></li>
            <li><Link to="/Global" id='global-link'>Global</Link></li>
            <li><Link to="/Contact" id='contact-link'>Contact</Link></li>
            <li><Link to="/Shop" id='shop-link'>Shop</Link></li>
          </ul>
          <i className='fas fa-bars'></i>
        </nav>
      </div>

      <div>
        <hr  className='footer-line'/>
      </div>


      <div className='bottom'>
       <p className='line1'>Copyright &nbsp; ©️ &nbsp; TACTICA Ministries, Inc. &nbsp; • &nbsp; Privacy Policy &nbsp; • &nbsp; Terms & Conditions</p>
       <p className='line2'>Tactica Ministries, Inc. (T.A.C.T.I.C.A) is a registered 501(c)3 non-profit organization.</p>
       <p className='line3'>Donations are tax deductible in full or in part, as determined by the IRS.</p>
      </div>
    </div>
  )
}

export default Footer