import React from 'react';
import './Page.css';

const Contact: React.FC = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-description">
          Get in touch with our team of tennis experts. We're here to help you elevate your game 
          and make the most of your CourtSide experience.
        </p>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>support@courtside.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+1 (555) 123-TENNIS</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🏢</div>
              <div className="contact-details">
                <h4>Office</h4>
                <p>123 Tennis Court Ave<br />Sports City, SC 12345</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div className="contact-details">
                <h4>Hours</h4>
                <p>Mon-Fri: 8AM-6PM<br />Weekends: 10AM-4PM</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              
              <div className="form-group">
                <select required>
                  <option value="">Select Topic</option>
                  <option value="support">Technical Support</option>
                  <option value="training">Training Questions</option>
                  <option value="billing">Billing & Subscriptions</option>
                  <option value="feedback">Feedback & Suggestions</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea placeholder="Your Message" rows={5} required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;