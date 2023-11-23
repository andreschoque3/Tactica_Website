import React from 'react'
import './Styles/Serve.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Serve = () => {
  return (
  <div className='serve-pg'>
    <Navbar/>

    <section className='header-section-sv'>
      <div className='text-box-sv'>
        <h1 className='sv-h1'>How to Serve in the Ministry</h1>
        <a className='btn-sv-1'>Get Involved</a>
      </div>
    </section>

    <section className='middle-section'>
      <h1>Ministries Opportunities</h1>
      <p>Our mission is to train Christ serving officers. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

    </section>

    <section className='footer-section'>
      <div className='app-box-sv'>
        <h1 className='app-h1'>Apply to Serve</h1>
        <a className='btn-sv-2'>Apply Here</a>
      </div>
    </section>

    <Footer/>
  </div>
  )
}
export default Serve