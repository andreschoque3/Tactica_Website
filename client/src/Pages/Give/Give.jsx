import React, { useRef } from 'react'
import './Give.css'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import donImg1 from './Images/donation-pic1.jpg'
import donImg2 from '../../Images/ryan-gretchen-rought-2023-2.jpg'
import donImg3 from './Images/donation-pic3.JPG'
import donImg4 from './Images/donation-pic4.jpg'
import donImg5 from './Images/donation-pic5.jpg'

const Give = () => {

  // Links to donate
  const handleTacticaMinistriesBtn = () => {
    const paypalUrl = 'https://www.paypal.com/paypalme/tacticaministries?country.x=US&locale.x=en_US'

    window.open(paypalUrl, '_blank')
  }

  const handleabweryangretchenbtn = () => {
    const abwefirstUrl = 'https://give.abwe.org/checkout?page=1287'

    window.open(abwefirstUrl, '_blank')
  }

  const handleabwetaticateamsbtn = () => {
    const abwesecondUrl = 'https://give.abwe.org/checkout?page=501'

    window.open(abwesecondUrl, '_blank')
  }

  // Scroll effect
  const missStatRef = useRef(null);
  
  const handleScrollToMissStat = () => {
    missStatRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <div>

    <Navbar/>

    <section className='header-section-gv'>
      <div className='text-box-gv'>
        <h1 className='title-gv'>Give Today</h1>
        <a className='btn-gv-1' onClick={handleScrollToMissStat}>Give Options</a>
      </div>

    </section>

    <section className='donation-gv' ref={missStatRef}>
        <h1>Make a Donation Today</h1>
        <p>There are a variety of ways to come alongside TACTICA Ministries. Explore below the following giving opportunities: Support the TATICA general ministry fund; provide funding for the personal ministry of TACTICA's founders, Ryan and Gretchen Rought; Donate equipment, gear, apparel, and/or merchandise to be used in the ministry; Give towards the TACTICA Bible project; Make a donation for an individual participating on a TACTICA mission trip.</p>
        <br />
        <p><b>TACTICA Ministries is a non-profit, tax-exempt, 501(c)(3) organization.</b> Please note: Donation processing for the personal ministry of Ryan & Gretchen Rought as well as donations for short term mission team members are handled by the mission organization ABWE; your receipt for tax purposes will come from ABWE when making a donation to Ryan & Gretchen Rought or a TACTICA Team.</p>
    </section>

    <section className='donation-cards-gv'>
      <div className='row-1'>
        <div className='don-card'>
          <img src={donImg1} alt="don-card1" />
          <h2>TACTICA Ministries</h2>
          <a className='btn-gv-2' onClick={handleTacticaMinistriesBtn}>Donate Now</a>
        </div>

        <div className='don-card'>
          <img src={donImg2} alt="don-card2" />
          <h2>Ryan & Gretchen Rought</h2>
          <a className='btn-gv-3' onClick={handleabweryangretchenbtn}>Donate Now</a>
        </div>

        <div className='don-card'>
          <img src={donImg3} alt="don-card3" />
          <h2>Equipment</h2>
          <Link to="/Equipment" className='btn-gv-4'>Learn More</Link>
        </div>
      </div>

      <div className='row-2'>
        <div className='don-card'>
          <img src={donImg4} alt="don-card4" />
          <h2>Bible Project</h2>
          <a className='btn-gv-5' onClick={handleTacticaMinistriesBtn}>Donate Now</a>
        </div>

        <div className='don-card'>
          <img src={donImg5} alt="don-card5" />
          <h2>TACTICA Teams</h2>
          <a className='btn-gv-6' onClick={handleabwetaticateamsbtn}>Donate Now</a>
        </div>
      </div>

    </section>

    <Footer/>

  </div>
  )
}
export default Give