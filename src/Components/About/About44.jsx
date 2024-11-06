import React from 'react';
import "./About44.css";

const About44 = () => {
    
  return (
    <div className="container">
      <h1 className="title">Our Core Values</h1>
      <p className="description">
        At Nilachala Technology Pvt Ltd, our core values are the foundation of our company culture and the guiding principles that shape our actions. We believe that these values not only differentiate us in the market but also enhance our commitment to exceptional customer service. Below, we outline the values that guide our behavior and decision-making, serving as our operational blueprint.
      </p>
      <button className="consultation-button">Schedule Your Free Consultation</button>

      <div className="values-grid">
        <ValueCard icon="🌟" title="Collaboration" description="Collaboration is at the heart of our success. We believe that by working together, we can overcome any challenge. Our team's synergy ensures that we consistently achieve outstanding results for our clients." />
        <ValueCard icon="🚀" title="Innovation" description="Innovation drives us forward. We are committed to exploring new ideas and leveraging cutting-edge technologies to provide creative solutions that meet the evolving needs of our clients." />
        <ValueCard icon="🔍" title="Integrity" description="Integrity is essential in everything we do. We uphold honesty and transparency in our interactions, ensuring that our clients can trust us to deliver on our promises." />
        <ValueCard icon="📞" title="Responsive Support" description="Our clients deserve the best support, and we are here for them 24/7. Whether it's a question or a concern, our team is always ready to assist, ensuring a seamless experience throughout the project lifecycle." />
      </div>
    </div>
  )
}

function ValueCard({ icon, title, description }) {
  return (
    <div className="value-card">
      <div className="icon">{icon}</div>
      <h2 className="value-title">{title}</h2>
      <p className="value-description">{description}</p>
    </div>
  );
}

export default About44;
