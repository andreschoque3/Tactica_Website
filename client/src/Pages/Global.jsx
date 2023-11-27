import React from 'react'
import './Styles/Global.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import logo1 from '../Images/logo_tactica_global.jpeg'
import logo2 from '../Images/logo_tactica_ecuador.jpeg'
import logo3 from '../Images/logo_tactica_global_usa.jpeg'
import logo4 from '../Images/logo_tactica_sog.jpeg'

const Global = () => {
  return (
  <div>

    <Navbar/>

    <section className='header-glo'>
      <div>
        <h1>TACTICA Global Components</h1>
      </div>
    </section>

    <section className='middle-glo'>
      <h1>TACTICA Global Components</h1>
      <p>Our mission is to fulfill the Great Commission by investing into the lives of first responders and their families through high quality training, evangelism, and discipleship.</p>
      <hr />
    </section>

    <section>
      <div className='logo-container'>
        <div className='logo-1'>
          <img src={logo1} alt="tactica-global-logo" />
          <h2>TACTICA Global Ministries</h2>
          <p>The TACTICA Ministries community endeavors to engage, establish, equip, empower, and eventually entrust the ministry to followers of Christ in the public safety community.</p>
          <a className='btn-glo-1'>Learn More</a>
        </div>

        <div className='logo-2'>
          <img src={logo2} alt="tactica-ecuador-logo" />
            <h2>TACTICA Ecuador</h2>
            <p>TACTICA Ministries first began investing into the public safety community in Ecuador in 2014. TACTICA Ecuador hosts tactical and medical courses, and regularly provides Biblical studies, as well as marriage and family support.</p>
            <a className='btn-glo-2'>Learn More</a>
        </div>

        <div className='logo-3'>
        <img src={logo3} alt="tactica-usa-logo" />
            <h2>TACTICA USA</h2>
            <p>TACTICA Ministries USA first began its efforts of investing into the American public safety community in 2022. TACTICA USA provides leadership and tactical training as well as spiritual, mental, and emotional support of first responders and their families.</p>
            <a className='btn-glo-3'>Learn More</a>
        </div>

        <div className='logo-4'>
          <img src={logo4} alt="tactica-sog-logo" />
            <h2>TACTICA SOG</h2>
            <p>TACTICA Special Operations Group provides security and safety training and serves as a international security consultants for missionaries.</p>
            <a className='btn-glo-4'>Learn More</a>
        </div>
      </div>

    </section>

    <Footer/>
    
  </div>
  )
}
export default Global