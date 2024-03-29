import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import "./Home.css"
import card1 from "./Images/card-pic1.JPG"
import card2 from "./Images/card-pic2.jpg"
import card3 from "./Images/card-pic3.JPG"
import card4 from "./Images/card-pic4.jpg"
import vid1 from "./Images/tactica-into.mp4"
import vid2 from "./Images/tactica-ecuador-oct-2023.mp4"
import vid3 from "./Images/tactica-naples.mp4"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

function Home() {

  // browser tab title
  useEffect(() => {
    document.title = 'TACTICA Ministries';
  }, []);

  // video slider functionality
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div style={{ textAlign: "center" }}>
      <ul style={{ margin: "0px", padding: "0px", display: "inline-block", listStyle: "none" }}> 
        {React.Children.map(dots, dot => (
          <li style={{ display: "inline-block", margin: "0 15px" }}>{dot}</li>
        ))}
      </ul>
    </div>
    )
  };

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className='fas fa-arrow-right' alt="next"></i>
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className='fas fa-arrow-left' alt="back"></i>
      </div>
    );
  }


  return (
    <div className='home-pg'>

      <Navbar/>
      
      <section className='header-sect'>
        <div className='text box'>
          <h1 className='title-hm'>Training Heroes for Christ in the Public Safety <br /> Community</h1>
          <Link to="/Serve" className='btn1'>Get Started</Link>
          <Link to="/Give" className='btn2'>Give Today</Link>
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
              <Link to="/About" className='btn'>Learn More</Link>
            </div>

        </div>
      </section>

      <section className='tactica-vids'>

        <div className='title-vids'>
          <h1>TACTICA Ministries Media</h1>
        </div>

        <div className='video-carousel'>
          <Slider {...settings}>
            <div className='frame'>
              <video controls className='video-element' preload='auto'>
                <source src={vid1} type='video/mp4' />
              </video>
            </div>

            <div className='frame'>
              <video controls className='video-element' preload='auto'>
                <source src={vid2} type='video/mp4' />
              </video>
            </div>

            <div className='frame'>
              <video controls className='video-element' preload='auto'>
                <source src={vid3} type='video/mp4' />
              </video>
            </div>
          </Slider>
      </div>

      </section>

      <Footer />

    </div>
  )
}
export default Home