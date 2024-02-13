// src/Pages/Contacts.js
import React from 'react'

function Contacts() {
  return (
    <div className='contacts'>
    <h3>Contact Me</h3>
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className="row" data-aos="fade-in">
              {/* Contact Info */}
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                  {/* Other contact info */}
                </div>
              </div>
              {/* Contact Form */}
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form className="php-email-form">
                  {/* Form fields */}
                  {/* Submit button */}
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    }
    
    export default Contact;
    
    </div>
  )
}

export default Contacts;

