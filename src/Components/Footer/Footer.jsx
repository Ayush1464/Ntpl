import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        {/* Left: Brand Name */}
        <div className='footer-brand'>
          <h2>NTPL</h2>
          <p>
            NTPL is a technology-driven company committed to providing
            innovative solutions to enhance business efficiency and drive success.
          </p>
        </div>

        {/* Middle: Contact Information */}
        <div className='footer-contact'>
          <h3>Contact</h3>
          <p>Email: contact@ntpl.com</p>
          <div className='underline'>

          </div>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Innovation Street, Tech City</p>
        </div>

        {/* Right: Quick Links */}
        <div className='footer-links'>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Nilachala Smart Tech</a></li>
            <li><a href="#home">Who We Are</a></li>
            <li><a href="#services">What We Do</a></li>
            <li><a href="#projects">Our Impact</a></li>
            <li><a href="#contact">Get In Touch</a></li>
          </ul>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className='footer-line' />

      {/* Copyright Section */}
      <div className='footer-bottom'>
        <p>© 2024 NTPL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
