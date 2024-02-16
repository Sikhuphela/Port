import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

function Skills() {
  return (
    <section>
      <div className='skills'>
        <h3>My Skills</h3>

        <h1 className='heading'>Frontend skills</h1>
        <div className='Technical-bas'>
          <div className='bar'> <FontAwesomeIcon icon={faHtml5} />
            <div className='info'>
              <span>HTML</span>
            </div>
            <div className='progress-line html'>
              <span></span>
            </div>
          </div>
          <div className='bar'><FontAwesomeIcon icon={faCss3Alt} /> 
            <div className='info'>
              <span>CSS</span>
            </div>
            <div className='progress-line css'>
              <span></span>
            </div>
          </div>
          <div className='bar'><FontAwesomeIcon icon={faJs} />
            <div className='info'>
              <span> JavaScript</span>
            </div>
            <div className='progress-line javascript'>
              <span></span>
            </div>
          </div>
          <div className='bar'><FontAwesomeIcon icon={faReact} />
            <div className='info'>
              <span> ReactJs</span>
            </div>
            <div className='progress-line reactjs'>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
