import React, { useRef, useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./About.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import founderImg from '../../Images/ryan-gretchen-rought-2023-2.jpg'


const About = () => {

  // browser tab title
  useEffect(() => {
    document.title = 'About Us';
  }, []);

  // PDF download functionality
  const handleDownloadPDF = (pdfFileName, fileName) => {
    try {
      const pdfFileUrl = process.env.PUBLIC_URL + `/${pdfFileName}`;
  
      fetch(pdfFileUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          return response.blob();
        })
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = fileName;
  
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error(`Error fetching or processing the PDF file (${pdfFileName}):`, error);
          toast.error('Error fetching or processing the PDF file.')
          
        });
    } catch (error) {
      console.error(`Error constructing PDF file URL (${pdfFileName}):`, error);
      toast.error('Error constructing PDF file URL.')
    }
  };

  // Scroll effect
    const missStatRef = useRef(null);
  
    const handleScrollToMissStat = () => {
      missStatRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
  <div className='about-pg'>

    <Navbar/>

    <section className='header-section-ab'>
      <div className='text box'>
        <h1 className='title-hm-ab'>TACTICA's Mission & Vision</h1>
        <a className='btn-ab1' onClick={handleScrollToMissStat}>Learn More</a>
      </div>
    </section>

    <section className='miss-stat' ref={missStatRef}>
      <h1 className='miss-stat-h1'>Mission Statement</h1>
      <p>This mission of TACTICA is to fulfill the Great Commission by investing into the lives of Central American authorities and their families, through high quality police training, evangelism, and discipleship.</p>
      <hr />
    </section>

    <section className='tact-founders'>
      <h1 className='tact-found-h1'>TACTICA Founders</h1>

      <div className='img-box'>
        <img src={founderImg} alt="founder-img" />
      </div>

      <div className='bio-box'>
        <p>Ryan and Gretchen Rought are Michigan natives and have been married over 26 years. Ryan came to know Christ and asked Him to be his Lord and Savior at the age of six. He served 11 years in the US Army, as well as 12 years as a Law Enforcement officer with Kalamazoo Public Safety. Ryan committed his life to full-time ministry in 2004. <br/><br/>
        Gretchen came to a saving knowledge of Jesus Christ at the age of 21. After studying Education, German and Spanish in college, she taught middle school level Spanish for 3 years. God has blessed them with two beautiful daughters and two godly sons-in-law. <br/><br/>
        Ryan and Gretchen work full-time in the ministry together. Together they share a passion for police leadership training, family and marriage biblical counseling, discipleship and mentoring, and the international community of first responders.</p>
        <h1>Ryan & Gretchen Rought</h1>
      </div>

    </section>

    <section className='vision'>
      <h1 className='vision-h1'>Our Vision</h1>

      <div className='vision-cards'>
        <div className='vs-card'>
          <i className='fas fa-book-bible'></i>
          <h2>Gospel</h2>
          <p>Public safety professionals becoming sold-out disciples of Christ.</p>
        </div>

        <div className='vs-card'>
          <i className='fas fa-users'></i>
          <h2>Discipleship</h2>
          <p>These disciples becoming disciple makers.</p>
        </div>

        <div className='vs-card'>
          <i className='fas fa-church'></i>
          <h2>Local Church</h2>
          <p>These families completely integrated into a local church body.</p>
        </div>

        <div className='vs-card'>
          <i className='fas fa-earth-americas'></i>
          <h2>Global Impact</h2>
          <p>These families actively participating in church leadership and church planting efforts.</p>
        </div>
      </div>
    </section>

    <section className='bel-cel'>
      <h1 className='bel-cel-h1'>What We Believe & Celebrate</h1>
      <a className='btn-ab2' onClick={() => handleDownloadPDF('TACTICA Celebrate English.pdf', 'TACTICA Celebrate English.pdf')}>Believe</a>
      <a className='btn-ab3'onClick={() => handleDownloadPDF('TACTICA Statement of Beliefs English.pdf', 'TACTICA Statement of Beliefs English.pdf')}>Celebrate</a>
    </section>

    <Footer/>

  </div>
  )
}
export default About
