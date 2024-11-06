import React from 'react';
import './Service7.css'; // Make sure to create and import the CSS file

const testimonials = [
  {
    name: "Ayush Mahapatra",
    feedback: "This service is fantastic! It helped me achieve my business goals efficiently.",
    image: "./assets/web.png",
  },
  {
    name: "Ayush Mahapatra",
    feedback: "I had an amazing experience. Highly recommend this to everyone!",
    image: "./assets/web.png",
  },
  {
    name: "Ayush Mahapatra",
    feedback: "Professional and dedicated team. They exceeded my expectations.",
    image: "./assets/web.png",
  },
];

const Service7 = () => {
  return (
    <div className="testimonials-container1">
      <h2 className="testimonials-title1">Testimonials</h2>
      <h1 className='testimonials-heading1'>What our client says about our Digital Services</h1>
      <div className="testimonials-list1">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card1">
            <img src={testimonial.image} alt={`${testimonial.name}`} className="testimonial-image1" />
            <div className="testimonial-content1">
              <p className="testimonial-feedback1">"{testimonial.feedback}"</p>
              <p className="testimonial-name1">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service7;
