import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src="./assets/nt.jpeg" alt="" />
      </div>
      <div className='menu'>
        <div className='hamburger' onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
        <div className='social_icons'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='icon facebook'><i className='bx bxl-facebook-circle'></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='icon twitter'><i className='bx bxl-twitter'></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='icon linkedin'><i className='bx bxl-linkedin'></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='icon instagram'><i className='bx bxl-instagram'></i></a>
        </div>
        <div className={`items ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Nilachala Smart Tech</Link>
          <Link to="/Aboutus" className={location.pathname === '/Aboutus' ? 'active' : ''}>Who We Are</Link>
          <Link to="/Services" className={location.pathname === '/Services' ? 'active' : ''}>What We Do</Link>
          <Link to="/Project" className={location.pathname === '/Project' ? 'active' : ''}>Our Impact</Link>
          <Link to="/ContactUs" className={location.pathname === '/ContactUs' ? 'active' : ''}>Get In Touch</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
