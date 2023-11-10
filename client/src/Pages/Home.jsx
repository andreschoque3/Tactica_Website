import React from 'react'
import Navbar from '../Components/Navbar'
import "./Styles/Home.css"
import card1 from "./Styles/Images/card-pic1.JPG"
import card2 from "./Styles/Images/card-pic2.jpg"
import card3 from "./Styles/Images/card-pic3.JPG"
import card4 from "./Styles/Images/card-pic4.jpg"

const Home = () => {
  return (
    <div className='home-pg'>
      
      <Navbar/>
      
      <section className='header-sect'>
        <div className='text box'>
          <h1 className='title-hm'>Training Heroes for Christ in the Public Safety Community</h1>
          <a className='btn1'>Get Started</a>
          <a className='btn2'>Give</a>
        </div>
      </section>

      <section className='core-vals'>
        <h1 className='core-vals'>Our Core Values</h1>
        
        <div className='core-cards'>
            <div className='card'>
                <img src={card1} alt="card1" />
                <h2>Integrity</h2>
                <p>TACTICA is committed to truth and transparency in our relationships as we strive to be men and women of integrity.</p>
            </div>

            <div className='card'>
                <img src={card2} alt="card2" />
                <h2>Excellence</h2>
                <p>TACTICA is committed to effectiveness and excellence, fleeing from apathy; mediocrity is not an option.</p>
            </div>

            <div className='card'>
                <img src={card3} alt="card3" />
                <h2>Compassion</h2>
                <p>TACTICA is committed to honoring God through intentional relationships that reflect compassion, mercy, and grace.</p>
            </div>

            <div className='card'>
                <img src={card4} alt="card4" />
                <h2>Accountability</h2>
                <p>TACTICA is committed to spiritual, financial & ministerial transparency in the stewardship of our resources.</p>
            </div>

        </div>
      </section>

      <section>
        <h1>TACTICA Ministries Videos</h1>
      </section>

    </div>
  )
}
export default Home