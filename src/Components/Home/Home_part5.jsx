import React, { useState } from 'react';
import "./Home_part5.css";

const Home_part5 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='home_part5'>
        <h1>Empowering Your Digital Journey</h1>
        <br />
        <p>At NTPL, we understand that navigating the digital landscape can be overwhelming. That’s why we’re here to guide you through every step, ensuring you achieve your goals with ease.</p>
        <br />
        <p className='inside_para'>From creating user-friendly websites to developing robust mobile applications, we tailor our solutions to fit your unique needs. Let us help you elevate your business in the digital realm with our dedicated support and expertise.</p>

        <div className='part5_text'>
          <div className='part5_innertext'>
            <h1>Grow Your Business with NTPL</h1>
            <br />
            <p>Our mission is simple: to help you thrive in the digital world. We take the time to understand your challenges and craft solutions that make a real difference.</p>
            <br />
            <ul>
              <li>✔️ Personalized digital strategies designed just for you.</li>
              <li>📈 Flexible solutions that scale with your business growth.</li>
              <li>📱 Effortless integration across all your platforms and devices.</li>
            </ul>
            <br />
            <p>With NTPL, you’ll gain a trusted partner who’s invested in your success, helping you harness modern technologies to make your vision a reality.</p>
          </div>
          <div className='part5_faq'>
            
            <div className='faq-item' onClick={() => toggleFAQ(0)}>
              <h3>What services does NTPL provide?</h3>
              {openIndex === 0 && (
                <p>We offer a variety of services, including web development, mobile app creation, and digital marketing, all aimed at helping you succeed online.</p>
              )}
            </div>
            <div className='faq-item' onClick={() => toggleFAQ(1)}>
              <h3>How can I get in touch with NTPL for support?</h3>
              {openIndex === 1 && (
                <p>You can reach us anytime at support@ntpl.com or fill out our contact form on our website. We're always here to help!</p>
              )}
            </div>
            <div className='faq-item' onClick={() => toggleFAQ(2)}>
              <h3>How much do NTPL's services cost?</h3>
              {openIndex === 2 && (
                <p>Our pricing is tailored to fit your project’s specific needs. Feel free to contact us for a personalized quote!</p>
              )}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home_part5;
