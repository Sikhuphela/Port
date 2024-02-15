import React from 'react';
import BankingApp from '../../src/components/Images/bankApp.PNG';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

function Projects() {
  return (
    <div className='projects'>
      <h3>Projects</h3>
      <div className='box'>
        <div className='group'>
          <img className='imag' alt='BankApp' src={BankingApp} />
          <div className='text-wrapper'>BankApp</div>
          <div className="work">
            <div className="layer">
              <p>User-friendly online banking application designed for easy access  for financial
               management using Python.Users register receive number and PIN for secure access.
              The application allows users to check balance, make secure deposits,and
               conveniently withdraw funds, ensuring a safe and efficient banking experience.</p>
              <a href="https://github.com/Sikhuphela/Banking-App.git">
                <FaGithub /> {/* GitHub icon */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
