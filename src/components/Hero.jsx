import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {/* Luxury home background image */}
        <div className="hero-image" style={{ backgroundImage: 'url(images/luxury1.webp)' }}>
          <div className="hero-overlay"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            {/* Customizable headline - replace [Agent Name] with actual name */}
            <h1 className="hero-title">
              Find Your Dream Home with <span className="accent">Sarah Johnson</span>
            </h1>
            <p className="hero-subtitle">
              Discover exceptional properties in the most desirable neighborhoods. 
              Let me guide you through your real estate journey with expertise and dedication.
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary">View Properties</button>
              <button className="btn btn-secondary">Get in Touch</button>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">150+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Properties Sold</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
