import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import '../../Serve/Form.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import { toast } from 'react-toastify';
import jsPDF from 'jspdf'

function Application_Form_3() {

  // browser tab title
  useEffect(() => {
    document.title = 'Application Page: 3';
  }, []);

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

   // generate PDF with responses
   const generatePDF = async (formData) => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let y = 20;
    const lineHeight = 10;
    const titleFontSize = 18;
    const stripeHeight = 5;

    // Set font properties
    pdf.setFont('helvetica');
    pdf.setFontSize(titleFontSize);

     // Add red stripes at the top and bottom
    pdf.setFillColor(255, 0, 0);
    pdf.rect(0, 0, pageWidth, stripeHeight, 'F'); // Top stripe
    pdf.rect(0, pageHeight - stripeHeight, pageWidth, stripeHeight, 'F'); // Bottom stripe

    // Calculate the width of the title text
    const titleTextWidth = pdf.getStringUnitWidth('Application Form') * titleFontSize / pdf.internal.scaleFactor;

    // Center the title horizontally
    const titleX = (pageWidth - titleTextWidth) / 2;

    // Add title
    pdf.setTextColor(0, 0, 0);
    pdf.text(titleX, y, 'Application Form 3');
      y += titleFontSize + 2;

    pdf.setFontSize(12);

    // Add form data
  Object.keys(formData).forEach((key) => {
    const lines = pdf.splitTextToSize(`${key}: ${formData[key]}`, pdf.internal.pageSize.width - 40);
    lines.forEach((line) => {
      pdf.text(20, y, line);
      y += lineHeight; // Increase spacing after the first line of each label
    });
  });

    // Add footer
    pdf.text(20, pdf.internal.pageSize.height - 10, 'Generated by TACTICA Minstries');

  // Save PDF
  pdf.save('application_form_3.pdf');
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
        generatePDF(Object.fromEntries(formData.entries()))
        toast.success('Form submitted successfully')
        e.target.reset();
        setMissionTrip('');
        setLivingAbroad('');
        setLanguages([{ id: 1, language: '', proficiency: '' }]);
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
               <h2>Emergency Contact Details</h2>

               <div className='forms'>

                    <div className='field'>
                        <label htmlFor="Contact">Contact Name</label>
                        <input type="text" id='contact' name='Emergency-contact' placeholder='Enter contact name' required />
                    </div>

                    <div className='field'>
                        <label htmlFor="relationship">Relationship to you</label>
                        <input type="text" id='relationship' name='Emergency-relationship' placeholder='Enter relationship' required />
                    </div>

                    <div className='field'>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id='phone' name='Emergency-phone' onInput={handlePhoneInput} placeholder='Enter phone number' required />
                    </div>

                    <div className='field'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='Emergency-email' placeholder='Enter email' required />
                    </div>

                    <div className='field'>
                        <label htmlFor="street address">Street Address</label>
                        <input type="text" id='street address' name='Emergency-street-address' placeholder='Enter street address' required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">Street Address Line 2</label>
                        <input type="text" name='Emergency-street-address-2' placeholder='Enter street address' />
                    </div>
                            
                    <div className='field'>
                        <label htmlFor="">City</label>
                        <input type="text" name='Emergency-city-address' placeholder='Enter city' required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">Country</label>
                        <input type="text" name='Emergency-country-address' placeholder='Enter country' required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">State</label>
                        <input type="text" name='Emergency-state-address' placeholder='Enter state' required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">Zip Code</label>
                        <input type="text" name='Emergency-zip-code-address' placeholder='Enter zip code' required />
                    </div>

               </div>
                        
             </div>

             <div className='details-block'>
               <h2>Work Experience Details</h2>

                <div className='forms'>

                    <div className='field'>
                        <label htmlFor="">Please attach your resume</label>
                        <p>Only PDF format accepted.</p>
                        <input type="file" accept=".pdf" required/>
                    </div>

                    <div className='paragraph'>
                        <label>Have you ever served on an overseas mission trip before? If yes, briefly explain.</label>
                        <textarea name="Mission-trip" id="" cols="50" rows="5" value={missionTrip} onChange={(e) => handleTextareaChange(e, setMissionTrip)} placeholder='Maximum of 300 words' required></textarea>
                    </div>

                    <div className='paragraph'>
                        <label>Have you ever lived in another country? If yes, briefly explain.</label>
                        <textarea name="Living-abroad" id="" cols="63" rows="5" value={livingAbroad} onChange={(e) => handleTextareaChange(e, setLivingAbroad)} placeholder='Maximum of 300 words' required></textarea>
                    </div>

                    <div className='field'>
                        <i className='fas fa-plus' onClick={handleAddLanguage}></i>
                        
                        {languages.map((language) => (
                        <div key={language.id}>
                            <div className='sub-fields'>
                                <label>Foreign Language Spoken</label>
                                <input type="text" name='Language' placeholder='Enter language' value={language.language} onChange={(e) => handleLanguageChange(language.id, e.target.value)} required />
                            </div>
                            <div className='sub-fields'>
                                <label htmlFor="">Level of proficiency</label>
                                <select name='Level-of-proficiency' value={language.proficiency} onChange={(e) => handleProficiencyChange(language.id, e.target.value)}  required >
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
    
             </div>

             <div className='details-block'>
               <h2>Agreement Details</h2>

                <div className='forms'>

                    <div className='text-radio'>
                        <ul>
                            <li>
                                <input type="radio"/>
                                <label>I have completely read the <strong className='tooltip'>TACTICA Statement of Beliefs<span className="tooltiptext">The TACTICA Statements of Beliefs can be found on the About page.</span></strong>.</label>
                            </li>
                            <li>
                                <input type="radio"/>
                                <label>I agree to operate under the authority of the TACTICA doctrinal statement during my time with TACTICA Ministries.</label>
                            </li>
                        </ul>
                    </div>

                    <div className='field'>

                    </div>
 
                    <div className='field'>
                        <label htmlFor="">Signature</label>
                        <input type="text" name="Agreement-signature" id="" placeholder='Type full name' required />
                    </div>

                    <div className='field'>
                        <label htmlFor="">Date</label>
                        <input type="date" name="Agreement-date" id="" placeholder='mm/dd/yyyy'  max="9999-12-31" required/>
                    </div>

                    <div className='field'>

                    </div>

                    <div className='text'>
                        <p>Signing electronically indicates your agreement to submit to TACTICA’s doctrinal statement.</p>
                    </div>

                </div>
                    
             </div>

             <button type='submit' className='form-btn-1'>Save</button>
             <Link className='form-btn-3' to='/Application-Form-page-2'>Back</Link>
             <Link className='form-btn-2' to='/Application-Form-page-4'>Next</Link>
                
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Application_Form_3