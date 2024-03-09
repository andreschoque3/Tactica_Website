import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../Serve/Form.css'
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

function Spouse_Form() {

  // browser tab title
  useEffect(() => {
    document.title = "Applicant's Spouse Form";
  }, []);

  // phone regex
  function handlePhoneInput(event) {
    const enteredValue = event.target.value;
    event.target.value = enteredValue.replace(/[^0-9()-]/g, ''); // Remove any characters other than numbers, dashes, and parentheses
  }

  //max text of 300 words
  const [godsleadership, setGodsLeadership] = useState('');
  const [spouserole, setSpouseRole] = useState('');
  const [spousespiritualgifts, setSpouseSpiritualGifts] = useState('');
  const [additionalinfo, setAdditionalInfo] = useState('');

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
            <h1>Applicant's Spouse Form</h1>
            <hr  style={{width: '36%'}}/>

            <form action="sp">

              <div className='details-block'>
                <h2>Personal Details</h2>

                <div className='forms'>

                    <div className='field'>
                        <label htmlFor="">Full Name</label>
                        <input type="text" name="" id="" placeholder='Enter full name' required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">Spouse Applying for TACTICA</label>
                        <input type="text" name="" id="" placeholder='Enter spouse applying' required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">Date</label>
                        <input type="date" name="" id="" placeholder='mm/dd/yyyy' required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">Phone Number</label>
                        <input type="tel" name="" id="" placeholder='ex: 999-999-9999' onInput={handlePhoneInput} required />
                    </div>
                    
                    <div className='field'>
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" placeholder='Enter email' required />
                    </div>

                    <div className='field'>

                    </div>

                </div>
              </div>

              <div className='details-block'>
                <h2>Faith Questions</h2>

                <div className='forms'>
                    
                    <div className='paragraph'>
                      <label htmlFor="">Describe God's leading of your spouse to this short-term mission's opportunity with TACTICA.</label>
                      <textarea name="" id="" cols="45" rows="5" value={godsleadership} onChange={(e) => handleTextareaChange(e, setGodsLeadership)} placeholder='Maximum of 300 words' required></textarea>
                    </div>

                    <div className='paragraph'>
                      <label htmlFor="">Describe your understanding of your spouse's role on the team.</label>
                      <textarea name="" id="" cols="67" rows="5" value={spouserole} onChange={(e) => handleTextareaChange(e, setSpouseRole)} placeholder='Maximum of 300 words' required></textarea>
                    </div>

                    <div className='paragraph'>
                      <label htmlFor="">What do you believe are your spouse's dominant spiritual gifts?</label>
                      <textarea name="" id="" cols="67" rows="5" value={spousespiritualgifts} onChange={(e) => handleTextareaChange(e, setSpouseSpiritualGifts)} placeholder='Maximum of 300 words' required></textarea>
                    </div>

                    <div className='text-radio'>
                        <p>Please select which of the following most describe you:</p>
                        <ul>
                            <li>
                              <input type="checkbox" name="" id="" />
                              <label>I enjoy public speaking, I love getting things done, I don't mind taking charge, and other would say that I am driven.</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="" />
                              <label>Others seem to think I am entertaining. I like to cheer others up, I tend to think positively, and I prefer to be active.</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="" />
                              <label>I prefer to serve quietly behind the scenes. Others would say that I am sensitive to people's needs and that I am a good listener. I don't mind not getting the credit.</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="" />
                              <label>I enjoy organizing and administrative tasks; I thrive in order. I want things to be completed well and on time.</label>
                            </li>
                        </ul>
                      </div>

                </div>

              </div>

              <div className='details-block'>
                <h2>Additional Info</h2>

                <div className='forms'>

                    <div className='paragraph'>
                        <label htmlFor="">Is there any other information you would like to share with us?</label>
                        <textarea name="" id="" cols="68" rows="5" value={additionalinfo} onChange={(e) => handleTextareaChange(e, setAdditionalInfo)} placeholder='Maximum of 300 words' required></textarea>
                    </div>
                </div>
              </div>

              <button type='submit' className='form-btn-1'>Save</button>
              <Link className='form-btn-3' to='/Application-Form-page-4'>Back</Link>
              <Link className='form-btn-2' to='/Pastor-Form'>Next</Link>

            </form>
        </div>
      <Footer/>
    </div>
  )
}

export default Spouse_Form