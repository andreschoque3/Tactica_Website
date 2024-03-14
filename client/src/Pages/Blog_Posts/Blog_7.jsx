import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Blog_post.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import BlogPic7 from './Images/blog-article-6.png'

const Blog_7 = () => {

  // browser tab title
  useEffect(() => {
    document.title = 'Blog: GOE Commanders trained in SWATT Tactics';
  }, []);

  return (
    <div className='blog-post-2'>
        
        <Navbar/>
        
        <div className='blog-container'>
            <h1>GOE Commandos Trained In SWAT Tactics With US Instructors From TACTICA Ministries</h1>
            <h5>TACTICA Ministries | Oct.  2015</h5>
            <img src={BlogPic7} alt="GOE Commandos Trained In SWAT Tactics With US Instructors From TACTICA Ministries" />

            <p className='bold'>Guano.- The afternoon of this Friday, September 18, at the Special Operations Group of the Special Operations Group (GOE), in Guano, province of Chimborazo, 
                the second Swat Techniques and Tactics Course was held, offered by TACTICA Ministries from the United States.
            </p>

            <p>The members of the eighteenth elite unit promotion, forty in all, participated in the training given that had an intensive week of duration. Among the group of students, 14 
                are from Panama and Mexico.
            </p>

            <p>Everyone, in groups of eight or 10, form a safety circle with their guns and helmets. They advance. The last ones make a quick turn before entering the home. When the door 
                opens, smoke comes out. They do not hesitate and they enter. You hear shots. In the white smoke you can distiguish the shadow of two and three men; the feet of one of them 
                do not touch the ground. He is wounded and his partners rescue him. This technique, known as Officer Down Rescue, is part of the new tactics learned by the commandos.
            </p>

            <p>Ryan Rought, director of TACTICA Ministries, said that SWAT techniques and tactics include home entries and the rescue of hostages, comrades or injured citizens, within the 
                scene. Also the protection of victims in an ambush, among others, that help to optimize the tactical work of the entry team and rescue units. Everything, within the 
                framework of respect for Human Rights and the protection of human lives.
            </p>

            <p>Swat techniques also include the use of Simmunition for shots fired. That is, the instructors use real weapons whose projectiles are identical to real bullets, however they 
                are filled with paint. The impact they generate is equal to a real ammunition, but it does not hurt. It only leaves a mark to which, among laughter, call it ‘command tattoo’. 
                Thus, Rought explained, the policemen take greater precaution in a scene and avoid being an easy target.
            </p>

            <p>Juvencio Allard, a Panama Border Police, said that the GOE is one of the best international groups. Therefore, having the opportunity to share not only this course, but also 
                the instruction for more than four months, seems very important. For Allard, the techniques learned in Ecuador will help reinforce the work in his native country, since it 
                will combine Panamanian knowledge with Ecuadorians.
            </p>

            <p> For his part, David Perez, Federal Police of Mexico, will apply the new raid tactics in his country when he returns. Perez said that in his country did not have much knowledge 
                on the subject of incursions, so when he returns, he will train his colleagues on the subject. Juan Pablo Jiménez, of the GOE, said that the course is very good for the practical 
                and for the techniques for the rescue of wounded comrades in battle.
            </p>


            <Link className='back-btn' to="/Blog">Back</Link>

        </div>

        <Footer/>

    </div>
  )
}
export default Blog_7
