import React from 'react';
import './style.css';
import picImage from '../../src/components/Images/pic2.jpg';


function Home() {
  return (
    <div className='home'>
    <p>Hello!  My Name Is</p>
      <h2> APHIWE SIKHUPHELA</h2>
      <h4>  Software development</h4>
      <div className="image">
        <img className="pic" alt="Pic" src={picImage} />
      </div>
    </div>
  );
}

export default Home;
