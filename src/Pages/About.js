import React from 'react';
import './About.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUtensils, faCode, faGlobe } from '@fortawesome/free-solid-svg-icons';
import picImage1 from '../../src/components/Images/pic.jpg';
import cv from '../../src/Pages/CV/Aphiwe_Sikhuphela_Professional_CV.pdf.pdf';



function About() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'Aphiwe_Sikhuphela_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='about-container'>
      <h3>About Me</h3>
      <div className="about">
        <div className="group">
          <div className="card-2">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner">
              <img className="IMG" alt="Img" src={picImage1} />
            </div>
          </div>
          <div className="div">Hobbies</div>
          <div className="overlap-group">
            <div className="text-wrapper-2"><FontAwesomeIcon icon={faBook} style={{ color: "#f0edcf" }} /> Reading</div>
            <div className="cooking"><FontAwesomeIcon icon={faUtensils} style={{ color: "#f0edcf" }} /> Cooking</div>
          </div>
          <div className="text-wrapper-3">
            <FontAwesomeIcon icon={faCode} style={{ color: "#f0edcf" }} /> Coding
          </div>
          <div className="text-wrapper-5">
            <FontAwesomeIcon icon={faGlobe} style={{ color: "#f0edcf" }} /> Culture Studies
          </div>
          <div className="group-2"></div>
          <div className="text-wrapper-7">Interests</div>
          <div className="group-wrapper">
            <div className="div-wrapper">
              <div className="card">
                <div className="card__title">
                  <p className="small-desc">Energetic Software Developer Intern currently interning at ABSA, with a strong background in a software development learning program at Uvu Africa. Proven track record in meeting deadlines and delivering outstanding results. Demonstrated leadership as Workshop Coordinator for the Second African Computer and Human Interactions Conference in 2018. Completed National Diploma for Information Technology at Walter Sisulu University.</p>
                  <div className="go-corner">
                    <div className="go-arrow">+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          <button className="btn" onClick={downloadCV}>Download CV</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;