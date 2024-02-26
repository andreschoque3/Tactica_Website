import React from 'react'
import { Link } from 'react-router-dom'
import './Serve.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Serve = () => {

  return (
  <div className='serve-pg'>

    <Navbar/>

    <section className='header-section-sv'>
      <div className='text-box-sv'>
        <h1 className='sv-h1'>How to Serve in the Ministry</h1>
        <Link to='/Application_Form_1' className='btn-sv-1'>Get Involved</Link>
      </div>
    </section>

    <Footer/>
    
  </div>
  )
}
export default Serve