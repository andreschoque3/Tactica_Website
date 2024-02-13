import React from 'react'
import { Link } from 'react-router-dom'
import './Blog_post.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import BlogPic1 from '../../Images/blog-article-1.png'

const Blog_1 = () => {
  return (
    <div className='blog-post-1'>

      <Navbar/>

      <div className='blog-container'>
        <h1>Police Force, Faith Intertwine As Portages Berean Baptist Church Honors Law Enforcement</h1>
        <h5>TACTICA Ministries | Oct. 4, 2017</h5>
        <img src={BlogPic1} alt="Police Force Faith Intertwine as Portage Bearean Baptist Church Honors Law Enforcement"></img>

        <p className='bold'>PORTAGE — More than 40 men and women who help make society a safer place were the focus of attention Sunday at Berean Baptist Church.</p>

        <p>Thirteen law-enforcement departments, including seven members from Costa Rica’s National Police Force, were represented during the 
          morning worship overseen by Pastor Steve Nichols. Afterward, the officers were the guests of honor at a churchwide luncheon.
        </p>

        <p>Nichols said every Sunday service is special, but this one was unique in its own way.</p>

        <p className='italics'>“Police officers, because of their line of work and the potential dangers they may face every day, need every source of protection 
          they can get,” Nichols said. “Those here today came on their own, they came because of their faith and belief in Christ.”
        </p>

        <p>John A. Lacko | Special to Kalamazoo GazetteRyan Rought, a SWAT police officer from Montague, spoke during the Berean Baptist Church’s
          “International Law Enforcement and Appreciation Service” Sunday morning to honor local and Costa Rican law enforcement guests.
        </p>

        <p>The focus of Sunday’s service and recognition was the result of the efforts of former Kalamazoo Department of Public Safety Sgt. Ryan Rought.</p>

        <p>Since December 2006, the 36-year-old Rought and his wife and two children have lived in Costa Rica after becoming missionaries through the 
          Association of Baptists for World Evangelism. The Harrisburg, Pa.,-based independent mission agency draws people from all walks of life, and 
          Rought was able to parlay his religious convictions with his military and law-enforcement experience to earn a respected place in Costa Rica’s 
          9,000-member National Police Force — and still effectively spread the gospel.
        </p>

        <p>For a one-week period three times a year, Rought conducts training exercises in special weapons and tactics for a group of about 80 members of 
          Costa Rica’s National Police Force.
        </p>

        <p>He said he wanted to do something different for this month’s training by bringing seven of the members to Kalamazoo.</p>

        <p>The seven joined tactical officers from the Kalamazoo Department of Public Safety for a weeklong SWAT training session that concluded Friday 
          on the 8,000-acre wooded property at Fort Custer Training Center in Augusta.
        </p>

        <p>The seven Costa Rica officers — five from its SWAT team, and one each from its criminal investigations and airport authority units — were 
          chosen for the one-week training in the United States not only for their outstanding work in the force but also because of their strong 
          religious beliefs.
        </p>

        <p>Nichols said he has enjoyed spending time with the seven and is impressed with their religious devotion.</p>

        <p className='italics'>“I look at these seven commando guys esteemed in their (occupational) position who look death in the face every day and it’s clear that 
          Christianity is not for sissies,” he said.
        </p>

        <p>Rought said the law-enforcement personnel who attended are strong believers in Christ that he has worked with or befriended at some point 
          in his career.
        </p>

        <p className='italics'>“I made calls when we got back to Michigan a few weeks ago to let these Christian brothers and sisters know what the church was offering 
          to do for us,” he said. “I’m not surprised so many showed up … It’s great, and this was a first-class service here today.”
        </p>

        <Link className='back-btn' to="/Blog">Back</Link>

      </div>

      <Footer/>
      
    </div>
  )
}

export default Blog_1