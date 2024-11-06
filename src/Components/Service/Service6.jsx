import React from 'react';
import './Service3.css'; // Make sure to import the CSS file
import { Typewriter } from 'react-simple-typewriter';

const Service6 = () => {
  return (
    <div className="service3-container">
      <div className="service3-text-container">
        <h2 className="service3-title">User Experience Design</h2>
        <h1 className="service3-heading">
        <Typewriter
            words={['        Profit oriented UI/UX Design']}
            loop={false}
            cursor
            typeSpeed={100}
            delaySpeed={1000}
            deleteSpeed={50}
             className="typewriter_text"


          />
          
  </h1>
        <p className="service3-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quod
          placeat ad? Sed a fugit laboriosam voluptates laudantium praesentium
          rerum aspernatur, explicabo cupiditate voluptatibus alias, animi
          temporibus perferendis hic! Perferendis.
        </p>
      </div>
      <div className="service3-form-container">
        <h2 className="service3-form-title">Need Help With Development ?</h2>
        <form>
          <div className="service3-form-group">
          
            <input type="text" id="name" className="service3-input" placeholder="Enter your name" required />
          </div>
          <div className="service3-form-group">
           
            <input type="email" id="email" className="service3-input" placeholder="Enter your email" required />
          </div>
          <div className="service3-form-group">
           
           <input type="number" id="number" className="service3-input" placeholder="Enter your phone number" required />
         </div>
          <div className="service3-form-group">
           
            <textarea id="message" rows="4" className="service3-textarea" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="service3-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Service6;
