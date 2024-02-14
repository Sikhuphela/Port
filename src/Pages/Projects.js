// src/components/Projects.js
import React from 'react'
import BankingApp from '../../src/components/Images/BankApp.PNG';

function Projects() {
  return (
    <div className='projects'>
    <h3>Projects</h3>
    <div className='box'>
    <div className='group'>
    <img className='image' alt='image'src='bankApp.PNG'/>
    <div className='text-wrapper'>BankApp</div>
    <BankingApp className='bankapp-instanse' href=''></BankingApp></div>

    </div>
    </div>
    
  )
}

export default Projects;
