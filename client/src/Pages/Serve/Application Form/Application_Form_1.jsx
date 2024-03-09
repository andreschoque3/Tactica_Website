import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../../Serve/Form.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'

const Application_Form_1 = () => {

  // browser tab title
  useEffect(() => {
    document.title = 'Application Page: 1';
  }, []);

  // phone regex
  function handlePhoneInput(event) {
    const enteredValue = event.target.value;
    event.target.value = enteredValue.replace(/[^0-9()-]/g, ''); // Remove any characters other than numbers, dashes, and parentheses
  }

  // size selection
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setSelectedSize((prevSize) => (prevSize === newSize ? null : newSize));
  };

  return (
    <div>
        <Navbar/>
          <div className='form-container'>
              <h1>Application Form</h1>
              <hr />

              <form action="1">

                <div className='details-block'>
                    <h2>Personal Details</h2>

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
                            <input type="tel" name="phone" onInput={handlePhoneInput} placeholder='ex: 999-999-9999' required />
                        </div>

                        <div className='field'>
                            <label>Email</label>
                            <input type="email" placeholder='Enter email' required/>
                        </div>

                    </div>

                </div>

                <div className='details-block'>
                    <h2>Passport Details</h2>

                    <div className='forms'>
                    
                        <div className='field'>
                            <label>Passport Image</label>
                            <input type="file" accept=".jpg, .jpeg, .png" required/>
                        </div>

                        <div className='field'>
                            <label>Passport Number</label>
                            <input type="text" placeholder='Enter passport number' required/>
                        </div>

                        <div className='field'>
                            <label>Country of Issue</label>
                            <input type="text" placeholder='Enter country of issue' required/>
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
                  
                </div>

                <div className='details-block'>
                   <h2>Address Details</h2>

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

                </div>

                <div className='details-block'>
                    <h2>Demographic Details</h2>
      
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
                            <input type="text" placeholder='Enter height' required/>
                        </div>

                        <div className='field'>
                            <label>Weight</label>
                            <input type="text" placeholder='Enter weight' required/>
                        </div>

                        <div className='radio-field'>
                            <label className='radio-label'>T-shirt Size</label>
                            <ul>
                              <li>
                                <input type="radio" name="size" id="size-s" value='S' checked={selectedSize === 'S'} onChange={handleSizeChange} />
                                <label htmlFor="size-s">S</label>
                              </li>

                              <li>
                                <input type="radio" name="size" id="size-m" value='M' checked={selectedSize === 'M'} onChange={handleSizeChange} />
                                <label htmlFor="size-m">M</label>
                              </li>
                              
                              <li>
                                <input type="radio" name="size" id="size-l" value='L' checked={selectedSize === 'L'} onChange={handleSizeChange}/>
                                <label htmlFor="size-l">L</label>
                              </li>
                              
                              <li>
                                <input type="radio" name="size" id="size-xl" value='XL' checked={selectedSize === 'XL'} onChange={handleSizeChange} />
                                <label htmlFor="size-xl">XL</label>
                              </li>
                              
                              <li>
                                <input type="radio" name="size" id="size-xxl" value='XXL' checked={selectedSize === 'XXL'} onChange={handleSizeChange} />
                                <label htmlFor="size-xxl">XXL</label>
                              </li>
                              
                              <li>
                                <input type="radio" name="size" id="size-xxxl" value='XXXL' checked={selectedSize === 'XXXL'} onChange={handleSizeChange} />
                                <label htmlFor="size-xxxl">XXXL</label>
                              </li>
                            
                            </ul>
                        </div>
                          
                    </div>
                  
                </div>

                <button type='submit' className='form-btn-1'>Save</button>
                <Link className='form-btn-2' to='/Application-Form-page-2'>Next</Link>
 
              </form>

          </div>
        <Footer/>
    </div>
  )
}

export default Application_Form_1