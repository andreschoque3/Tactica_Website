import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Sog.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import soglogo from './Images/logo_tactica_sog.jpg'

const Sog = () => {

  // browser tab title
  useEffect(() => {
    document.title = 'TACTICA SOG';
  }, []);

  return (
    <div className='sog'>

        <Navbar/>

        <div className='sog-container'>
            <img src={soglogo} alt="Tactica SOG" />
            <h1>TACTICA SOG</h1>
            <p>In 2022, TACTICA-Special Operations Group (SOG) entered into a partnership with a large mission organization in order to provide essential life-saving security awareness 
                training to more than a thousand missionaries in over 85 countries. This is a huge endeavor that requires intricate coordination and a host of resources and personnel. 
                TACTICA instructor Bill Gruppen and his wife Cindy were appointed to head up this endeavor. After much prayer and development, TACTICA-Special Operations Group has 
                developed a high quality, Bible-based security program to meet the needs of missionaries and administrators serving across the globe.
            </p>
            
            <p> <strong>Meet Bill & Cindy Gruppen</strong></p>
            
            <p>Cindy and I hail from Michigan and have shared a remarkable journey together over our 14-year marriage. We have been blessed to share this journey with our amazing seven
                children ranging in age from 20 to 30 years old.
            </p>

            <p>My career has always been in public service. I served many years as a police officer and recently retired as the Fire Marshal at a nuclear power plant. Furthermore, I was 
                blessed to serve for 38 years as a Fire Captain with our local fire department.
            </p>

            <p>Cindy and I were introduced to missions back in 2015 when we joined TACTICA Ministries on our very first short-term mission trip to Costa Rica! We are beyond excited to not 
                only continue our ministry with TACTICA, but to officially be part of their global expansion as the directors of TACTICA-SOG!
            </p>

            <p>It is our goal to provide missionaries with the necessary personal security training before entering the mission field, as well as be a resource for those who have been 
                serving in the field for any length of time.
            </p>

            <Link to="/Global" className='back-btn'>Back</Link>
        </div>

        <Footer/>
    </div>
  )
}

export default Sog