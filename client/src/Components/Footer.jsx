import React from 'react'
import './Styles/Footer.css'
import logo from './Assets/logo_tactica_global.jpeg'

function Footer() {
  return (
    <div className='footer'>
    <div className='top'>
        <nav className='first'>
          <img src={logo} alt="logo" className='logo-bottom' />
          <ul className='menu'>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Serve</li>
            <li>Give</li>
            <li>Global</li>
            <li>Contact</li>
          </ul>
          <i className='fas fa-bars'></i>
        </nav>
      </div>

      <div>
        <hr  className='footer-line'/>
      </div>


      <div className='bottom'>
       <p className='line1'>Copyright ©️ TACTICA Ministries, Inc. • Privacy Policy • Terms & Conditions</p>
       <p className='line2'>Tactica Ministries, Inc. (T.A.C.T.I.C.A) is a registered 501(c)3 non-profit organization.</p>
       <p className='line3'>Donations are tax deductible in full or in part, as determined by the IRS.</p>
      </div>
    </div>
  )
}

export default Footer