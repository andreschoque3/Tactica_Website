import React, {useEffect} from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Contact = () => {

  // browser tab title
  useEffect(() => {
    document.title = 'Contact Us';
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a517fe6f-3adc-4cd6-9b6c-04d38f98b600"); //andres: efae9b3c-bf15-4bd7-91ed-ff9435feb4d9

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Email successfully sent.")
    }
    else {
      console.log("Error", res)
      toast.error("Error while sending email.")
    }
  };

  return (
  <div>
    <Navbar/>

    <section className='header-section-cont'>
      <div>
        <h1>Contact Us</h1>
      </div>
    </section>
    
    <section className='contac-section'>
      <div className='contact-det'>
        <h1>TACTICA Ministries</h1>
        <h2>5611 Springridge St. Portage, MI, USA 49024</h2>
        <p className='phone-num'><i className='fas fa-phone'></i> +1 (269) 993 - 4813</p>
        <p className='email'><i className='fas fa-envelope'></i> tactica3@yahoo.com</p>
      </div>

      <div className='contact-fm'>
        <form action="" onSubmit={onSubmit}>
          <input type="text" name='Name' placeholder='Name' required/>
          <input type="email" name='Email' placeholder='Email' required />
          <input type="text" name='Subject' placeholder='Subject' required/>
          <textarea name="Message" id="" rows="6" placeholder='Message'></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </section>

    <Footer/>
  </div>
  )
}
export default Contact