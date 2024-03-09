import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Equipment.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import item1 from './Images/item-1.png'
import item2 from './Images/item-2.jpeg'
import item3 from './Images/item-3.png'
import item4 from './Images/item-4.jpeg'

const Equipment = () => {

  // browser tab title
  useEffect(() => {
    document.title = 'TACTICA Equipment';
  }, []);

    return (
    <div>
  
      <Navbar/>

      <section className='header-section-eq'>
        <div>
            <h1>TACTICA Equipment</h1>
        </div>
      </section>

      <section className='middle-section-eq'>
        <h1>TACTICA Equipment</h1>
        <p>TACTICA operates an equipment donation program that processes new and used equipment, tactical & medical gear, police apparel, and/or merchandise from 
            police agencies, fire departments, hospitals, and private companies in the United States.  We then partner with nationally recognized public safety 
            institutions and governments to arrange for the safe and secure distribution of the donated equipment to public safety professionals that are in need 
            in Central America and around the world.  Since we began the program, we have been able to distribute hundreds of boots, gloves, handcuffs, duty belts, 
            uniforms, holsters, pouches, breaching tools, binoculars, batons, tourniquets and many other medical supplies to police forces throughout the region.  
            Praise God for this program which has allowed us to tangibly meet many of the physical equipment needs of the officers, which in turn has opened up 
            incredible opportunities for us to talk about their spiritual need! If you, your agency, or your business would like to donate public safety equipment, 
            apparel, or merchandise to TACTICA’s equipment donation program, please contact us.</p>
        <Link to="/Contact" className='btn-eqi'>Contact Us</Link>
      </section>

      <section className='item-list'>
        <div className='item-cards'>
          
          <div className='item'>
            <img src={item1} alt="item1" />
            <p className='description'>Tactical supplies</p>
          </div>

          <div className='item'>
            <img src={item2} alt="item2" />
            <p className='description'>Holsters & Pouches</p>
          </div>

          <div className='item'>
            <img src={item3} alt="item3" />
            <p className='description'>Medical supplies</p>
          </div>

          <div className='item'>
            <img src={item4} alt="item4" />
            <p className='description'>Bibles & Journals</p>
          </div>

        </div>

      </section>
  
      <Footer/>
  
    </div>
    )
  }
  export default Equipment