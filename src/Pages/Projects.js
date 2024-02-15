import React from 'react';
import BankingApp from '../../src/components/Images/bankApp.PNG';
import Portfolio from '../../src/components/Images/portfolio.png';
import FAC from '../../src/components/Images/Financial-calculator.PNG';
import tax from '../../src/components/Images/TaxCalculator.png';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

function Projects() {
  return (
    <div className='projects'>
      <h3>Projects</h3>
      <div className='box'>
        <div className='group'>
          <img className='imag' alt='BankApp' src={BankingApp} />
          <div className='text-wrapper'>Banking App</div>
          <div className="work">
            <div className="layer">
              <p>User-friendly online banking application designed for easy access for financial management using Python. Users register receive number and PIN for secure access. The application allows users to check balance, make secure deposits, and conveniently withdraw funds, ensuring a safe and efficient banking experience.</p>
              <a href="https://github.com/Sikhuphela/Banking-App.git">
                <FaGithub /> {/* GitHub icon */}
              </a>
            </div>
          </div>
        </div>

        <div className='group-2'>
  <img className='photo' alt='Portfolio' src={Portfolio} />
  <div className='text-wrapper-1'>My First Portfolio</div>
  <div className="work-1">
    <div className="layer-1">
      <p>User-friendly online portfolio showcasing my projects and skills. Designed with HTML, CSS, and JavaScript. Includes project descriptions, links to GitHub repositories, and contact information.</p>
      <a href="https://github.com/Sikhuphela/Portfolio.git">
        <FaGithub /> {/* GitHub icon */}
      </a>
    </div>
  </div>
</div>
<div className='calculator-3'>
  <img className='calculator' alt='fac' src={FAC} />
  <div className='text-wrapper-2'>Financial calculator</div>
  <div className="work-2">
    <div className="layer-2">
      <p>User-friendly description of project 3.</p>
      <a href="https://github.com/yourusername/project3.git">
        <FaGithub /> 
      </a>
    </div>
  </div>
</div>

<div className='group-4'>
  <img className='Taxc' alt='Tax' src={tax} />
  <div className='text-wrapper-3'>Tax Calculator</div>
  <div className="work-3">
    <div className="layer-3">
      <p>User-friendly description of project 4.</p>
      <a href="https://github.com/yourusername/project4.git">
        <FaGithub /> 
      </a>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default Projects;
