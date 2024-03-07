import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Serve.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Serve = () => {

  // browser tab title
  useEffect(() => {
    document.title = 'Serving Opportunities';
  }, []);

  return (
  <div className='serve-pg'>

    <Navbar/>

    <section className='header-section-sv'>
      <div className='text-box-sv'>
        <h1 className='sv-h1'>How to Serve in the Ministry</h1>
        <Link to='/Application-Form-page-1' className='btn-sv-1'>Get Involved</Link>
      </div>
    </section>

    <Footer/>
    
  </div>
  )
}
export default Serve