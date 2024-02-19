import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';

function Skills() {
  return (
    <section>
      <h3>My Skills</h3>
   <div className='container1' id='Skills'>
        <h1 className='heading1'>Technical Skills</h1>
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
              <span> JavaScript</span>
            </div>
            <div className='progress-line javascript'>
              <span></span>
            </div>
          </div>
          <div className='bar'>
            <FontAwesomeIcon icon={faReact} style={{ color: '#f0edcf' }} />
            <div className='info'>
              <span> ReactJs</span>
            </div>
            <div className='progress-line reactjs'>
              <span></span>
            </div>
          </div>
        </div>
      </div>


      <div class="text"> 
  <span class="ani">b</span> 
  <span class="ani">a</span>
  <span class="ani">c</span>
  <span class="ani">k</span> 
  <span class="ani">e</span> 
  <span class="ani">n</span> 
  <span class="ani">d</span>
</div>

<div class="loader">
  <div class="intern"></div>
  <div class="external-shadow">
    <div class="central"></div>
  </div>
</div>

<div class="loader-2">
  <div class="intern-2"></div>
  <div class="external-shadow-2">
    <div class="central-2"></div>
  </div>
</div>

<div class="loader-3">
  <div class="intern-3"></div>
  <div class="external-shadow-3">
    <div class="central-3"></div>
  </div>
</div>

    </section>
  );
}

export default Skills;
