import React from 'react';
import './Contact.css'; // Import the CSS file
import { FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa';

function Contacts() {
    return (
        <div className='contact'>
            <h3>Contact Me</h3>
            <div className='rectangle'>
          
                <iframe 
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165800.04030341068!2d18.4240553!3d-33.9248685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town!5e0!3m2!1sen!2sza!4v1644720678477!5m2!1sen!2sza"
                    width="250"
                    height="300"
                    style={{ border: 0, marginTop: '180px', marginLeft: '10px' }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
            <div className='group'>
            <div className='rectangle-5'>
                <div className='overlap'>
                    <div className='text-wrapper'>Message</div>
                    <div className='div'>Email</div>
                    <div className='text-wrapper-2'>Name</div>
                    <div className='text-wrapper-3'>Subject</div>
                    <div className='rectangle-1'>
                        <div className='rectangle-2'>
                            <div className='rectangle-3'>
                                <div className='rectangle-4'>
                                    <div className='group-wrapper'>
                                        <div className='overlap-group-wrapper'>
                                            <div className='overlap-group'>
                                                <div className='group-2'>
                                                    <div className='div-wrapper'>
                                                        <div className='text-wrapper-4'>Submit</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Contacts;
