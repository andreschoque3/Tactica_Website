import React from 'react'
import { Link } from 'react-router-dom'
import './Blog_post.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import BlogPic3_1 from '../../Images/blog-article-3-1.png'
import BlogPic3_2 from '../../Images/blog-article-3-2.png'

const Blog_3 = () => {
  return (
    <div className='Blog-post-3'>
        <Navbar/>

        <div className='blog-container'>
            <h1>TACTICA Men’s Gathering: November 2023</h1>
            <h5>TACTICA Ministries | Nov. 25, 2023</h5>
            <img src={BlogPic3_2} alt="TACTICA Men’s Gathering: November 2023" />

            <p>The TACTICA Ministry Center was recently the site for a men’s gathering. The building was full of life and food and relationships. The chief of police shared his life story 
                and then taught on the biblical calling on our lives to be men of God.
            </p>

            <img src={BlogPic3_1} alt="TACTICA Men’s Gathering: November 2023" className='second-pic-blog'/>

            <p>Gretchen’s Pork BBQ with slaw was a hit. In order to serve a more culturally appropriate meal, she made it a custom fit semi-quasi Costa Rican meal by adding beans and rice 
                for the win. Plenty of games, friendly and hilarious competition, cupcakes & coffee. At TACTICA we make relationships a priority in order to ensure spiritual growth and 
                long-lasting impact.
            </p>

            <Link className='back-btn' to="/Blog">Back</Link>

        </div>

        <Footer/>
    </div>
  )
}

export default Blog_3