import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <div className='home_service'>
      <div className='service_home'>
        <h2>Service</h2>

        <div className='service_cards'>
        {/* Six individual service cards */}
        <div className='service_card'>
          <div className='inner_service'>
            <img src="./assets/software.png" alt="" />
            <h1>service1</h1>
          </div>
          <p>Description for Service 1</p>
        </div>
        <div className='service_card'>
          <div className='inner_service'>
            <img src="./assets/software.png" alt="" />
            <h1>service1</h1>
          </div>
          <p>Description for Service 1</p>
        </div>
        <div className='service_card'>
          <div className='inner_service'>
            <img src="./assets/software.png" alt="" />
            <h1>service1</h1>
          </div>
          <p>Description for Service 1</p>
        </div>
        <div className='service_card'>
          <div className='inner_service'>
            <img src="./assets/software.png" alt="" />
            <h1>service1</h1>
          </div>
          <p>Description for Service 1</p>
        </div>
        <div className='service_card'>
          <div className='inner_service'>
            <img src="./assets/software.png" alt="" />
            <h1>service1</h1>
          </div>
          <p>Description for Service 1</p>
        </div>
        <div className='service_card'>
          <div className='inner_service'>
            <img src="./assets/software.png" alt="" />
            <h1>service1</h1>
          </div>
          <p>Description for Service 1</p>
        </div>
        
      </div>
      </div>
      
    </div>
  );
};

export default Service;
