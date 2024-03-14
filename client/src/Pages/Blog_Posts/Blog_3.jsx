import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Blog_post.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import BlogPic3 from './Images/blog-article-3.jpg'

const Blog_3 = () => {

  // browser tab title
  useEffect(() => {
    document.title = 'Blog: Summary of a recent Conversation: Burnout is real';
  }, []);

  return (
    <div className='blog-article-8'>
      
      <Navbar/>

      <div className='blog-container'>
        <h1>Summary of a recent conversation: Burnout is real</h1>
        <h5>TACTICA Ministries | Nov. 2023</h5>
        <img src={BlogPic3} alt="Summary of a recent conversation: burnout is real" className='smaller-img' />

        <p>Toxic but common lies-</p>

        <p>Big boys don’t cry.</p>

        <p>Real men are not emotional.</p>

        <p>If you “feel” the wrong thing, you are defective.</p>

        <p>Censor who you are before you go out there.</p>

        <p>UGH. Success and applause and achievements are not what make us worthy. They are not our identity.</p>

        <p>Learning to live not superglued to what others think and expect of us is ROUGH ROAD for a lot of people… and this particular career is a HOT SPOT for burnout and the victory-less life.</p>

        <p>We spend hours just being someone’s lightning rod. Our conversations involve a clear warning: if you don’t hit pause, you lose your life. Figuratively, if not literally.</p>

        <p>Breathe in life-giving things like a date with your wife and ice-cream with your little girl. Stop and talk to Jesus and take a motorcycle ride by yourself. Be fiercely protective 
          of your quiet time with just you and your Bible & your Father.
        </p>

        <p><strong>Stop. Refuel. Reboot.</strong> Stop for that oil change and gas, or you will find yourself in the hospital, at best. The abundant life exists but you are not tasting it right now, brother.</p>

        <Link className='back-btn' to="/Blog">Back</Link>

      </div>

      <Footer/>
      
    </div>
  )
}

export default Blog_3