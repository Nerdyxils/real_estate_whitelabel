import React from 'react'
import ScrollAnimation from './ScrollAnimation'
import './Testimonials.css'

const Testimonials = () => {
  // Sample testimonials - easy to customize
  const testimonials = [
    {
      id: 1,
      name: "Jennifer & Mike Thompson",
      role: "Home Buyers",
      image: "images/client1.jpg", // Replace with actual client photos
      text: "Sarah made our home buying experience incredibly smooth. Her knowledge of the market and attention to detail helped us find our dream home within our budget. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "David Rodriguez",
      role: "Property Investor",
      image: "images/client2.jpg", // Replace with actual client photos
      text: "As an investor, I need someone who understands both the market and my goals. Sarah has helped me build a profitable portfolio with her strategic insights and professional approach.",
      rating: 5
    },
    {
      id: 3,
      name: "Lisa Chen",
      role: "Home Seller",
      image: "images/client3.jpg", // Replace with actual client photos
      text: "Selling our family home was emotional, but Sarah handled everything with care and professionalism. We got above asking price and closed in record time. She's simply the best!",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return "⭐".repeat(rating)
  }

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Real feedback from satisfied clients</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <ScrollAnimation key={testimonial.id} animation="fade-up" delay={testimonial.id * 0.1}>
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="client-photo">
                    {/* Client photo placeholder - replace with actual images */}
                    <div className="photo-placeholder">
                      <div className="placeholder-text">Client</div>
                    </div>
                  </div>
                  
                  <div className="client-info">
                    <h4 className="client-name">{testimonial.name}</h4>
                    <p className="client-role">{testimonial.role}</p>
                    <div className="rating">{renderStars(testimonial.rating)}</div>
                  </div>
                </div>
                
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        <div className="testimonials-cta">
          <p>Ready to experience exceptional service?</p>
          <button className="btn btn-primary">Get Started Today</button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
