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

        {/* Banking App */}
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

        {/* My First Portfolio */}
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

        {/* Financial Calculator */}
        <div className='calculator-3'>
          <img className='calculator' alt='fac' src={FAC} />
          <div className='text-wrapper-2'>Financial calculator</div>
          <div className="work-2">
            <div className="layer-2">
              <p>Constructed using the Tkinter library in Python. Finance Calculator offers an intuitive interface for users to conduct investment and bond repayment calculations. This tool aids users in efficient financial management by providing a user-friendly platform for performing these calculations.</p>
              <a href="https://github.com/Sikhuphela/Financial-Calculator.git">
                <FaGithub /> 
              </a>
            </div>
          </div>
        </div>

        {/* Tax Calculator */}
        <div className='group-4'>
          <img className='Taxc' alt='Tax' src={tax} />
          <div className='text-wrapper-3'>Tax Calculator</div>
          <div className="work-3">
            <div className="layer-3">
              <p>This software enables users to calculate their income tax for 2023 and 2024. It incorporates text fields, dropdowns, and a button for a smooth user-friendly experience. The calculated tax, rebate, and final amount are presented in a clear and succinct manner. This project demonstrates my proficiency in Java, Swing, and algorithmic problem-solving.</p>
              <a href="https://github.com/Sikhuphela/Tax-Calculator.git">
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
