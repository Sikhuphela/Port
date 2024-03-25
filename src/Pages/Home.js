import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'; 
import picImage from '../../src/components/Images/pic2.jpg';

function Home() {
  return (
    <div className='home'>
    <div content='homes'>
      <p>Hello! My Name Is</p>
      <h2>APHIWE SIKHUPHELA</h2>
      <h4><span className='me'>I am a</span><br/>Software Developer Intern</h4>
      </div>
      <div className="image">
        <img className="pic" alt="Pic" src={picImage} />
      </div>
      <div class="spinner"></div>
      <div class="spinner-1"></div>
      <div class="spinner-2"></div>
      <div class="spinner-3"></div>
      <Link to="/about">
        <button>ABOUT ME</button>
      </Link>
    </div>
  );
}

export default Home;
