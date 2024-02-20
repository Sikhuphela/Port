import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { FaPhone, FaHome, FaMapMarkerAlt } from 'react-icons/fa';

function Contacts() {
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
            width="310"
            height="300"
            style={{ border: 0, marginTop: '180px', marginLeft: '10px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className='group'>
          <form>
            <div className='rectangle-5'>
              <div className='overlap'>
                <input
                  type='text'
                  className='input-field-4'
                  placeholder='Message'
                />
                <input
                  type='email'
                  className='input-field-2'
                  placeholder='Email'
                  required
                />
                <input
                  type='text'
                  className='input-field'
                  placeholder='Name'
                  required
                />
                <input
                  type='text'
                  className='input-field-3'
                  placeholder='Subject'
                />
                <button type="submit" className='submit-btn'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer className='footer'>
        <div className='footer-content'>
          <div className='footer-icon' >
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
