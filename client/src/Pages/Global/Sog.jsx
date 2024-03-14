import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Sog.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import soglogo from './Images/logo_tactica_sog.jpg'
import sogpic from './Images/bill-and-cindy.jpg'
import qrcode from './Images/qr-code.png'

const Sog = () => {

  // browser tab title
  useEffect(() => {
    document.title = 'TACTICA SOG';
  }, []);

  // Links to donate
  const handleSogBtn = () => {
    const abwesogUrl = 'https://give.abwe.org/checkout?page=1764'

    window.open(abwesogUrl, '_blank')
  }

  return (
    <div className='sog'>

        <Navbar/>

        <div className='sog-container'>
            <img src={soglogo} alt="Tactica SOG" />
            <img src={sogpic} alt="bill-and-cindy" style={{ paddingLeft: '50px'}} />
            <h1>Bill & Cindy Gruppen</h1>
            <p><strong>“Our mission is to protect the investment of the sending church by equipping, engaging, and educating the missionary through the training of the mind, body, and spirit.  2 Timothy 1:7”</strong></p>
            <p>In 2022, TACTICA-Special Operations Group (SOG) entered into a partnership with a large mission organization in order to provide essential life-saving security awareness 
                training to more than a thousand missionaries in over 85 countries. This is a huge endeavor that requires intricate coordination and a host of resources and personnel. 
                TACTICA instructor Bill Gruppen and his wife Cindy were appointed to head up this endeavor. After much prayer and development, TACTICA-Special Operations Group has 
                developed a high quality, Bible-based security program to meet the needs of missionaries and administrators serving across the globe.
            </p>
            
            <p> <strong>Meet Bill & Cindy Gruppen</strong></p>
            
            <p>Cindy and I hail from Zeeland, Michigan and have shared a remarkable journey together over our 14-year marriage. We have been blessed to share this journey with our amazing seven 
                children ranging in age from 30 to 20.
            </p>

            <p>My career has always been in public service with many years serving as a police officer to recently retiring as the Fire Marshal at a nuclear power plant as well as 38 years as 
                a Fire Captain with our local fire department. 
            </p>

            <p>Cindy and I were introduced to missions back in 2015 when we joined TACTICA Ministries on our very first short-term mission trip to Costa Rica! Eight years later and we are beyond 
                excited to not only still be serving with TACTICA, but to officially be part of their global expansion as the directors of TACTICA SOG!
            </p>

            <p>It is our goal to provide missionaries with the necessary personal security training before entering the field, but to also be a resource for those who have been serving in the 
                field for any length of time. 
            </p>

            <p>More information on TACTICA SOG: <a href="mailto:SOG@tacticaministries.org">SOG@tacticaministries.org</a></p>

            <p>Partner with the Gruppens: <a onClick={handleSogBtn} style={{textDecoration: 'underline', cursor: 'pointer'}}>Click Here</a></p>

            <p>Gruppen QR code for giving: </p>

            <div style={{paddingRight: '56%'}}>
                <img src={qrcode} alt="qr-code" />
            </div>

            <Link to="/Global" className='back-btn'>Back</Link>
        </div>

        <Footer/>
    </div>
  )
}

export default Sog