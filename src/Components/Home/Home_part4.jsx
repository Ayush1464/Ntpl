import React from 'react';
import "./Home_part4.css";

const Home_part4 = () => {
  return (
    <div className='main_container'>
      <div className='home_part4'>
        <div className='part4_text'>
          <h1>Electrical Services</h1>
          <br />
          <br />
          <p>We offer a comprehensive range of electrical services to meet your residential and commercial needs. Our team of certified electricians is committed to providing high-quality workmanship and excellent customer service.</p>
          <br />
          <div className='points'>
            <i className='bx bxs-chevron-right-square'></i>
            <p>Installation of lighting fixtures, outlets, and switches for homes and businesses.</p>
          </div>
          <br />
          <div className='points'>
            <i className='bx bxs-chevron-right-square'></i>
            <p>Electrical maintenance services to ensure safety and efficiency.</p>
          </div>
          <br />
          <div className='points'>
            <i className='bx bxs-chevron-right-square'></i>
            <p>Emergency electrical repairs available 24/7 to address urgent issues.</p>
          </div>
          <br />
          <div className='points'>
            <i className='bx bxs-chevron-right-square'></i>
            <p>Upgrades to electrical panels and circuits to support modern appliances.</p>
          </div>
          <br />
          <div className='points'>
            <i className='bx bxs-chevron-right-square'></i>
            <p>Energy-efficient solutions, including LED retrofitting and smart home installations.</p>
          </div>
          <br />
          <br />
          <p>Need any help? <span className='contact'>Contact us now</span></p>
        </div>
        <img src="./assets/ntpl_elec.jpeg" alt="Electrical Services" />
      </div>
    </div>
  )
}

export default Home_part4;
