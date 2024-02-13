import React from 'react'
import { Link } from 'react-router-dom'
import './Blog_post.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import BlogPic6 from '../../Images/blog-article-6.png'

function Blog_6() {

  // click functionality for link
  const handleLink = () => {
    const facebookUrl = 'https://fb.watch/oH5zfS8fsI/'

    window.open(facebookUrl, '_blank')
  }

  return (
    <div className='blog-article-6'>
        
        <Navbar/>
        
          <div className='blog-container'>
            <h1>A Glance into the Work of the Ecuadorian Special Operations Group</h1>
            <h5>TACTICA Ministries | Date Unknown</h5>
            <img src={BlogPic6} alt="A Glance into the Work of the Ecuadorian Special Operations Group" className='smaller-img' />

            <p>TACTICA has provided tactical, medical, and leadership training on numerous occasions to the Ecuadorian GOE team. Similar to a SWAT team, this unit handles a multitude 
              of complex criminal issues that threaten the country. Here is a glance into this remarkable specialty unit with whom TACTICA has celebrated over 8 years of relationship.
            </p>

            <p className='italics'>“¡No te pierdas "Al Día con Vigía"; y descubre el incansable trabajo de la Policía Nacional! Acompáñanos en este recorrido informativo que celebra el compromiso y la 
              labor ejemplar de quienes nos protegen cada día!”
            </p>

            <p className='italics'>"Don't miss "Al Día con Vigía" and discover the tireless work of the National Police! Join us on this informative tour that celebrates the commitment and exemplary work 
              of those who protect us every day!"
            </p>

            <p>Watch the video <a href='' onClick={handleLink}>here</a>.</p>

            <Link className='back-btn' to="/Blog">Back</Link>

          </div>

        <Footer/>

    </div>
  )
}

export default Blog_6