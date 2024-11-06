import React from 'react';

import "./Hero.css";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='hero_img'>
        <img src="./assets/Ntplhero.jpeg" alt="" />
        <div className='hero_text'>
          <div className='home_hero'>
            <h1>Your Trusted Partner in <span>Innovative Software Solutions</span> to <span>Elevate Your Business</span>.</h1>
          </div>
          <Link to="/ContactUs">
  <button>Connect with us </button>
</Link>


     
        </div>
      </div>
    </div>
  )
}

export default Hero;
