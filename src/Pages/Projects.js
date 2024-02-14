import React from 'react';
import BankingApp from '../../src/components/Images/bankApp.PNG';
import './Project.css';

function Projects() {
  return (
    <div className='projects'>
      <h3>Projects</h3>
      <div className='box'>
        <div className='group'>
          <img className='imag' alt='BankApp' src={BankingApp} />
          <div className='text-wrapper'>BankApp</div>
          <a className='bankapp-instanse' href=''>BankingApp</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
