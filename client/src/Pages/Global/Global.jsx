import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Global.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Popup from '../../Components/Popup/Popup'
import logo1 from './Images/logo_tactica_global.jpeg'
import logo2 from './Images/logo_tactica_costa_rica.jpg'
import logo3 from './Images/logo_tactica_ecuador.jpg'
import logo4 from './Images/logo_tactica_usa.jpg'
import logo5 from './Images/logo_tactica_sog.jpg'
import logo6 from './Images/logo_tactica_jamaica.jpg'
import logo7 from './Images/logo_tactica_panama.jpg'

const Global = () => {

  // Popup functionality
  const [popupContent, setPopupContent] = useState(null);

  const togglePopup = (content) => {
    setPopupContent(content);
  };

  // browser tab title
  useEffect(() => {
    document.title = 'Global Components';
  }, []);


  return (
  <div>

    <Navbar/>

    <section className='header-glo'>
      <div>
        <h1>TACTICA Global Components</h1>
      </div>
    </section>

    <section className='middle-glo'>
      <h1>TACTICA Global Components</h1>
      <p>Our mission is to fulfill the Great Commission by investing into the lives of first responders and their families through high quality training, evangelism, and discipleship.</p>
      <hr />
    </section>

    <section>
      <div className='logo-container'>
        <div className='logo'>
          <img src={logo1} alt="tactica global logo" />
          <h2>TACTICA Global Ministries</h2>
          <a className='btn-glo' onClick={() => togglePopup({
            logo: logo1,
            title: "TACTICA Global Ministries",
            description: "TACTICA Ministries is a GLOBAL ministry that responds with innovation, vision, and a powerful commitment to the international needs of the public safety community. While expansion opportunities are continually emerging, TACTICA Ministries Global has concentrated efforts in the following areas:"
            })}>Learn More</a>
        </div>

        <div className='logo'>
          <img src={logo2} alt="tactica costa rica logo" />
            <h2>TACTICA Costa Rica</h2>
            <a className='btn-glo' onClick={() => togglePopup({
            logo: logo2,
            title: "TACTICA Costa Rica",
            description: "With over 17 years of full-time ministry and service in Costa Rica, God has allowed us to develop and equip an incredible team of Costa Rican national leaders. The Force Multiplier Team is made up of passionate individuals who are trained and prepared to be entrusted with large key components of the ministry. National leaders actively engage in the work of the ministry, allowing for TACTICA's innovative global expansion efforts to be launched."
            })}>Learn More</a>
        </div>

        <div className='logo'>
          <img src={logo3} alt="tactica-ecuador-logo" />
            <h2>TACTICA Ecuador</h2>
            <a className='btn-glo' onClick={() => togglePopup({
            logo: logo3,
            title: "TACTICA Ecuador",
            description: "TACTICA has been ministering in Ecuador to various Special Operations groups since 2014 through multiple training and evangelism courses at the GOE Training Center in Guano, Ecuador. TACTICA has seen over 100 Ecuadorian officers repent of their sins and come to a saving faith in Jesus Christ! TACTICA's current efforts are focused heavily on the development of a national leadership team that will be equipped to multiply. In 2023, TACTICA was able to increase ministry efforts in Ecuador to include three large training and evangelism courses in Guano and in Guayaquil."
            })}>Learn More</a>
        </div>

        <div className='logo'>
        <img src={logo4} alt="tactica-usa-logo" />
            <h2>TACTICA USA</h2>
            <a className='btn-glo' onClick={() => togglePopup({
            logo: logo4,
            title: "TACTICA USA",
            description: "TACTICA was birthed in the USA and has nearly 200 Christian public safety professionals that partner with the ministry in short-term training and evangelism courses. The past and current anti-public safety climate in the U.S. has produced high rates of officer suicide, divorce, and dangerously low morale. The launching of TACTICA-USA enables us to actively support U.S. officers and their families. We offer quality tactical and leadership training to departments and officers in need. Our team enthusiastically shares the hope that comes from a personal relationship with Jesus and encourages public safety families to grow in their faith and inter-familial relationships. Recognizing the broad variety of needs in the public safety community, we also minister through family & marriage retreats, help officers and their families heal from PTSD, and partner with local churches to provide events in an effort to see a police community that is healthy at the heart, mind, and soul level."
            })}>Learn More</a>
        </div>

        <div className='logo'>
          <img src={logo5} alt="tactica-sog-logo" />
            <h2>TACTICA SOG</h2>
            <Link to='/Sog' className='btn-glo'>Learn More</Link> 
        </div>

        <div className='logo'>
          <img src={logo6} alt="tactica-jamaica-logo" />
            <h2>TACTICA Jamaica</h2>
            <a className='btn-glo' onClick={() => togglePopup({
            logo: logo6,
            title: "TACTICA Jamaica",
            description: "Beginning in 2024, a small team of TACTICA’s leadership will begin expansion into Jamaica. Partnering with established and experienced missionaries on the ground enables us to work toward hosting our first full training and evangelism team in the fall of 2024."
            })}>Learn More</a>
        </div>

        <div className='logo'>
          <img src={logo7} alt="tactica-panama-logo" />
            <h2>TACTICA Panama</h2>
            <a className='btn-glo' onClick={() => togglePopup({
            logo: logo7,
            title: "TACTICA Panama",
            description: "While we currently do not have active ministry in Panama, we do have valuable connections with churches that desire to partner with us in opening ministry to the authorities. Additionally, Panamanian police commanders have extended an invitation to TACTICA to come and minister to their officers. TACTICA projects a launching of ministry in Panama in the next one to three years."
            })}>Learn More</a>
        </div>
      </div>

    </section>

    <Footer/>

    {popupContent && (
        <Popup trigger={true} setTrigger={togglePopup}>
          <img src={popupContent.logo} alt={popupContent.title} />
          <h2>{popupContent.title}</h2>
          <p>{popupContent.description}</p>
        </Popup>
      )}
    
  </div>
  )
}
export default Global