import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../../Serve/Form.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'

const Application_Form_2 = () => {

  //if user selects other
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

            <div className='details-block'>
              <h2>Church Details</h2>

              <form action="">
                
                <div className='forms'>
                  
                  <div className='field'>
                    <label htmlFor="">Home Church</label>
                    <input type="text" placeholder='Enter home church' required />
                  </div>

                  <div className='field'>
                    <label htmlFor="">Pastor Name</label>
                    <input type="text" placeholder='Enter pastor name' required />
                  </div>

                  <div className='field'>
                    <label htmlFor="">Pastor email</label>
                    <input type="email" placeholder='Enter email' required/>
                  </div>

                  <div className='field'>
                    <label htmlFor="">Street Address</label>
                    <input type="email" placeholder='Enter street address' required/>
                  </div>

                  <div className='field'>
                    <label htmlFor="">Street Address Line 2</label>
                    <input type="email" placeholder='Enter street address' />
                  </div>

                  <div className='field'>
                    <label htmlFor="">City</label>
                    <input type="email" placeholder='Enter city' required/>
                  </div>

                  <div className='field'>
                    <label htmlFor="">Country</label>
                    <input type="email" placeholder='Enter country' required/>
                  </div>

                  <div className='field'>
                    <label htmlFor="">State</label>
                    <input type="email" placeholder='Enter state' required/>
                  </div>

                  <div className='field'>
                    <label htmlFor="">Zip Code</label>
                    <input type="email" placeholder='Enter zip code' required/>
                  </div>
                
                </div>
              
              </form>
                
            </div>

            <div className='details-block'>
              <h2>Employment Details</h2>

              <form action="">
                
                <div className='forms'>
                  
                  <div className='field'>
                    <label htmlFor="">Occupation</label>
                    <input type="text" placeholder='Enter occupation' required />
                  </div>

                  <div className='field'>
                    <label htmlFor="">Current Position/Assignment</label>
                    <input type="text" placeholder='Enter current position/assignment' required />
                  </div>

                  <div className='field'>
                    <label htmlFor="">Employer</label>
                    <input type="text" placeholder='Enter employer' required/>
                  </div>

                  <div className='field'>
                    <label htmlFor="">Street Address</label>
                    <input type="text" placeholder='Enter street address' required/>
                  </div>

                  <div className='field'>
                    <label htmlFor="">Street Address Line 2</label>
                    <input type="text" placeholder='Enter street address' />
                  </div>

                  <div className='field'>
                    <label htmlFor="">City</label>
                    <input type="text" placeholder='Enter city' required/>
                  </div>

                  <div className='field'>
                    <label htmlFor="">Country</label>
                    <input type="text" placeholder='Enter country' required/>
                  </div>

                  <div className='field'>
                    <label htmlFor="">State</label>
                    <input type="text" placeholder='Enter state' required/>
                  </div>

                  <div className='field'>
                    <label htmlFor="">Zip Code</label>
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
              
              </form>
                
            </div>

            <div className='demo-details-block'> {/**this health */}
              <h2>Health Details</h2>

              <form action="">
                
                <div className='forms'>
                  
                  <div className='field'>
                      <label htmlFor="">Allergies</label>
                      <input type="text" name="alergies" id="alergies" placeholder='Enter allergies' />
                  </div>

                  <div className='field'>
                      <label htmlFor="">Food Sensitivities</label>
                      <input type="text" name="alergies" id="alergies" placeholder='Enter food sensitivities' />
                  </div>

                  <div className='field'>
                      <label htmlFor="">Current medications</label>
                      <input type="text" name="alergies" id="alergies" placeholder='Enter medications' />
                  </div>
                
                </div>
              
              </form>
            </div>

            <button type='submit' className='form-btn-1'>Save</button>
            <Link className='form-btn-3' to='/Application_Form_1'>Back</Link>
            <Link className='form-btn-2' to='/Application_Form_3'>Next</Link>

        </div>
        <Footer/>
    </div>
  )
}

export default Application_Form_2