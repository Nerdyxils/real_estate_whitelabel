import React from 'react'
import ScrollAnimation from './ScrollAnimation'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <ScrollAnimation animation="fade-right">
            <div className="about-text">
              <div className="section-header">
                <h2>About Me</h2>
                <p>Your trusted real estate partner</p>
              </div>
              
              {/* Customizable content - replace with actual agent information */}
              <div className="about-description">
                <p>
                  With over a decade of experience in the real estate industry, I've helped hundreds of families 
                  find their perfect homes and investors build profitable portfolios. My deep understanding of 
                  the local market, combined with personalized service, ensures that every client receives 
                  exceptional results.
                </p>
                
                <p>
                  I specialize in luxury properties, family homes, and investment opportunities across Los Angeles 
                  and surrounding areas. Whether you're buying, selling, or investing, I'm committed to making 
                  your real estate journey smooth and successful.
                </p>
              </div>
              
              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon">🏆</div>
                  <div className="feature-text">
                    <h4>Top Producer</h4>
                    <p>Consistently ranked among top agents in the region</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">🤝</div>
                  <div className="feature-text">
                    <h4>Personal Service</h4>
                    <p>Dedicated support throughout your entire journey</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">📊</div>
                  <div className="feature-text">
                    <h4>Market Expert</h4>
                    <p>In-depth knowledge of local market trends</p>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-primary">Learn More</button>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-left">
            <div className="about-image">
              {/* Agent headshot - using real estate professional image */}
              <div className="agent-photo">
                <img 
                  src="/real_estate.png" 
                  alt="Sarah Johnson - Real Estate Agent"
                  className="agent-img"
                />
              </div>
              
              <div className="credentials">
                <div className="credential">
                  <span className="credential-label">License</span>
                  <span className="credential-value">CA DRE #01234567</span>
                </div>
                <div className="credential">
                  <span className="credential-label">Experience</span>
                  <span className="credential-value">10+ Years</span>
                </div>
                <div className="credential">
                  <span className="credential-label">Specialization</span>
                  <span className="credential-value">Luxury & Investment</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default About
