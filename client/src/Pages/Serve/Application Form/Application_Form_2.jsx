import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../../Serve/Form.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'

const Application_Form_2 = () => {

  // browser tab title
  useEffect(() => {
    document.title = 'Application Page: 2';
  }, []);

  //if user selects other field
  const [selectedOption, setSelectedOption] = useState('');
  const [otherValue, setOtherValue] = useState('');

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    // Reset the other value if a different option is selected
    if (value !== 'other') {
      setOtherValue('');
    }
  };

  const handleOtherInputChange = (event) => {
    setOtherValue(event.target.value);
  };

  return (
    <div>
        <Navbar/>
        <div className='form-container'>
            <h1>Application Form</h1>
            <hr />

            <form action="2">

              <div className='details-block'>
                <h2>Church Details</h2>

                <div className='forms'>
                  
                    <div className='field'>
                        <label>Home Church</label>
                        <input type="text" placeholder='Enter home church' required />
                    </div>

                    <div className='field'>
                        <label>Pastor Name</label>
                        <input type="text" placeholder='Enter pastor name' required />
                    </div>

                    <div className='field'>
                        <label>Pastor Email</label>
                        <input type="email" placeholder='Enter email' required/>
                    </div>

                    <div className='field'>
                        <label>Street Address</label>
                        <input type="text" placeholder='Enter street address' required/>
                    </div>

                    <div className='field'>
                        <label>Street Address Line 2</label>
                        <input type="text" placeholder='Enter street address' />
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
                        <label>Zip Code</label>
                        <input type="text" placeholder='Enter zip code' required/>
                    </div>
                
                </div>
              
              </div>

              <div className='details-block'>
                <h2>Employment Details</h2>

                <div className='forms'>
                  
                    <div className='field'>
                        <label>Occupation</label>
                        <input type="text" placeholder='Enter occupation' required />
                    </div>

                    <div className='field'>
                        <label>Current Position/Assignment</label>
                        <input type="text" placeholder='Enter current position/assignment' required />
                    </div>

                    <div className='field'>
                        <label>Employer</label>
                        <input type="text" placeholder='Enter employer' required/>
                    </div>

                    <div className='field'>
                        <label>Street Address</label>
                        <input type="text" placeholder='Enter street address' required/>
                    </div>

                    <div className='field'>
                        <label>Street Address Line 2</label>
                        <input type="text" placeholder='Enter street address' />
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
                        <label>Zip Code</label>
                        <input type="text" placeholder='Enter zip code' required/>
                    </div>

                    <div className='specific-field'>
                        <label htmlFor="specialty">Specialties</label>
                        <select name="specialty" id="specialty" required onChange={handleOptionChange}>
                          <option value="">--Select Specialty--</option>
                          <option value="swat">SWAT</option>
                          <option value="sniper">Sniper</option>
                          <option value="firearms instructor">Firearms Instructor</option>
                          <option value="defensive tactics">Defensive Tactics</option>
                          <option value="k9">K9</option>
                          <option value="explosives unit">Explosives Unit</option>
                          <option value="investigations">Investigations</option>
                          <option value="military">Military</option>
                          <option value="firefighter">Firefighter</option>
                          <option value="emt">EMT</option>
                          <option value="paramedic">Paramedic</option>
                          <option value="none above">N/A</option>
                          <option value="other">Other</option>
                        </select>

                        {selectedOption === 'other' && (
                        <div className='sub-field'>
                          <label>Other:</label>
                          <input type="text" value={otherValue} onChange={handleOtherInputChange} placeholder='Enter specialty' />
                        </div>
                        )}
                    </div>
                
                </div>
                             
              </div>

              <div className='details-block'> 
                <h2>Health Details</h2>
              
                <div className='forms'>
                  
                    <div className='field'>
                        <label>Allergies</label>
                        <input type="text" name="alergies" id="alergies" placeholder='Enter allergies' required/>
                    </div>

                    <div className='field'>
                        <label>Food Sensitivities</label>
                        <input type="text" name="alergies" id="food-sensitivites" placeholder='Enter food sensitivities' required/>
                    </div>

                    <div className='field'>
                        <label>Current Medications</label>
                        <input type="text" name="alergies" id="medications" placeholder='Enter medications' required/>
                    </div>
                
                </div>
            
              </div>

              <button type='submit' className='form-btn-1'>Save</button>
              <Link className='form-btn-3' to='/Application-Form-page-1'>Back</Link>
              <Link className='form-btn-2' to='/Application-Form-page-3'>Next</Link>

            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Application_Form_2