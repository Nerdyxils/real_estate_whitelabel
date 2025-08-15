import React from 'react'
import ScrollAnimation from './ScrollAnimation'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <ScrollAnimation animation="fade-up" delay={0.1}>
            <div className="footer-section">
              <div className="footer-logo">
                <h3>Real Estate Pro</h3>
                <p>Your trusted partner in real estate</p>
              </div>
              
              <div className="footer-social">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="Facebook">📘</a>
                  <a href="#" className="social-icon" aria-label="Instagram">📷</a>
                  <a href="#" className="social-icon" aria-label="LinkedIn">💼</a>
                  <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={0.2}>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#listings">Listings</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={0.3}>
            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#listings">Buy Properties</a></li>
                <li><a href="#listings">Sell Properties</a></li>
                <li><a href="#listings">Investment Properties</a></li>
                <li><a href="#listings">Property Management</a></li>
              </ul>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={0.4}>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <p>📍 123 Real Estate Blvd<br />Los Angeles, CA 90210</p>
                <p>📞 (310) 555-0123</p>
                <p>✉️ sarah@realestatepro.com</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Real Estate Pro. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
