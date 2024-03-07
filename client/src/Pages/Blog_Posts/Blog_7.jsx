import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Blog_post.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import BlogPic7 from './Images/blog-article-7.jpg'

function Blog_7() {

  // click functionality for link
  const handleLink = () => {
    const abcUrl = 'https://abc7.com/la-county-sheriffs-department-lasd-deputies-suicide/14024417/?fbclid=IwAR0pEjDytV_LdhX-BMW6O3LI1QglStTduriJC3EI8GXUuc7FEWpLF_2-dQY#loqhz5rie444tsuwdz'

    window.open(abcUrl, '_blank')
  }

  // browser tab title
  useEffect(() => {
    document.title = 'Blog: Burdened for those Silently Suffering in the Public Safety Community';
  }, []);

  return (
    <div className='blog-article-7'>

      <Navbar/>

        <div className='blog-container'>
          <h1>Burdened for those Silently Suffering in the Public Safety Community</h1>
          <h5>TACTICA Ministries | Date Unknown</h5>

          <p>Headlines across the country remind us that the weight, stress, and trauma of the public safety career are aspects we absolutely cannot overlook.</p>

          <p> <a href="" onClick={handleLink}>Link to ABC 7's latest news on LASD officers</a>.</p>

          <p>TACTICA Ministries has written a devotional for the public safety community, “My Tactical Time with God.” The book is used regularly in small group 
            setting during our tactical & evangelistic outreaches. It is a very effective tool which brings many officers into God’s Word through its practical 
            and real-world life applications. Here is an excerpt from a reflection about how God is undeterred by our failures.
          </p>

          <img src={BlogPic7} alt="My Tactical Time with God" className='second-pic-blog' />

          <p className='bold'>God is Undeterred by Your Failures</p>

          <p><strong>1 Samuel 16:7</strong> But the LORD said to Samuel, “Do not look at his appearance or his stature, because I have rejected him. Man does not see what the LORD 
            sees, for man sees what is visible, but the LORD sees the heart.” (HCSB)
          </p>

          <p>Appearances can be deceiving. The outward appearance doesn’t reveal what people are really like. Physical looks don’t show us a person’s value or character or integrity 
            or faithfulness to God. Outward qualities are, by definition, superficial. Moral and spiritual considerations are far more important to God.
          </p>

          <p>To everyone who saw him, Judas Iscariot looked like a faithful disciple, but his appearance was deceiving. The other disciples had no idea of what was going on inside 
            Judas. Jesus was the only one who knew Judas’s heart: “Have I not chosen you, the Twelve? Yet one of you is a devil!” (John 6:70). God’s perspective is higher, deeper, 
            and wiser than ours.
          </p>

          <p>The fact that God chooses to use broken people to help accomplish His perfect will is an illustration of grace rather than ignorance. When Jesus called the disciples, 
            He chose to lead a team of broken leaders. There is no such thing as a leader who will never fail. In their own personal failures, the disciples learned that all people 
            are broken but for the spiritual transformation that Jesus brings.
          </p>

          <p>God has opened up His salvation to anyone. Salvation is available to you regardless of your bank account, the kind of car you drive, the degree you have, regardless 
            of how politically correct or incorrect you are, and regardless of what your parents told you. Regardless of your failures, your mess, and your embarrassing history... 
            God loves you.
          </p>

          <p>God loves. God loves deep. God loves big. And God loves you despite you.</p>

          <p>Despite all the crud you bring to the table, God loves. John 3:16 gives us that promise. God loves you, undeterred by your failures and weaknesses. God wants you to 
            know right now that you are loved and valued by Him. He so deeply wants you to know that He is not distant from you; but rather, God is working in your midst to lead 
            you to abundant joy, peace, and life.
          </p>

          <p>You are not worthless. God knocks on the door of your heart, calling you to come to Christ. Jesus said, “Whoever comes to me I will never drive away” (John 6:37b, ESV).</p>

          <p><strong>John 3:16</strong> For God loved the world in this way: He gave His One and Only Son, so that everyone who believes in Him will not perish but have eternal life. (CSB)</p>

          <Link className='back-btn' to="/Blog">Back</Link>

        </div>

      <Footer/>
    </div>
  )
}

export default Blog_7