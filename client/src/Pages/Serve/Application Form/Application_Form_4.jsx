import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../Serve/Form.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'

const Application_Form_4 = () => {

  // browser tab title
  useEffect(() => {
    document.title = 'Application Page: 4';
  }, []);

  //max text of 300 words
  const [testimony, setTestimony] = useState('');
  const [holyspirit, setHolySpirit] = useState('');
  const [spiritualworks, setSpirtualWorks] = useState('');
  const [motivation, setMotivation] = useState('');
  const [gifts, setGifts] = useState('');

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
              <h1>Application Form</h1>
              <hr />

              <form action="4">

              <div className='details-block'>
                <h2>Faith Details</h2>

                  <div className='forms'>

                      <div className='paragraph'>
                          <label htmlFor="">Describe your testimony of salvation.</label>
                          <textarea name="" id="" cols="80" rows="5" value={testimony} onChange={(e) => handleTextareaChange(e, setTestimony)} placeholder='Maximum of 300 words' required></textarea>
                      </div>

                      <div className='paragraph'>
                          <label htmlFor="">Describe your understanding of the work of the Holy Spirit.</label>
                          <textarea name="" id="" cols="65" rows="5" value={holyspirit} onChange={(e) => handleTextareaChange(e, setHolySpirit)} placeholder='Maximum of 300 words' required></textarea>
                      </div>

                      <div className='paragraph'>
                          <label htmlFor="">Describe your current spiritual disciplines, strengths, and weaknesses (not your goal).</label>
                          <textarea name="" id="" cols="45" rows="5" value={spiritualworks} onChange={(e) => handleTextareaChange(e, setSpirtualWorks)} placeholder='Maximum of 300 words' required></textarea>
                      </div>

                      <div className='paragraph'>
                          <label htmlFor="">Describe what is motivating you to apply for this mission trip?</label>
                          <textarea name="" id="" cols="63" rows="5" value={motivation} onChange={(e) => handleTextareaChange(e, setMotivation)} placeholder='Maximum of 300 words' required></textarea>
                      </div>

                      <div className='paragraph'>
                          <label htmlFor="">What do you believe are your 2-3 most dominant spiritual gifts?</label>
                          <textarea name="" id="" cols="63" rows="5" value={gifts} onChange={(e) => handleTextareaChange(e, setGifts)} placeholder='Maximum of 300 words' required></textarea>
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
                <h2>Release of Liability</h2>

                <p>I am participating in a mission trip under the auscpices of TACTICA Ministries. As such, I understand they will give direction and guidance in regard to my personal safety. I understand there are associated 
                  risks with all international travel, as well as my specific travel to my destination in particular with TACTICA on this trip.
                </p>

                <p>In addition, I hereby release TACTICA Ministries and/or its leaders and/or its volunteer staff and/or its employees and/or ABWE and/or its board of directors, from any liability whatsoever arising out of any 
                  accident, sickness, death, damage, or loss which may be sustained by said person during the course or during my involvement with TACTICA Ministries and/or ABWE.
                </p>

                  <div className='forms'>

                    <div className='field'>
                      <label htmlFor="">Signature</label>
                      <input type="text" name="" id="" placeholder='Enter full name' required />
                    </div>

                    <div className='field'>
                      <label htmlFor="">Date</label>
                      <input type="date" name="" id="" placeholder='mm/dd/yyyy' required />
                    </div>

                    <div className='field'>

                    </div>

                    <div className='text'>
                        <p>I understand that my electronic signature legally indicates my authorization.</p>
                    </div>
                  </div>

              </div>

              <div className='details-block'>
                <h2>Team Leadership</h2>

                <p>The team will be under the leadership of TACTICA Ministries. The ministry will appoint a person as team leader; you will be notified of the team leader's name.</p>

                <p>I agree to work under the leadership of the designated team leader.</p>
           
                  <div className='forms'>

                      <div className='field'>
                          <label htmlFor="">Signature</label>
                          <input type="text" id='' placeholder='Enter full name' required />
                      </div>

                      <div className='field'>
                          <label htmlFor="">Date</label>
                          <input type="date" name="" id="" placeholder='mm/dd/yyyy' required />
                      </div>

                      <div className='field'>

                      </div>

                      <div className='text'>
                          <p>I understand that my electronic signature legally indicates my authorization.</p>
                      </div>
                  </div>
                
              </div>

              <div className='details-block'>
                <h2>Authorization for Medical Treatment</h2>

                <p>In the event of illness or injury while on this trip, I agree to the performance of such treatment, anesthesia, and operation, which in the opinion of the attending physician is deemed necessary. I hereby 
                  accept full responsibility for any and all expenses for medical treatment and medications that I may incur during my trip.
                </p>

                <p>Additionally, I accept full responsibility for any expenses related to an illness or injury resulting from my time on this trip which may become evident after my return home.</p>

                  <div className='forms'>

                    <div className='field'>
                      <label htmlFor="">Signature</label>
                      <input type="text" name="" id="" placeholder='Enter full name' required />
                    </div>

                    <div className='field'>
                      <label htmlFor="">Date</label>
                      <input type="date" name="" id="" placeholder='mm/dd/yyyy' required />
                    </div>

                    <div className='field'>

                    </div>

                    <div className='text'>
                        <p>I understand that my electronic signature legally indicates my authorization.</p>
                    </div>
                  </div>
                
              </div>

              <button type='submit' className='form-btn-1'>Save</button>
              <Link className='form-btn-3' to='/Application-Form-page-3'>Back</Link>
              <Link className='form-btn-2' to='/Spouse-Form'>Next</Link>
                
              </form>

          </div>
      <Footer/>
    </div>
  )
}

export default Application_Form_4