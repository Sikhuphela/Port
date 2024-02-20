import React from 'react';
import './About.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUtensils, faCode, faGlobe, faDownload } from '@fortawesome/free-solid-svg-icons';
import picImage1 from '../../src/components/Images/pic.jpg';

function About() {
  return (
    <div className='about-container'>
    <h3>About Me</h3>
    <div className="about">
      <div className="group">
      <img className="IMG" alt="Img" src={picImage1} />
       
        <div className="div">Hobbies</div>
        <div className="overlap-group">
          <div className="text-wrapper-2"><FontAwesomeIcon icon={faBook} style={{ color: "#f0edcf" }} /> Reading</div>
        </div>
        <div className="overlap">
        <div className="cooking"><FontAwesomeIcon icon={faUtensils} style={{ color: "#f0edcf" }} /> Cooking</div>
      </div>
        <div className="text-wrapper-3">
          <FontAwesomeIcon icon={faCode} style={{ color: "#f0edcf" }} />
          <span>Coding</span>
        </div>
        <div className="text-wrapper-4">Aphiwe sikhuphela</div>
        <div className="text-wrapper-5"><FontAwesomeIcon icon={faGlobe} style={{ color: "#f0edcf" }} /> Culture Studies</div>
        <div className="group-2">
       <button className="btn">Download CV</button>
          </div>

        <div className="text-wrapper-7">Interests</div>
        <div className="group-wrapper">
          <div className="div-wrapper">
            <div className="card">
              <div className="card__title">
               <p classsName="small-desc" >Energetic Software Developer Intern currently interning at ABSA, with a strong background in a software
                development learning program at Uvu Africa. Proven track record in meeting deadlines and delivering
                outstanding results. Demonstrated leadership as Workshop Coordinator for the Second African Computer
                and Human Interactions Conference in 2018. Completed National Diploma for Information Technology at
                Walter Sisulu University.</p>
                <div class="go-corner">
        <div class="go-arrow">→</div>
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

export default About;
