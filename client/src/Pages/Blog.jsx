import React from 'react'
import './Styles/Blog.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import artPic1 from '../Images/article-pic1.png'
import artPic2 from '../Images/article-pic2.png'
import artPic3 from '../Images/article-pic3.png'
import artPic4 from '../Images/article-pic4.png'
import artPic5 from '../Images/article-pic5.png'
import artPic6 from '../Images/article-pic6.png'

const Blog = () => {
  return (
  <div className='blog=pg'>

    <Navbar/>

    <section className='header-section-blg'>
      <div className='text-box'>
        <h1 className='title-blg'>TACTICA Testimonies</h1>
        <a className='btn-blg'>Read More</a>
      </div>
    </section>

    <section className='newsletter-sect'>
      <h1>Sign Up to Receive TACTICA News</h1>
      <p>You will receive notifications when we post new content</p>

      <div className='form-box'>
        <input type="text" name='EmailAddress' placeholder='Enter your email' />
        <button type='submit'>Submit</button>
      </div>
    </section>

    <section className='blog-posts'>

        <div className='post-1'>
          <div className='blog'>
            <img src={artPic1} alt="blog1" />
            <h3>Daily News</h3>
            <h2>Baptist Church Honors Law Enforcement</h2>
            <p>Portage - More than 40 men and women who help make society a safer place were the focus of attention Sunday at Berean...</p>
            <a className='rd-btn'>Read More</a>
          </div>

          <div className='blog'>
            <img src={artPic2} alt="Blog2" />
            <h3>Daily News</h3>
            <h2>GOE Commanders trained in SWATT Tactics</h2>
            <p>Guano - The afternoon of this Friday, September 18, at the Special Operations Group of the Special Operations Group...</p>
            <a>Read More</a>
          </div>

          <div className='blog'>
            <img src={artPic3} alt="blog3" />
            <h3>Daily News</h3>
            <h2>lorem ipsum dolor sit amet consectur abdui</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt kid adi mundi</p>
            <a>Read More</a>
          </div>
        </div>

        <div className='post-2'>
          <div className='blog'>
            <img src={artPic4} alt="blog4" />
            <h3>Ministry</h3>
            <h2>lorem ipsum dolor sit amet consectur abdui kabib</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt kid adi mundi</p>
            <a>Read More</a>
          </div>

          <div className='blog'>
            <img src={artPic5} alt="blog5" />
            <h3>Devotions</h3>
            <h2>lorem ipsum dolor sit amet consectur abdui kabib</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt kid adi mundi</p>
            <a>Read More</a>
          </div>

          <div className='blog'>
            <img src={artPic6} alt="blog6" />
            <h3>Daily Prayer</h3>
            <h2>lorem ipsum dolor sit amet consectur abdui kabib</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt kid adi mundi</p>
            <a>Read More</a>
          </div>
        </div>
    </section>

    <Footer/>
    
  </div>
  )
}
export default Blog