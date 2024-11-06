import React from 'react'
import "./About22.css"
const About22 = () => {
  return (
    <div className="business-growth-section">
    <h2 className="section-title">We Are Here to Grow Your Business Exponentially</h2>
    <div className="business-growth-container">
      <div className="left-column">
        <div className="feature">
          <img src="./assets/bestinindustry.png" alt="Best in Industry Icon"  style={{maxHeight:"40px",maxWidth:"40px"}} />
          <div>
            <h3>Best In Industry</h3>
            <p>
              "Best in Industry" is a term used to describe a company, product, service, or individual that is considered the top performer or leader within a particular industry or sector.
            </p>
          </div>
        </div>
        <div className="feature">
          <img src="./assets/award.png" alt="Award Winning Icon"  style={{maxHeight:"40px",maxWidth:"40px"}} />
          <div>
            <h3>Award Winning</h3>
            <p>
              I’d be happy to help you with information about award-winning topics or answer any specific questions you have related to awards.
            </p>
          </div>
        </div>
      </div>
      <div className="center-image">
          <img
            src="./assets/ntpl_about2.jpeg"
            alt="Team Working Together"
          />
        </div>

        <div className="right-column">
          <div className="feature">
            <img src="./assets/professionalstaff.png" alt="Professional Staff Icon"  style={{maxHeight:"40px",maxWidth:"40px"}} />
            <div>
              <h3>Professional Staff</h3>
              <p>
                Professional staff typically refers to individuals who work in a professional capacity within an organization or industry. These individuals are often highly skilled or educated.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src="./assets/support.png" alt="24/7 Support Icon"  style={{maxHeight:"40px",maxWidth:"40px"}} />
            <div>
              <h3>24/7 Support</h3>
              <p>
                "24/7 support" refers to a customer service or technical support system that is available around the clock, 24 hours a day, 7 days a week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default About22