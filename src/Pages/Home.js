import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css'; 
import picImage from './pic.jpg';

function Home() {
  return (
    <div className='home'>
      <p>Hello! My Name Is</p>
      <h2>APHIWE SIKHUPHELA</h2>
      <h4>A <br />Software Development</h4> 
      <div className="image">
        <img className="pic" alt="Pic" src={picImage} /> 
      </div>
      
      <Link to="/about">
        <button>ABOUT ME</button>
      </Link>
    </div>
  );
}

export default Home;
