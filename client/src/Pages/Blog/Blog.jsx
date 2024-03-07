import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import artPic1 from './Images/article-pic1.png'
import artPic2 from './Images/article-pic2.png'
import artPic3 from './Images/article-pic3.png'
import artPic4 from './Images/article-pic4.png'
import artPic5 from './Images/article-pic5.jpg'
import artPic6 from './Images/article-pic6.png'
import artPic7 from './Images/article-pic7.jpg'
import artPic8 from './Images/article-pic8.jpg'

const Blog = () => {

  // browser tab title
  useEffect(() => {
    document.title = 'Blog Posts';
  }, []);

  // Scroll effect
  const missStatRef = useRef(null);
  
  const handleScrollToMissStat = () => {
    missStatRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Hide and show extra blog entries
  const [showExtraBlogs, setShowExtraBlogs] = useState(false);

  const handleClick = () => {
    setShowExtraBlogs(true); 
  };

  const handleHideClick = () => {
    setShowExtraBlogs(false);
  };

  return (
  <div className='blog=pg'>

    <Navbar/>

    <section className='header-section-blg'>
      <div className='text-box-blg'>
        <h1 className='title-blg'>TACTICA Testimonies</h1>
        <a className='btn-blg' onClick={handleScrollToMissStat}>Read More</a>
      </div>
    </section>

    <section className='newsletter-sect' ref={missStatRef}>
      <h1>Sign Up to Receive TACTICA News</h1>
      <p>You will receive notifications when we post new content</p>

      <div className='form-box'>
        <input type="text" name='EmailAddress' placeholder='Enter your email' />
        <button type='submit'>Submit</button>
      </div>
    </section>

    <section className='blog-posts'>

        <div className='blog-post'>
          <div className='blog' id='1'>
            <img src={artPic1} alt="Baptist church honors law enforcement" />
            <h3>Daily News</h3>
            <h2>Baptist Church Honors Law Enforcement</h2>
            <p>Portage - More than 40 men and women who help make society a safer place were the focus of attention Sunday at Berean...</p>
            <Link to="/Blog-1">Read More</Link>
          </div>

          <div className='blog' id='2'>
            <img src={artPic2} alt="GOE Commanders trained in swatt tactics" />
            <h3>Daily News</h3>
            <h2>GOE Commanders trained in SWATT Tactics</h2>
            <p>Guano - The afternoon of this Friday, September 18, at the Special Operations Group of the Special Operations Group...</p>
            <Link to="/Blog-2">Read More</Link>
          </div>

          <div className='blog' id='3'>
            <img src={artPic3} alt="Tactica mens gathering november 2023" />
            <h3>Daily News</h3>
            <h2>TACTICA Men's Gathering: Nov 2023</h2>
            <p>The TACTICA Ministry Center was recently the site for a men's gathering. The building was full of life and food and relationships...</p>
            <Link to="/Blog-3">Read More</Link>
          </div>

          <div className='blog' id='4'>
            <img src={artPic4} alt="all because he collided with jesus" />
            <h3>Testimonies</h3>
            <h2>All because He COLLIDED with JESUS</h2>
            <p>TACTICA’s influence on the Costa Rican police model has been unusual. Ryan and his family arrived at a key moment for the country...</p>
            <Link to="/Blog-4">Read More</Link>
          </div>

          <div className='blog' id='5'>
            <img src={artPic5} alt="tactical medicine & the Gospel for Paramedics" />
            <h3>Testimonies</h3>
            <h2>Tactical Medincine & the Gospel for Paramedics</h2>
            <p>TACTICA Force Multiplier partners recently provided training at the university for new paramedics...</p>
            <Link to="/Blog-5">Read More</Link>
          </div>

          <div className='blog' id='6'>
            <img src={artPic6} alt="a glance into the work of the ecuadorian special operations group" />
            <h3>Ministry Work</h3>
            <h2>A Glance into the Work of the Ecuadorian Special Operations Group</h2>
            <p>TACTICA has provided tactical, medical, and leadership training on numerous occasions to the Ecuadorian GOE team...</p>
            <Link to="/Blog-6">Read More</Link>
          </div>

          {showExtraBlogs && (
            <>
              <div className='blog' id='7'>
                <img src={artPic7} alt="Burdened for those Silently Suffering in the Public Safety Community" />
                <h3>Daily Prayer</h3>
                <h2>Burdened for those Silently Suffering...</h2>
                <p>Headlines across the country remind us that the weight, stress, and trauma of the public safety career are aspects we absolutely cannot overlook...</p>
                <Link to="/Blog-7">Read More</Link>
              </div>

              <div className='blog' id='8'>
                <img src={artPic8} alt="Summary of a recent conversation Burnout is real" />
                <h3>Reflections</h3>
                <h2>Summary of a recent conversation: Burnout...</h2>
                <p>Toxic but common lies- Big boys don’t cry. Real men are not emotional. If you “feel” the wrong thing, you are defective. Censor who you are....</p>
                <Link to="/Blog-8">Read More</Link>
              </div>
            </>
          )}

        </div>

        {!showExtraBlogs ? (
          <div className='expand-btn'>
            <a onClick={handleClick}>Click to Expand</a>
          </div>

        ) : (
          <div className='hide-btn'>
            <a onClick={handleHideClick}>Click to Hide</a>
          </div>
        )}

    </section>

    <Footer/>
    
  </div>

  )
}

export default Blog