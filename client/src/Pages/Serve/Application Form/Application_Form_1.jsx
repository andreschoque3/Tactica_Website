import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import '../../Serve/Form.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import { toast } from 'react-toastify';
import jsPDF from 'jspdf'

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
    pdf.text(titleX, y, 'Application Form 1');
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

    // Add a new page for handling file inputs
    pdf.addPage();

    // Handle file inputs
    await handleFileInputs(pdf, formData, pageWidth, pageHeight, stripeHeight)

    // Save PDF
    pdf.save('application_form_1.pdf');
};

// Function to handle file inputs asynchronously
const handleFileInputs = async (pdf, formData, pageWidth, pageHeight, stripeHeight) => {
  let y = 20;
  let fileInputsFound = false;

  for (const key in formData) {
      if (key.startsWith('FileInput_')) {
          const fileData = formData[key];
          if (fileData instanceof File) {
              // Resize image to 800x800
              const resizedImage = await resizeImage(fileData, 800, 800);
              // Embed the resized image in the PDF
              pdf.addImage(resizedImage, 'JPEG', 20, y, 160, 160);
              y += 180; // Adjust y position for next element
          }
      }
  }

  // If no file inputs found, add a message indicating so
  if (!fileInputsFound) {
    pdf.setTextColor(0, 0, 0);
    pdf.text(20, 50, 'No file inputs provided.');
}

  // Add footer on the second page
  pdf.text(20, pageHeight - 10, 'Generated by TACTICA Minstries');
};

// Function to resize image
const resizeImage = async (file, maxWidth, maxHeight) => {
  return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
          const img = new Image();
          img.src = event.target.result;
          img.onload = () => {
              const canvas = document.createElement('canvas');
              let width = img.width;
              let height = img.height;
              if (width > height) {
                  if (width > maxWidth) {
                      height *= maxWidth / width;
                      width = maxWidth;
                  }
              } else {
                  if (height > maxHeight) {
                      width *= maxHeight / height;
                      height = maxHeight;
                  }
              }
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0, width, height);
              resolve(canvas.toDataURL('image/jpeg'));
          };
      };
  });
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
                    <h2>Personal Details</h2>

                    <div className='forms'>

                        <div className='field'>
                            <label>Full Name</label>
                            <input type="text" name='Full-name' placeholder='Enter full name' required/>
                        </div>

                        <div className='field'>
                            <label>Marital Status</label>
                              <select required name='Marital-status'>
                                <option value="">--Select Marital Status--</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Widowed">Widowed</option>
                                <option value="Other">Other</option>
                              </select>                         
                        </div>

                        <div className='field'>
                            <label>Spouse Name</label>
                            <input type="text" name='Spouse-name' placeholder='Enter spouse name' required/>
                        </div>

                        <div className='field'>
                            <label>Date of Birth</label>
                            <input type="date" name='DOB' max="9999-12-31" placeholder='mm/dd/yyyy' required/>
                        </div>

                        <div className='field'>
                            <label>Phone Number</label>
                            <input type="tel" name="Phone" onInput={handlePhoneInput} placeholder='ex: 999-999-9999' required />
                        </div>

                        <div className='field'>
                            <label>Email</label>
                            <input type="email" name='Email' placeholder='Enter email' required/>
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
                            <input type="text" name='Passport-number' placeholder='Enter passport number' required/>
                        </div>

                        <div className='field'>
                            <label>Country of Issue</label>
                            <input type="text" name='Passport-country-of-issue' placeholder='Enter country of issue' required/>
                        </div>

                        <div className='field'>
                          <label>Issue Date</label>
                          <input type="date" name='Passport-issue-date' max="9999-12-31" placeholder='mm/dd/yyyy' required/>
                        </div>

                        <div className='field'>
                          <label>Expiry Date</label>
                          <input type="date" name='Passport-expiry-date' max="9999-12-31" placeholder='mm/dd/yyyy' required/>
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
                            <input type="text" name='Street-address' placeholder='Enter street address' required/>
                        </div>

                        <div className='field'>
                            <label>Street Address Line 2</label>
                            <input type="text" name='Street-address-2' placeholder='Enter street address'/>
                        </div>

                        <div className='field'>
                            <label>City</label>
                            <input type="text" name='City-address' placeholder='Enter city' required/>
                        </div>

                        <div className='field'>
                            <label>Country</label>
                            <input type="text" name='Country-address' placeholder='Enter country' required/>
                        </div>

                        <div className='field'>
                            <label>State</label>
                            <input type="text" name='State-address' placeholder='Enter state' required/>
                        </div>

                        <div className='field'>
                            <label>Zip code</label>
                            <input type="text" name='Zip-code-address' placeholder='Enter zip code' required/>
                        </div>
                          
                    </div>

                </div>

                <div className='details-block'>
                    <h2>Demographic Details</h2>
      
                    <div className='forms'>
                      
                        <div className='field'>
                            <label>Age</label>
                            <select required name='Age'>
                              <option value="">--Select Age--</option>
                                {Array.from({length: 83}, (_, i) => i + 18).map(age => (
                                <option key={age} value={age}>{age}</option>
                                ))}
                            </select>
                        </div>

                        <div className='field'>
                            <label>Height</label>
                            <input type="text" name='Height' placeholder='Enter height' required/>
                        </div>

                        <div className='field'>
                            <label>Weight</label>
                            <input type="text" name='Weight' placeholder='Enter weight' required/>
                        </div>

                        <div className='radio-field'>
                            <label className='radio-label'>T-shirt Size</label>
                            <ul>
                              <li>
                                <input type="radio" name="Size" id="size-s" value='S' checked={selectedSize === 'S'} onChange={handleSizeChange} />
                                <label htmlFor="size-s">S</label>
                              </li>

                              <li>
                                <input type="radio" name="Size" id="size-m" value='M' checked={selectedSize === 'M'} onChange={handleSizeChange} />
                                <label htmlFor="size-m">M</label>
                              </li>
                              
                              <li>
                                <input type="radio" name="Size" id="size-l" value='L' checked={selectedSize === 'L'} onChange={handleSizeChange}/>
                                <label htmlFor="size-l">L</label>
                              </li>
                              
                              <li>
                                <input type="radio" name="Size" id="size-xl" value='XL' checked={selectedSize === 'XL'} onChange={handleSizeChange} />
                                <label htmlFor="size-xl">XL</label>
                              </li>
                              
                              <li>
                                <input type="radio" name="Size" id="size-xxl" value='XXL' checked={selectedSize === 'XXL'} onChange={handleSizeChange} />
                                <label htmlFor="size-xxl">XXL</label>
                              </li>
                              
                              <li>
                                <input type="radio" name="Size" id="size-xxxl" value='XXXL' checked={selectedSize === 'XXXL'} onChange={handleSizeChange} />
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