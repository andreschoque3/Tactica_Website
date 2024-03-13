import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import '../../Serve/Form.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import { toast } from 'react-toastify';

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

  // POST request to google sheet
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwspzw4WYSmJdAWbWbenI436Qj08juBok6jdmkXwWNgpRJgJrFFQ6sMoXw7IH9B2K5H/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        toast.success('Form submitted successfully')
        e.target.reset();
      } else {
        toast.error('Form submission failed')
        throw new Error('Failed to submit message');
      }
    } catch (error) {
      console.error('Error!', error.message);
      toast.error('Error', error.message);
    }
  };

  return (
    <div>
        <Navbar/>
        <div className='form-container'>
            <h1>Application Form</h1>
            <hr />

            <form action="" onSubmit={handleSubmit}>

              <div className='details-block'>
                <h2>Church Details</h2>

                <div className='forms'>
                  
                    <div className='field'>
                        <label>Home Church</label>
                        <input type="text" name='Home-church' placeholder='Enter home church' required />
                    </div>

                    <div className='field'>
                        <label>Pastor Name</label>
                        <input type="text" name='Pastor-name' placeholder='Enter pastor name' required />
                    </div>

                    <div className='field'>
                        <label>Pastor Email</label>
                        <input type="email" name='Pastor-email' placeholder='Enter email' required/>
                    </div>

                    <div className='field'>
                        <label>Street Address</label>
                        <input type="text" name='Church-street-address' placeholder='Enter street address' required/>
                    </div>

                    <div className='field'>
                        <label>Street Address Line 2</label>
                        <input type="text" name='Church-street-address-2' placeholder='Enter street address' />
                    </div>

                    <div className='field'>
                        <label>City</label>
                        <input type="text" name='Church-city-address' placeholder='Enter city' required/>
                    </div>

                    <div className='field'>
                        <label>Country</label>
                        <input type="text" name='Church-country-address' placeholder='Enter country' required/>
                    </div>

                    <div className='field'>
                        <label>State</label>
                        <input type="text" name='Church-state-address' placeholder='Enter state' required/>
                    </div>

                    <div className='field'>
                        <label>Zip Code</label>
                        <input type="text" name='Church-zip-code-address' placeholder='Enter zip code' required/>
                    </div>
                
                </div>
              
              </div>

              <div className='details-block'>
                <h2>Employment Details</h2>

                <div className='forms'>
                  
                    <div className='field'>
                        <label>Occupation</label>
                        <input type="text" name='Occupation' placeholder='Enter occupation' required />
                    </div>

                    <div className='field'>
                        <label>Current Position/Assignment</label>
                        <input type="text" name='Position-assignment' placeholder='Enter current position/assignment' required />
                    </div>

                    <div className='field'>
                        <label>Employer</label>
                        <input type="text" name='Employer' placeholder='Enter employer' required/>
                    </div>

                    <div className='field'>
                        <label>Street Address</label>
                        <input type="text" name='Employer-street-address' placeholder='Enter street address' required/>
                    </div>

                    <div className='field'>
                        <label>Street Address Line 2</label>
                        <input type="text" name='Employer-street-address-2' placeholder='Enter street address' />
                    </div>

                    <div className='field'>
                        <label>City</label>
                        <input type="text" name='Employer-city-address' placeholder='Enter city' required/>
                    </div>

                    <div className='field'>
                        <label>Country</label>
                        <input type="text" name='Employer-country-address' placeholder='Enter country' required/>
                    </div>

                    <div className='field'>
                        <label>State</label>
                        <input type="text" name='Employer-state-address' placeholder='Enter state' required/>
                    </div>

                    <div className='field'>
                        <label>Zip Code</label>
                        <input type="text" name='Employer-zip-code-address' placeholder='Enter zip code' required/>
                    </div>

                    <div className='specific-field'>
                        <label>Specialties</label>
                        <select name="Specialty" id="specialty" required onChange={handleOptionChange}>
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
                          <input type="text" name='Specialties-other' value={otherValue} onChange={handleOtherInputChange} placeholder='Enter specialty' />
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
                        <input type="text" name="Allergies" id="alergies" placeholder='Enter allergies' required/>
                    </div>

                    <div className='field'>
                        <label>Food Sensitivities</label>
                        <input type="text" name="Food-sensitivities" id="food-sensitivites" placeholder='Enter food sensitivities' required/>
                    </div>

                    <div className='field'>
                        <label>Current Medications</label>
                        <input type="text" name="Medications" id="medications" placeholder='Enter medications' required/>
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