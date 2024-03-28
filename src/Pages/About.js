import React, { useState } from 'react';
import './About.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import picImage1 from '../../src/components/Images/pic.jpg';
import cv from '../../src/Pages/CV/Aphiwe_Sikhuphela_Professional_CV.pdf.pdf';

function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'Aphiwe_Sikhuphela_CV.pdf.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const opentab = (tabname) => {
    setActiveTab(tabname);
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
          <div className="group-wrapper">
            <div className="div-wrapper">
              <div className="card">
                <div className="card__title">
                  <p className="small-desc">I am a dedicated and hardworking professional with a proven track record of 
                  consistently meeting deadlines and delivering exceptional results. I thrive as an adaptable collaborator,
                   excelling in challenging circumstances.
                     With a demonstrated ability to meet deadlines and achieve outstanding outcomes, I also possess leadership and 
                     problem-solving skills showcased during my tenure as the Workshop Coordinator for the Second African Computer
                      and Human Interactions Conference in 2018
                  </p>
                  <div className="go-corner">
                    <div className="go-arrow">+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-container">
          <div className="tab-titles">
            <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => opentab('skills')}>Skills</p>
            <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => opentab('experience')}>Experience</p>
            <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => opentab('education')}>Education</p>
          </div>
          <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id='skills'>
            <ul>
              <li><span>UI/UX</span><br />Designing Web/App interfaces</li>
              <li><span>Web Development</span><br /> Web App Development</li>
              <li><span>App development</span><br />Building android/iOS Apps</li>
            </ul>
          </div>
          <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id='experience'>
            <ul>
              <li><span>2024-Current</span><br />Software Developer at Younglings Africa</li>
              <li><span>2023-2024</span><br /> Software Developer Intern at UVU Africa</li>
            </ul>
          </div>
          <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id='education'>
            <ul>
              <li><span>2019</span><br />National Diploma for Information Technology at<br/> Walter Sisulu University</li>
              <li><span>2013</span><br /> Matriculated at Sundra Secondary School</li>
            </ul>
          </div>
          <div>
            <button className="btn" onClick={downloadCV}>Download CV</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;