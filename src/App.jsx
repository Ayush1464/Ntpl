import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Aboutus from './Components/About/Aboutus';
import ContactUs from './Components/ContactUs/ContactUs';

import Services from './Components/Service/Services';
import Project from './Components/Project/Project';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Project" element={<Project />} />
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
