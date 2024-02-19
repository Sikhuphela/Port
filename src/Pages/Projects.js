import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';

function Skills() {
  return (
    <section>
      <h3>My Skills</h3>
      <div className='container1' id='Skills'>
        <h1 className='heading'>Technical Skills</h1>
        <div className='Technical-bars'>
          <div className='bar'>
            <FontAwesomeIcon icon={faHtml5} style={{ color: '#f0edcf' }} />
            <div className='info'>
              <span>HTML</span>
            </div>
            <div className='progress-line html'>
              <span></span>
            </div>
          </div>
          <div className='bar'>
            <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#f0edcf' }} />
            <div className='info'>
              <span>CSS</span>
            </div>
            <div className='progress-line css'>
              <span></span>
            </div>
          </div>
          <div className='bar'>
            <FontAwesomeIcon icon={faJs} style={{ color: '#f0edcf' }} />
            <div className='info'>
              <span>JavaScript</span>
            </div>
            <div className='progress-line javascript'>
              <span></span>
            </div>
          </div>
          <div className='bar'>
            <FontAwesomeIcon icon={faReact} style={{ color: '#f0edcf' }} />
            <div className='info'>
              <span>ReactJs</span>
            </div>
            <div className='progress-line reactjs'>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div className='container1'>
        <h1 className='heading1'>Backend Skills</h1>
        <div className='radial-bars'>
          <svg x='0px' y='0px' viewBox='0 0 200 200'>
            <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
            <circle className='path path-1' cx='100' cy='100' r='80'></circle>
          </svg>
          <div className='percentage'>70%</div>
          <div className='text'>Java</div>
        </div>

        {/* Add other backend skills here */}
      </div>
    </section>
  );
}

export default Skills;
