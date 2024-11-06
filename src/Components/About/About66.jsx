import React from 'react'
import "./About66.css"

const testimonialsData = [
    {
      name: 'Martha Maldonado',
      position: 'Executive Chairman',
      text: 'The team at API DOTS is full of advanced ideas and innovative processes. They put in their all to ensure that they deliver the best digital products. My experience of working with them has been phenomenal.',
    },
    {
      name: 'Robin Walls',
      position: 'Real Estate Agent',
      text: 'I have had a very good experience in getting my website developed by the driven and professional team of APIDOTS. My friend recommended them to me, and all I can say is that from my introduction to the end of the project until they delivered it, the result has been exceptional.',
    },
    {
      name: 'Mohamed Afi',
      position: 'Virtual Assistant',
      text: 'The team of APIDOTS consists of passionate professionals who have offered flawless work and amazing assistance. I am extremely happy and satisfied with the services offered by them.',
    },
    
  ];
  

const About66 = () => {
  return (
    <div className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>
      <h3 className="section-subtitle">Hear from Our Happy Clients</h3>
      <p className="section-description">
        We work to surpass the expectations of our clients. Their appreciation drives us to do well and achieve more. Have a look at what they have to say about us.
      </p>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <img src="./assets/abaaa.jpeg" alt="" style={{maxHeight:"40px",maxWidth:"40px"}} />
              <div>
                <h4 className="client-name">{testimonial.name}</h4>
                <p className="client-position">{testimonial.position}</p>
              </div>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>


  )
}



export default About66