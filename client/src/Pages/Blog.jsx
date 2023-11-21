import React from 'react'
import './Styles/Blog.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

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
            <img src="" alt="" />
            <h3>hi</h3>
            <h2>hi</h2>
            <p>hi</p>
            <a>Read More</a>
          </div>

          <div className='blog'>
            <img src="" alt="" />
            <h3>hi</h3>
            <h2>hi</h2>
            <p>hi</p>
            <a>Read More</a>
          </div>

          <div className='blog'>
            <img src="" alt="" />
            <h3>hi</h3>
            <h2>hi</h2>
            <p>hi</p>
            <a>Read More</a>
          </div>
        </div>

        <div className='post-2'>
          <div className='blog'>
            <img src="" alt="" />
            <h3>hi2</h3>
            <h2>hi2</h2>
            <p>hi2</p>
            <a>Read More</a>
          </div>

          <div className='blog'>
            <img src="" alt="" />
            <h3>hi2</h3>
            <h2>hi2</h2>
            <p>hi2</p>
            <a>Read More</a>
          </div>

          <div className='blog'>
            <img src="" alt="" />
            <h3>hi2</h3>
            <h2>hi2</h2>
            <p>hi2</p>
            <a>Read More</a>
          </div>
        </div>
    </section>

    <Footer/>
    
  </div>
  )
}
export default Blog