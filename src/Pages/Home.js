import React from 'react';
import './style.css';
import picImage from '../../src/components/Images/pic.jpg';


function Home() {
  return (
    <div className='home'>
      <h3> APHIWE SIKHUPHELA</h3>
      <h4>Software development</h4>
      <div className="image">
        <img className="pic" alt="Pic" src={picImage} />
      </div>
    </div>
  );
}

export default Home;
