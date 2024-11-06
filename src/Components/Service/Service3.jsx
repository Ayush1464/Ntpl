import React from 'react';
import './Service3.css'; // Make sure to import the CSS file
import { Typewriter } from 'react-simple-typewriter';

const Service3 = () => {
  return (
    <div className="service3-container">
      <div>
      <div className="service3-text-container">
        <h2 className="service3-title">Mobile App Development</h2>
        <h1 className="service3-heading">
          <Typewriter
            words={['Custom Software Development']}
            loop={false}
            cursor
            typeSpeed={100}
            delaySpeed={1000}
            deleteSpeed={50}
            className="typewriter_text"
            
            


          />
        </h1>
        <p className="service3-description">
        NTPL develops user-friendly, high-performance mobile applications tailored for both iOS and Android platforms. Our apps are designed to provide seamless user experiences and meet the needs of a rapidly growing mobile user base.
        </p>
      </div>
      <div className="service3-text-container">
        <h2 className="service3-title">Web Development company - NTPL</h2>
        <h1 className="service3-heading">
          
        <Typewriter
            words={[' We create websites that serves as lead generation machines']}
            loop={false}
            cursor
            typeSpeed={100}
            delaySpeed={1000}
            deleteSpeed={50}
             className="typewriter_text"
            


          />
         </h1>
        <p className="service3-description">
        At NTPL, we specialize in creating robust, scalable, and custom software solutions that cater to specific business needs. Our experienced team of developers uses the latest technologies and best practices to build applications that enhance efficiency and drive business growth.
        </p>
      </div>
      <div className="service3-text-container">
        <h2 className="service3-title">Information Technology Consulting</h2>
        <h1 className="service3-heading">
        <Typewriter
            words={['     IT Consulting services:Driving digital transformation']}
            loop={false}
            cursor
            typeSpeed={100}
            delaySpeed={1000}
            deleteSpeed={50}
             className="typewriter_text"
            


          />
          
      </h1>
        <p className="service3-description">
        We offer strategic IT consulting services to help businesses make informed technology decisions. Our consultants work closely with clients to identify challenges, streamline operations, and implement solutions that align with their long-term goals.
        </p>
      </div>
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
        User experience is at the core of every solution we build. Our UI/UX design team creates intuitive, visually appealing interfaces that ensure an enjoyable and effective user journey. From concept to prototype, we focus on making digital products engaging and accessible.
        </p>
      </div>

    </div>
      
      <div>
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
    </div>
  );
};

export default Service3;
