import React from 'react';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';
import theme_pattern from '../../assets/theme_pattern.svg';
import './Contact.css';

const Contact = () => {
  
  const onSubmit = async (event) => {
    
    event.preventDefault();
    const form = event.target; 
    
    
    const formData = new FormData(event.target);

    formData.append("access_key", "e131aa25-074c-400b-90e6-bd81eab2f641");

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
      alert(res.message);
      form.reset();
    } else {
      console.error("Failed", res);
    }
    };
  

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt=''/>
    </div>
    <div className='contact-section'>
        <div className='contact-left'>
            <h1>Let's Talk</h1>
            <p>I'm currently looking forward for an opportunity to 
            work as an intern and contribute in the industry
             level projects,
            so feel free to contact me anytime!</p>
            <div className='contact-details'>
                <div className='contact-detail'>
                <img src={mail_icon} alt=''/>
                <p>khushiparwal1234@gmail.com</p>
                </div>
                <div className='contact-detail'>
                <img src={call_icon} alt=''/>
                <p>+91 9893830027</p>
                </div>
                <div className='contact-detail'>
                <img src={location_icon} alt=''/>
                <p>Indore, Madhya Pradesh(India)</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlfor=''>Your Name</label>
            <input type='text' placeholder='Enter your name'    name='name'/>
            <label htmlfor=''>Your Email</label>
            <input type='email' placeholder='Enter your email'   name='email'/>
            <label htmlfor=''>Write your message here</label>
            <textarea rows='8' placeholder='Enter your name' name='message'></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>
        </form>
    </div>
    </div>
  )
  };


export default Contact
