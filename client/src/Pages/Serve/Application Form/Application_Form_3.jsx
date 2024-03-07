import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../../Serve/Form.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'

function Application_Form_3() {

  // phone regex
  function handlePhoneInput(event) {
    const enteredValue = event.target.value;
    event.target.value = enteredValue.replace(/[^0-9()-]/g, ''); // Remove any characters other than numbers, dashes, and parentheses
  }

  //max text of 300 words
  const [missionTrip, setMissionTrip] = useState('');
  const [livingAbroad, setLivingAbroad] = useState('');

  const handleTextareaChange = (event, setter) => {
    const text = event.target.value;
    // Split text by space to count words
    const words = text.trim().split(/\s+/);
    if (words.length <= 300) {
      setter(text);
    }
  };

  // languages
  const [languages, setLanguages] = useState([{ id: 1, language: '', proficiency: '' }]);

  const handleAddLanguage = () => {
    const newLanguages = [...languages];
    const newId = newLanguages[newLanguages.length - 1].id + 1;
    setLanguages([...newLanguages, { id: newId, language: '', proficiency: '' }]);
  };

  const handleLanguageChange = (id, language) => {
    const newLanguages = languages.map(lang => {
      if (lang.id === id) {
        return { ...lang, language };
      }
      return lang;
    });
    setLanguages(newLanguages);
  };

  const handleProficiencyChange = (id, proficiency) => {
    const newLanguages = languages.map(lang => {
      if (lang.id === id) {
        return { ...lang, proficiency };
      }
      return lang;
    });
    setLanguages(newLanguages);
  };

  

  return (
    <div>
        <Navbar/>
            <div className='form-container'>
                <h1>Application Form</h1>
                <hr />

                <div className='details-block'>
                    <h2>Emergency Contact Details</h2>

                    <form action="">

                        <div className='forms'>

                        <div className='field'>
                            <label htmlFor="Contact">Contact Name</label>
                            <input type="text" id='contact' name='contact' placeholder='Enter contact name' required />
                        </div>

                        <div className='field'>
                            <label htmlFor="relationship">Relationship to you</label>
                            <input type="text" id='relationship' name='relationship' placeholder='Enter relationship' required />
                        </div>

                        <div className='field'>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id='phone' name='phone' onInput={handlePhoneInput} placeholder='Enter phone number' required />
                        </div>

                        <div className='field'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' name='email' placeholder='Enter email' required />
                        </div>

                        <div className='field'>
                            <label htmlFor="street address">Street Address</label>
                            <input type="email" id='street address' name='street address' placeholder='Enter street address' required />
                        </div>

                        <div className='field'>
                            <label htmlFor="">Street Address Line 2</label>
                            <input type="email" name='street address' placeholder='Enter street address' />
                        </div>
                        
                        <div className='field'>
                            <label htmlFor="">City</label>
                            <input type="email" name='city' placeholder='Enter city' required />
                        </div>

                        <div className='field'>
                            <label htmlFor="">Country</label>
                            <input type="email" name='country' placeholder='Enter country' required />
                        </div>

                        <div className='field'>
                            <label htmlFor="">State</label>
                            <input type="email" name='state' placeholder='Enter state' required />
                        </div>

                        <div className='field'>
                            <label htmlFor="">Zip Code</label>
                            <input type="email" name='zip code' placeholder='Enter zip code' required />
                        </div>

                        </div>
                    </form>
                </div>

                <div className='details-block'>
                    <h2>Work Experience Details</h2>

                    <form action="">
                        <div className='forms'>

                        <div className='field'>
                            <label htmlFor="">Please attach your resume</label>
                            <p>Only PDF format accepted.</p>
                            <input type="file" accept=".pdf" required/>
                        </div>

                        <div className='paragraph'>
                            <label htmlFor="">Have you ever served on an overseas mission trip before? If yes, briefly explain.</label>
                            <textarea name="" id="" cols="63" rows="5" value={missionTrip} onChange={(e) => handleTextareaChange(e, setMissionTrip)} placeholder='Maximum of 300 words'></textarea>
                        </div>

                        <div className='paragraph'>
                            <label htmlFor="">Have you ever lived in another country? If yes, briefly explain.</label>
                            <textarea name="" id="" cols="77" rows="5" value={livingAbroad} onChange={(e) => handleTextareaChange(e, setLivingAbroad)} placeholder='Maximum of 300 words'></textarea>
                        </div>

                        <div className='field'>
                           <i className='fas fa-plus' onClick={handleAddLanguage}></i>
                           <p>Use '+' to add languages</p>
                            {languages.map((language) => (
                            <div key={language.id}>
                                <div className='sub-fields'>
                                    <label htmlFor="">Foreign Language Spoken</label>
                                    <input type="text" name='language' placeholder='Enter language' value={language.language} onChange={(e) => handleLanguageChange(language.id, e.target.value)} required />
                                </div>
                                 <div className='sub-fields'>
                                    <label htmlFor="">Level of proficiency</label>
                                        <select value={language.proficiency} onChange={(e) => handleProficiencyChange(language.id, e.target.value)}  required >
                                            <option value="">--Select Proficiency--</option>
                                            <option value="Beginner">Beginner</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Advanced">Advanced</option>
                                            <option value="Native/Bilingual">Native/Bilingual</option>
                                        </select>
                                 </div>
                                 
                            </div>
                            ))}
                        </div> 
                        </div> 

                        

                    </form>
                </div>

                <div className='demo-details-block'>
                    <h2>Agreement Details</h2>

                    <form action="">
                        <div className='forms'>

                            <div className='text-radio'>
                                <ul>
                                    <li>
                                        <input type="radio"/>
                                        <label>I have completely read the <strong className='tooltip'>TACTICA Statement of Beliefs<span className="tooltiptext">The TACTICA Statements of Beliefs can be found on the About page.</span></strong>.</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="" id="" />
                                        <label>I agree to operate under the authority of the TACTICA doctrinal statement during my time with TACTICA Ministries.</label>
                                    </li>
                                </ul>
                            </div>

                            <div className='field'>

                            </div>
 
                            <div className='field'>
                                <label htmlFor="">Signature</label>
                                <input type="text" name="" id="" placeholder='Type full name' />
                            </div>

                            <div className='field'>
                                <label htmlFor="">Date</label>
                                <input type="date" name="" id="" placeholder='mm/dd/yyyy'  max="9999-12-31"/>
                            </div>

                            <div className='field'>

                            </div>

                            <div className='text'>
                                <p>Signing electronically indicates your agreement to submit to TACTICA’s doctrinal statement.</p>
                            </div>
                        </div>
                    </form>
                </div>

                <button type='submit' className='form-btn-1'>Save</button>
                <Link className='form-btn-3' to='/Application-Form-page-2'>Back</Link>
                <Link className='form-btn-2' to='/Application-Form-page-4'>Next</Link>


            </div>

        <Footer/>
    </div>
  )
}

export default Application_Form_3