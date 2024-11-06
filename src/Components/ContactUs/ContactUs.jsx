import React from 'react';
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Contact Form */}
      <div className="contact-form-section">
        <h2>Contact Us</h2>
        <form action="#" method="post">
          <label htmlFor="fullname">
            Full Name <span>*</span>
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Your full name.."
            required
          />

          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
            required
          />

          <label htmlFor="contact">
            Phone <span>*</span>
          </label>
          <div className="phone-input">
            <span className="country-code">+91</span>
            <input
              type="tel"
              id="contact"
              name="contact"
              placeholder="Your contact number.."
              required
            />
          </div>

          <label htmlFor="subject">
            Sevicest <span>*</span>
          </label>
          <select id="subject" name="subject" required>
            <option value="">Select a service...</option>
            <option value="java">Web Developement</option>
            <option value="python">Custom Software Developement</option>
      
            <option value="java-fullstack">IT Consluting</option>
            <option value="python-fullstack">UI/UX</option>
          </select>

          <label htmlFor="message">
            How can we help You <span>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            rows="6"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Map and Address Section */}
      <div className="map-and-address-wrapper">
        {/* Map Section */}
        <div className="map-section">
          <h2>Find Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9157245640756!2d85.81708577629841!3d20.296059918907038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190970a50b8755%3A0xd8c567f3f8eb400b!2sBharatpur%2C%20Bhubaneswar%2C%20Odisha%20751001!5e0!3m2!1sen!2sin!4v1696592147387!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Office Address Section */}
        <div className="office-address-section">
          <h3>Our Office</h3>
          <p>NTPL Office</p>
          <p>Bharatpur, Bhubaneswar, Khurda</p>
          <p>Odisha, India</p>

          <h4>Contact Details:</h4>
          <p>
            <strong>Phone:</strong> <br />
            +91 98765 43210
          </p>
          <p>
            <strong>Email:</strong> <br />
            contact@ntpl.com
          </p>

          <h4>HR Queries:</h4>
          <p>
            Please contact: <strong>@ntpl.com</strong>
          </p>

          <h4>Write to Us:</h4>
          <p>
            We are here to assist you. Feel free to write your queries to us at 
            <strong> support@ntpl.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
