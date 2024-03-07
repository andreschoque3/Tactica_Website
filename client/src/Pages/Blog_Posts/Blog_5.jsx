import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Blog_post.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import BlogPic5_1 from './Images/blog-article-5-1.jpg'
import BlogPic5_2 from './Images/blog-article-5-2.jpg'

const Blog_5 = () => {

  // browser tab title
  useEffect(() => {
    document.title = 'Blog: Tactical Medicine & the Gospel for Paramedics';
  }, []);

  return (
    <div className='blog-article-5'>

      <Navbar/>

      <div className='blog-container'>
          <h1>Tactical Medicine & the Gospel for Paramedics</h1>
          <h5>TACTICA Ministries | Date Unknown</h5>
          <img src={BlogPic5_1} alt="Tactical Medicine & the Gospel for Paramedics" />

          <p>TACTICA Force Multiplier partners recently provided training at the university for new paramedics. A family of different churches were represented on the team. One of the 
            churches is a large network of about ten doctrinally sound and police welcoming churches - which greatly helps to us to be able to find a Truth-teaching church in the area 
            of where each paramedic or police officer lives.
          </p>

          <img src={BlogPic5_2} alt="Tactical Medicine & the Gospel for Paramedics" className='second-pic-blog' />

          <p>From our FM partner:</p>

          <p className='italics'>“Thank you for the support and the equipment you help us have access to. Today our goal was to train up new paramedics for our country that not only 
            make good decisions medically and tactically, but our longing is to have professionals who know Christ and never shrug Him off to the side in their life and their career.”
          </p>

          <Link className='back-btn' to="/Blog">Back</Link>

      </div>

      <Footer/>

    </div>
  )
}

export default Blog_5