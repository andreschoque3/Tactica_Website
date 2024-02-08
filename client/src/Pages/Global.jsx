import React from 'react'
import './Styles/Global.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import logo1 from '../Images/logo_tactica_global.jpeg'
import logo2 from '../Images/logo_tactica_costa_rica.jpg'
import logo3 from '../Images/logo_tactica_ecuador.jpg'
import logo4 from '../Images/logo_tactica_usa.jpg'
import logo5 from '../Images/logo_tactica_sog.jpg'
import logo6 from '../Images/logo_tactica_jamaica.jpg'
import logo7 from '../Images/logo_tactica_panama.jpg'

const Global = () => {
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
          <img src={logo1} alt="tactica-global-logo" />
          <h2>TACTICA Global Ministries</h2>
          <p>TACTICA Ministries is a GLOBAL ministry that responds with innovation, vision, and a powerful commitment to the international needs of the public safety community. While expansion opportunities are continually emerging, TACTICA Ministries Global has 
            concentrated efforts in the following areas:
          </p>
          <a className='btn-glo'>Learn More</a>
        </div>

        <div className='logo'>
          <img src={logo2} alt="tactica-costa-rica-logo" />
            <h2>TACTICA Costa Rica</h2>
            <p>With over 17 years of full-time ministry and service in Costa Rica, God has allowed us to develop and equip an incredible team of Costa Rican national leaders. The Force Multiplier Team is made up of passionate individuals who are trained and prepared to be
               entrusted with large key components of the ministry. National leaders actively engage in the work of the ministry, allowing for TACTICA's innovative global expansion efforts to be launched.
            </p>
            <a className='btn-glo'>Learn More</a>
        </div>

        <div className='logo'>
          <img src={logo3} alt="tactica-ecuador-logo" />
            <h2>TACTICA Ecuador</h2>
            <p>TACTICA has been ministering in Ecuador to various Special Operations groups since 2014 through multiple training and evangelism courses at the GOE Training Center in Guano, Ecuador. TACTICA has seen over 100 Ecuadorian officers repent of their sins and 
              come to a saving faith in Jesus Christ! TACTICA's current efforts are focused heavily on the development of a national leadership team that will be equipped to multiply. In 2023, TACTICA was able to increase ministry efforts in Ecuador to include 
              three large training and evangelism courses in Guano and in Guayaquil.
            </p>
            <a className='btn-glo'>Learn More</a>
        </div>

        <div className='logo'>
        <img src={logo4} alt="tactica-usa-logo" />
            <h2>TACTICA USA</h2>
            <p>TACTICA was birthed in the USA and has nearly 200 Christian public safety professionals that partner with the ministry in short-term training and evangelism courses. The past and current anti-public safety climate in the U.S. has produced high rates of 
              officer suicide, divorce, and dangerously low morale. The launching of TACTICA-USA enables us to actively support U.S. officers and their families. We offer quality tactical and leadership training to departments and officers in need. Our team 
              enthusiastically shares the hope that comes from a personal relationship with Jesus and encourages public safety families to grow in their faith and inter-familial relationships. Recognizing the broad variety of needs in the public safety community, we
              also minister through family & marriage retreats, help officers and their families heal from PTSD, and partner with local churches to provide events in an effort to see a police community that is healthy at the heart, mind, and soul level.
            </p>
            <a className='btn-glo'>Learn More</a>
        </div>

        <div className='logo'>
          <img src={logo5} alt="tactica-sog-logo" />
            <h2>TACTICA SOG</h2>
            <p>In 2022, TACTICA-Special Operations Group (SOG) entered into a partnership with a large mission organization in order to provide essential life-saving security awareness training to more than a thousand missionaries in over 85 countries. This is a huge 
              endeavor that requires intricate coordination and a host of resources and personnel. TACTICA instructor Bill Gruppen and his wife Cindy were appointed to head up this endeavor. After much prayer and development, TACTICA-Special Operations Group
              has developed a high quality, Bible-based security program to meet the needs of missionaries and administrators serving across the globe.
            </p>
            {/** Meet Bill &amp; Cindy Gruppen 
             * Cindy and I hail from Michigan and have shared a remarkable journey together over our
                14-year marriage. We have been blessed to share this journey with our amazing seven
                children ranging in age from 20 to 30 years old.
                
                My career has always been in public service. I served many years as a police officer
                and recently retired as the Fire Marshal at a nuclear power plant. Furthermore, I was
                blessed to serve for 38 years as a Fire Captain with our local fire department.
                Cindy and I were introduced to missions back in 2015 when we joined TACTICA

                Ministries on our very first short-term mission trip to Costa Rica! We are beyond excited
                to not only continue our ministry with TACTICA, but to officially be part of their global
                expansion as the directors of TACTICA-SOG!

                It is our goal to provide missionaries with the necessary personal security training
                before entering the mission field, as well as be a resource for those who have been
                serving in the field for any length of time.*/}
            <a className='btn-glo'>Learn More</a>
        </div>

        <div className='logo'>
          <img src={logo6} alt="tactica-jamaica-logo" />
            <h2>TACTICA Jamaica</h2>
            <p>Beginning in 2024, a small team of TACTICA’s leadership will begin expansion into Jamaica. Partnering with established and experienced missionaries on the ground enables us to work toward hosting our first full training and evangelism team in the fall of 2024.</p>
            <a className='btn-glo'>Learn More</a>
        </div>

        <div className='logo'>
          <img src={logo7} alt="tactica-panama-logo" />
            <h2>TACTICA Panama</h2>
            <p>While we currently do not have active ministry in Panama, we do have valuable connections with churches that desire to partner with us in opening ministry to the authorities. Additionally, Panamanian police commanders have extended an invitation to TACTICA to 
              come and minister to their officers. TACTICA projects a launching of ministry in Panama in the next one to three years.
            </p>
            <a className='btn-glo'>Learn More</a>
        </div>
      </div>

    </section>

    <Footer/>
    
  </div>
  )
}
export default Global