import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Blog_post.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Blog_4 = () => {

  // browser tab title
  useEffect(() => {
    document.title = 'Blog: All because he COLLIDED with Jesus';
  }, []);
  
  return (
    <div className='blog-post-4'>
      
      <Navbar/>

      <div className='blog-container'>
          <h1>All Because He COLLIDED WITH JESUS</h1>
          <h5>TACTICA Ministries | Date Unknown</h5>

          <p>I am Chief of the capital city police department. It is the largest department in the country.</p>

          <p>TACTICA’s influence on the Costa Rican police model has been unusual. Ryan and his family arrived at a key moment for the country. In Costa Rica, there are 14 different police forces 
            beyond the municipal police.
          </p>

          <p>Before TACTICA Ministries began to build into us, we did not know how to work as a team. We all saw each other as competition. Ryan taught us through the Bible the value of humility, 
            solidarity, teamwork, but above all – integrity.
          </p>

          <p>I myself have experienced the value of leading a police force while having God in your heart.</p>

          <p>My first contact with TACTICA was through a police course. At first, my only motivation for the contact and involvement was the training they were offering. But as the training progressed, 
            God began to work in me and deal with my heart’s posture. The dynamics of that TACTICA course forced us to work together, something that previously would never have been possible without 
            considerable conflict.
          </p>

          <p>The first day, besides the training manual, we also received a Bible. For some, it was their first time to ever have the Word of God in their hands. To our surprise, we began to discover 
            that everything just and right and pure, along with the values ​​that we defend as police officers, it all comes from the very heart of God. Even our authority as law enforcement officers 
            comes from the Lord.
          </p>

          <p>It was like discovering a treasure.</p>

          <p>Everything became clear to us - our greatest treasure was about to become the truth of God being revealed in our lives. We discovered that we were called to carry such responsibility with 
            integrity and absolute dedication. My heart must walk in accordance with this calling.
          </p>

          <p>​TACTICA not only brings a light of hope to the police officers in the operational and tactical field, but also extends that same hope to all of our families. We have seen more than just 
            officers' lives renewed - entire families have been saved and marriages restored. Many did not see a way out or a resolution to their problems - but they have now experienced miraculous 
            restoration because of their finding God.
          </p>

          <p>When I say that I myself have experienced God's love and salvation, I mean not only my soul, and not only in regard to my work, but more than anything - in my family. After finishing 
            the first course with TACTICA, I understood that God was seeking me and calling me. I came from a Christian home that had been deeply wounded and then destroyed by sin. I was distant 
            from GOD with a great deal of resentment in my heart. My heart and mind were full of doubts, reservations, and uncertainties.
          </p>

          <p>Like water and oil, I felt that God and the Bible were simply two things that you CANNOT combine with police life. I believed that loving God would make me look weak in front of my officers.</p>

          <p>For years I had believed that lie, determined to stay strong on my own accord.</p>

          <p>​I was consumed with my work, and I completely neglected my family. I was at the point of losing my wife and my relationship with my children. But God had mercy. He intervened by putting Ryan and 
            two of his Christian police instructors in my path.
          </p>

          <p>I remember that we all met in a restaurant near the airport in Costa Rica.</p>

          <p>We talked for a long time. Then... right there, in the middle of the restaurant, I got on my knees. I gave my life to the Lord. From that day, everything began to be different.</p>

          <p>In terms of my authority in front of my officers, God strengthened my leadership by transforming me into a man of integrity and humility.</p>

          <p>In conclusion, I have seen how God has allowed TACTICA to lay strong foundations in Costa Rica to the point that they are now able to multiply. TACTICA is even beginning to serve other nations 
            that also need the Gospel and tactical police support.
          </p>

          <p>From our country, we Costa Ricans who have been blessed by God through this ministry must now contribute and multiply by sharing what God has given to us.</p>

          <p>With appreciation,</p>

          <p>Chief D.</p>

          <Link className='back-btn' to="/Blog">Back</Link>

      </div>

      <Footer/>

    </div>
  )
}

export default Blog_4