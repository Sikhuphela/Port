import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'; 
import picImage from '../../src/components/Images/pic2.jpg';

function Home() {
  return (
    <div className='home'>
      <p>Hello! My Name Is</p>
      <h2>APHIWE SIKHUPHELA</h2>
      <h4>Software Development</h4>
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
