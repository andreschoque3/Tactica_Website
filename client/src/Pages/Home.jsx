import React, { useState} from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import "./Styles/Home.css"
import card1 from "./Styles/Images/card-pic1.JPG"
import card2 from "./Styles/Images/card-pic2.jpg"
import card3 from "./Styles/Images/card-pic3.JPG"
import card4 from "./Styles/Images/card-pic4.jpg"
import videoImg1 from "./Styles/Images/vid-pic1.jpg"
import videoImg2 from "./Styles/Images/vid-pic2.jpg"
import videoImg3 from "./Styles/Images/vid-pic3.jpg"

const Home = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  return (
    <div className='home-pg'>
      
      <Navbar/>
      
      <section className='header-sect'>
        <div className='text box'>
          <h1 className='title-hm'>Training Heroes for Christ in the Public Safety Community</h1>
          <a className='btn1'>Get Started</a>
          <a className='btn2'>Give Today</a>
        </div>
      </section>

      <section className='core-vals'>
        <h1 className='core-vals-h1'>Our Core Values</h1>
        
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

            <div className='btn-cls'>
              <a className='btn'>Learn More</a>
            </div>

        </div>
      </section>

      <section className='tactica-vids'>

      <div className='slider'>
        <div className='slide'  style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
            <div className='picture'>
              <img src={videoImg1} alt="pciture1" />
            </div>

            <div className='picture'>
              <img src={videoImg2} alt="pciture1"/>
            </div>

            <div className='picture'>
              <img src={videoImg3} alt="pciture1"/>
            </div>
         </div>
      </div>

        <div className='playbutton'>
          <button><i className='far fa-circle-play'></i></button>
        </div>

        <div className='title-vids'>
          <h1>Tactica Ministries Videos</h1>
        </div>

        <div className='arrows'>
          <button id="prev" onClick={prevSlide}><i className="fas fa-arrow-left"></i></button>
          <button id="next" onClick={nextSlide}><i className="fas fa-arrow-right"></i></button>
        </div>

        <div className='dots'>
          <ul className='dot-list'>
          <li className={currentSlide === 0 ? 'active' : ''} onClick={() => goToSlide(0)}></li>
          <li className={currentSlide === 1 ? 'active' : ''} onClick={() => goToSlide(1)}></li>
          <li className={currentSlide === 2 ? 'active' : ''} onClick={() => goToSlide(2)}></li>
          </ul>
        </div>
      </section>

      <Footer/>

    </div>
  )
}
export default Home