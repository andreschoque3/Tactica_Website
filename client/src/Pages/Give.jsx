import React from 'react'
import './Styles/Give.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import donImg1 from '../Images/donation-pic1.jpg'
import donImg2 from '../Images/Ryan-Gretchen-Rought-2023.jpeg'
import donImg3 from '../Images/donation-pic3.JPG'
import donImg4 from '../Images/donation-pic4.jpg'
import donImg5 from '../Images/donation-pic5.jpg'

const Give = () => {
  return (
  <div>

    <Navbar/>

    <section className='header-section-gv'>
      <div className='text-box-gv'>
        <h1 className='title-gv'>Give Today</h1>
        <a className='btn-gv-1'>Give Options</a>
      </div>

    </section>

    <section className='donation-gv'>
        <h1>Make a Donation Today</h1>
        <p>Our mission is to train Christ serving officers. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    </section>

    <section className='donation-cards-gv'>
      <div className='row-1'>
        <div className='don-card'>
          <img src={donImg1} alt="don-card1" />
          <h2>TACTICA Ministries</h2>
          <a className='btn-gv-2'>Donate Now</a>
        </div>

        <div className='don-card'>
          <img src={donImg2} alt="don-card2" />
          <h2>Rought Family</h2>
          <a className='btn-gv-3'>Donate Now</a>
        </div>

        <div className='don-card'>
          <img src={donImg3} alt="don-card3" />
          <h2>Equipment</h2>
          <a className='btn-gv-4'>Learn More</a>
        </div>
      </div>

      <div className='row-2'>
        <div className='don-card'>
          <img src={donImg4} alt="don-card4" />
          <h2>Bible Project</h2>
          <a className='btn-gv-5'>Donate Now</a>
        </div>

        <div className='don-card'>
          <img src={donImg5} alt="don-card5" />
          <h2>TACTICA Teams</h2>
          <a className='btn-gv-6'>Donate Now</a>
        </div>
      </div>

    </section>

    <Footer/>

  </div>
  )
}
export default Give