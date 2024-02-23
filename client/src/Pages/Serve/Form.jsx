import React from 'react'
import './Form.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Form = () => {

  // phone regex
  function handlePhoneInput(event) {
    const enteredValue = event.target.value;
    event.target.value = enteredValue.replace(/[^0-9()-]/g, ''); // Remove any characters other than numbers, dashes, and parentheses
}

  return (
    <div>
        <Navbar/>
          <div className='form-container'>
              <h1>Application Form</h1>
              <hr />
              
              <div className='personal-details-block'>
                <h2>Personal Details</h2>

                <form action="">
                  <div className='forms'>
                    
                        <div className='field'>
                          <label>Full Name</label>
                          <input type="text" placeholder='Enter full name' required/>
                        </div>

                        <div className='field'>
                          <label>Marital Status</label>
                            <select required>
                              <option value="">--Select Marital Status--</option>
                              <option value="single">Single</option>
                              <option value="married">Married</option>
                              <option value="divorced">Divorced</option>
                              <option value="widowed">Widowed</option>
                              <option value="other">Other</option>
                            </select>                         
                        </div>

                        <div className='field'>
                          <label>Spouse Name</label>
                          <input type="text" placeholder='Enter spouse name' required/>
                        </div>

                        <div className='field'>
                          <label>Date of Birth</label>
                          <input type="date" max="9999-12-31" placeholder='mm/dd/yyyy' required/>
                        </div>

                        <div className='field'>
                          <label>Phone Number</label>
                          <input type="tel" name="phone" onInput={handlePhoneInput} required />
                        </div>

                        <div className='field'>
                          <label>Email</label>
                          <input type="text" placeholder='Enter email' required/>
                        </div>
                        
                  </div>
                  
                </form>

              </div>

              
              <div className='passport-details-block'>
                <h2>Passport Details</h2>

                <form action="">
                  <div className='forms'>
                    
                        <div className='field'>
                          <label>Passport Image</label>
                          <input type="file" accept=".jpg, .jpeg, .png" required/>
                        </div>

                        <div className='field'>
                          <label>Passport Number</label>
                          <input type="text" placeholder='Enter Passport number' required/>
                        </div>

                        <div className='field'>
                          <label>Country of Issue</label>
                          <input type="text" placeholder='Enter Country of Issue' required/>
                        </div>

                        <div className='field'>
                          <label>Issue Date</label>
                          <input type="date" max="9999-12-31" placeholder='mm/dd/yyyy' required/>
                        </div>

                        <div className='field'>
                          <label>Expiry Date</label>
                          <input type="date" max="9999-12-31" placeholder='mm/dd/yyyy' required/>
                        </div>

                        <div className='field'>
                          <label>Photo for TACTICA Ministry Card</label>
                          <input type="file" accept=".jpg, .jpeg, .png" required/>
                        </div>
                        
                  </div>
                  
                </form>

              </div>

              <div className='address-details-block'>
                <h2>Address Details</h2>

                <form action="">
                  <div className='forms'>
                    
                        <div className='field'>
                          <label>Street Address</label>
                          <input type="text" placeholder='Enter street address' required/>
                        </div>

                        <div className='field'>
                          <label>Street Address Line 2</label>
                          <input type="text" placeholder='Enter street address'/>
                        </div>

                        <div className='field'>
                          <label>City</label>
                          <input type="text" placeholder='Enter city' required/>
                        </div>

                        <div className='field'>
                          <label>Country</label>
                          <input type="text" placeholder='Enter country' required/>
                        </div>

                        <div className='field'>
                          <label>State</label>
                          <input type="text" placeholder='Enter state' required/>
                        </div>

                        <div className='field'>
                          <label>Zip code</label>
                          <input type="text" placeholder='Enter zip code' required/>
                        </div>
                        
                  </div>
                  
                </form>

              </div>

              <div className='demographic-details-block'>
                <h2>Demographic Details</h2>

                <form action="">
                  <div className='forms'>
                    
                        <div className='field'>
                          <label>Age</label>
                          <select required>
                            <option value="">--Select Age--</option>
                              {Array.from({length: 83}, (_, i) => i + 18).map(age => (
                              <option key={age} value={age}>{age}</option>
                              ))}
                          </select>
                        </div>

                        <div className='field'>
                          <label>Height</label>
                          <input type="text" placeholder='Enter height'/>
                        </div>

                        <div className='field'>
                          <label>Weight</label>
                          <input type="text" placeholder='Enter weight' required/>
                        </div>

                        <div className='field'>
                          <label>T-shirt Size</label>
                          <ul>
                            <li><input type="radio" name="" id="" />S</li>
                            <li><input type="radio" name="" id="" />M</li>
                            <li><input type="radio" name="" id="" />L</li>
                            <li><input type="radio" name="" id="" />XL</li>
                            <li><input type="radio" name="" id="" />XXL</li>
                            <li><input type="radio" name="" id="" />XXXL</li>
                          </ul>
                        </div>
                        
                  </div>
                  
                </form>

              </div>

              <button className='next-btn'>Next</button>

          </div>
        <Footer/>
    </div>
  )
}

export default Form