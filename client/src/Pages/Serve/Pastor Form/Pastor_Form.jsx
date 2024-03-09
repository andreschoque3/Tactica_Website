import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../Serve/Form.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'

function Pastor_Form() {

  // browser tab title
  useEffect(() => {
    document.title = "Applicant's Pastor Form";
  }, []);

  // phone regex
  function handlePhoneInput(event) {
    const enteredValue = event.target.value;
    event.target.value = enteredValue.replace(/[^0-9()-]/g, ''); // Remove any characters other than numbers, dashes, and parentheses
  }

  //max text of 300 words
  const [maturity, setMaturity] = useState('');
  const [locallevel, setLocalLevel] = useState('');
  const [missionservice, setMissionService] = useState('');
  const [moreinfo, setMoreInfo] = useState('');

  const handleTextareaChange = (event, setter) => {
    const text = event.target.value;
    // Split text by space to count words
    const words = text.trim().split(/\s+/);
    if (words.length <= 300) {
      setter(text);
    }
  };

  return (
    <div>
      <Navbar/>
        <div className='form-container'>
            <h1>Applicant's Pastor Form</h1>
            <hr style={{width: '35%'}} />

            <form action="ps">

              <div className='details-block'>
                <h2>Personal Details</h2>
                
                <div className='forms'>

                    <div className='field'>
                        <label htmlFor="">Name</label>
                        <input type="text" name="" id="" placeholder="Enter pastor's name" required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">Church Name</label>
                        <input type="text" name="" id="" placeholder="Enter church name" required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">Date</label>
                        <input type="date" name="" id="" placeholder="mm/dd/yyyy" required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">Church Phone Number</label>
                        <input type="tel" name="" id="" placeholder="ex: 999-999-9999" onInput={handlePhoneInput} required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" placeholder="Enter pastor's email address" required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">Country</label>
                        <input type="text" name="" id="" placeholder="Enter country" required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">City</label>
                        <input type="text" name="" id="" placeholder="Enter city" required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">State</label>
                        <input type="text" name="" id="" placeholder="Enter state" required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">Zip Code</label>
                        <input type="text" name="" id="" placeholder="Enter zip code" required />
                    </div>

                </div>

              </div>

              <div className='details-block'>
                <h2>Questions</h2>

                <div className='forms'>

                    <div className='field'>
                        <label htmlFor="">Name of individual applying to serve under TACTICA</label>
                        <span>Who requested that you fill out this form for him or her?</span>
                        <input type="text" placeholder='Enter individual' />
                    </div>

                    <div className='text'>
                        <p style={{width: '100%'}}>Please answer the following questions based on your knowledge of the applicant so that he or she may be considered for participation on a TACTICA team.</p>
                    </div>

                    <div className='paragraph'>
                        <label htmlFor="" style={{display: 'inline-block', width: '94%'}}>Please describe the applicant's spiritual and emotional maturity. Do you consider him or her prepared and with a maturity 
                        level that will allow him or her to handle a short-term mission trip into a third-world country?</label>
                        <textarea name="" id="" cols="30" rows="5" style={{width: '90%'}} value={maturity} onChange={(e) => handleTextareaChange(e, setMaturity)} placeholder='Maximum of 300 words'></textarea>
                    </div>

                    <div className='paragraph'>
                        <label htmlFor="">Please describe the applicant's participation and involvement at the local church level.</label>
                        <textarea name="" id="" cols="54" rows="5" value={locallevel} onChange={(e) => handleTextareaChange(e, setLocalLevel)} placeholder='Maximum of 300 words'></textarea>
                    </div>

                    <div className='paragraph'>
                        <label htmlFor="">Is there any reason you know of why this applicant may not be fit for mission service...whether that be spiritually, physically, financially, mentally, or emotionally?</label>
                        <textarea name="" id="" cols="30" rows="5" style={{width: '90%'}} value={missionservice} onChange={(e) => handleTextareaChange(e, setMissionService)} placeholder='Maximum of 300 words'></textarea>
                    </div>

                    <div className='paragraph'>
                        <label htmlFor="">Is there any other information you would like to share with us?</label>
                        <textarea name="" id="" cols="72" rows="5" value={moreinfo} onChange={(e) => handleTextareaChange(e, moreinfo)} placeholder='Maximum of 300 words'></textarea>
                    </div>

                </div>
              </div>

              <button type='submit' className='form-btn-1'>Save</button>
              <Link className='form-btn-3' to='/Spouse-Form'>Back</Link>
              <button className='form-btn-2'>PDF <i className='fas fa-file-arrow-down'></i></button>

            </form>
        </div>
      <Footer/>
    </div>
  )
}

export default Pastor_Form