import React from 'react'
import './Styles/Contact.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Contact = () => {
  return (
  <div>
    <Navbar/>

    <section className='header-section-cont'>
      <div>
        <h1>Contact Us</h1>
      </div>
    </section>
    
    <section className='contac-section'>
      <div className='contact-det'>
        <h1>TACTICA Ministries</h1>
        <h2>5611 Springridge St. Portage, MI 49024</h2>
        <p className='phone-num'><i className='fas fa-phone'></i> 269-993-4813</p>
        <p className='email'><i className='fas fa-envelope'></i> tactica3@yahoo.com</p>
      </div>

      <div className='contact-fm'>
        <form action="">
          <input type="text" name='Name' placeholder='Name' required />
          <input type="email" name='Email' placeholder='Email' required />
          <input type="text" name='Subject' placeholder='Subject' required/>
          <textarea name="Message" id="" rows="6" placeholder='Message'></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </section>

    <Footer/>
  </div>
  )
}
export default Contact