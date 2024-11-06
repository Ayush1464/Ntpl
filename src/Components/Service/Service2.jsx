import React from 'react';
import './Service2.css'; // Assuming you have a CSS file for the component

const Service2 = () => {
  return (
    <div className="service-container">
      {/* Cards Section */}
      <div className="cards-grid">
        {/* Card 1 */}
        <div className="card">
          <img src="./assets/ntpl_web.jpeg" alt="" />
          <b className="card-description">Web Apps.</b>
        </div>

        {/* Card 2 */}
        <div className="card">
        <img src="./assets/custom1.jpeg" alt="" />
          <b className="card-description">Custom Software Development.</b>
        </div>

        {/* Card 3 */}
        <div className="card">
        <img src="./assets/consulting.jpeg" alt="" />
          <strong><p className="card-description">IT Consulting.</p></strong>
        </div>
      </div>

      {/* Fourth Card and Form in the same row */}
      <div className="card-form-row">
        {/* Card 4 */}
        <div className="card">
        <img src="./assets/ui.jpeg" alt="" />
        <center><b className="card-description">UI/UX.</b></center>  
        </div>

        {/* Form Section */}
        <div className="form-container">
          <h2>Request a call back</h2>
          <form>
            <div className="form-group">
              
              <input type="text" id="name" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              
              <textarea id="message" rows="4" placeholder="Enter your message"></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Service2;
