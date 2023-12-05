import React from 'react'
//import './Styles/Equipment.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Equipment = () => {

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
            apparel, or merchandise to TACTICA’s equipment donation program, please contact us</p>
      </section>
  
      <Footer/>
  
    </div>
    )
  }
  export default Equipment