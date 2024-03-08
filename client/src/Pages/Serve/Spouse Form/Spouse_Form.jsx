import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../Serve/Form.css'
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

function Spouse_Form() {

  // browser tab title
  useEffect(() => {
    document.title = 'Spouse Application Page';
  }, []);

  // phone regex
  function handlePhoneInput(event) {
    const enteredValue = event.target.value;
    event.target.value = enteredValue.replace(/[^0-9()-]/g, ''); // Remove any characters other than numbers, dashes, and parentheses
  }

  return (
    <div>
      <Navbar/>
        <div className='form-container'>
            <h1>Spouse Application Form</h1>
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
                        <input type="tel" name="" id="" placeholder='ex: 999-999-9999' onClick={handlePhoneInput} required />
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
                    
                    <div className='field'>
                      <label htmlFor=""></label>
                      <textarea name="" id="" cols="30" rows="10"></textarea>
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

export default Spouse_Form