import React, { useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { FaPhone, FaHome, FaMapMarkerAlt } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';


function Contacts() {
  const [formData, setFormData] = useState({
    message: '',
    email: '',
    name: '',
    subject: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if the reCAPTCHA is checked
    if (!captchaChecked) {
      alert('Please check the reCAPTCHA before submitting the form.');
      return;
    }
  
    if (!formData.message.trim() || !formData.email.trim() || !formData.name.trim()) {
      alert('Please fill in all required fields');
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    
    emailjs.sendForm(
      'service_0ke9fee', 
      'template_6vnpmt7', 
      e.target, 
      'lsA9ycfvh0aAsGdoC'
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      setFormData({
        message: '',
        email: '',
        name: '',
        subject: ''
      });
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message. Please try again later.');
    });
  };

  const [captchaChecked, setCaptchaChecked] = useState(false);

const handleRecaptchaChange = (value) => {
  console.log("reCAPTCHA value:", value);
  setCaptchaChecked(true);
};

  return (
    <div className='contact-container'>
      <h3>Contact Me</h3>
      <div className='contact'>
        <div className='rectangle'>
          <div className='label2'>
            <div className='icon2'><FaMapMarkerAlt /></div>
            <div className='text2'>Cape Town</div>
          </div>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165800.04030341068!2d18.4240553!3d-33.9248685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town!5e0!3m2!1sen!2sza!4v1644720678477!5m2!1sen!2sza"
            width="290"
            height="300"
            style={{ border: 0, marginTop: '120px', marginLeft: '10px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className='group'>
          <form onSubmit={handleSubmit}>
            <div className='rectangle-5'>
              <div className='overlap'>
                <input
                  type='text'
                  className='input-field-4'
                  placeholder='Message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <input
                  type='email'
                  className='input-field-2'
                  placeholder='Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type='text'
                  className='input-field'
                  placeholder='Name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type='text'
                  className='input-field-3'
                  placeholder='Subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                />
                <button type="submit" className='submit-btn'>Submit</button>
              </div>
            </div>
            <ReCAPTCHA
              sitekey="6Ldct3opAAAAAFLNGbAD_6b4K3W-pFa5Wioi4un_"
              onChange={handleRecaptchaChange}
              className='recaptcha-container'
            />
          </form>
        </div>
      </div>
      <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-icon'>
          <Link to="/">
            <FaHome style={{ color: '#f0edcf' }} />
          </Link>
          
        </div>
      </div>
      <div className='lab'>
        <div className='copy'>Copyright @ Aphiwe Sikhuphela - all Rights Reserved</div>
      </div>
    </footer>
    </div>
  );
}

export default Contacts;

