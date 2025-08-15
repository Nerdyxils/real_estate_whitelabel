import React from 'react'
import ScrollAnimation from './ScrollAnimation'
import './Listings.css'

const Listings = () => {
  // Sample property data - easy to customize
  const properties = [
    {
      id: 1,
      title: "Luxury Modern Villa",
      location: "Beverly Hills, CA",
      price: "$2,500,000",
      beds: "4",
      baths: "3",
      sqft: "3,200",
      image: "/luxury1.webp", // Luxury property image
      description: "Stunning contemporary villa with panoramic city views, gourmet kitchen, and resort-style pool."
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      location: "Downtown LA, CA",
      price: "$1,800,000",
      beds: "3",
      baths: "2",
      sqft: "2,400",
      image: "/luxury2.jpg", // Luxury property image
      description: "Sophisticated penthouse featuring floor-to-ceiling windows, private terrace, and premium finishes."
    },
    {
      id: 3,
      title: "Family Home with Pool",
      location: "Pasadena, CA",
      price: "$1,200,000",
      beds: "5",
      baths: "3",
      sqft: "3,800",
      image: "/luxury3.png", // Luxury property image
      description: "Spacious family home with updated kitchen, large backyard, and sparkling pool perfect for entertaining."
    },
    {
      id: 4,
      title: "Investment Property",
      location: "Santa Monica, CA",
      price: "$950,000",
      beds: "2",
      baths: "2",
      sqft: "1,600",
      image: "/luxury1.webp", // Luxury property image (reusing for variety)
      description: "Prime location investment property with high rental potential and excellent appreciation."
    }
  ]

  return (
    <section id="listings" className="listings">
      <div className="container">
        <div className="section-header">
          <h2>Featured Properties</h2>
          <p>Discover our handpicked selection of exceptional properties</p>
        </div>
        
        <div className="properties-grid">
          {properties.map((property) => (
            <ScrollAnimation key={property.id} animation="fade-up" delay={property.id * 0.1}>
              <div className="property-card">
                              <div className="property-image">
                {/* Actual property image */}
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="property-img"
                />
                <div className="property-price">{property.price}</div>
              </div>
                
                <div className="property-content">
                  <h3 className="property-title">{property.title}</h3>
                  <p className="property-location">{property.location}</p>
                  
                  <div className="property-details">
                    <span className="detail">
                      <i className="icon">🛏️</i> {property.beds} Beds
                    </span>
                    <span className="detail">
                      <i className="icon">🚿</i> {property.baths} Baths
                    </span>
                    <span className="detail">
                      <i className="icon">📏</i> {property.sqft} sq ft
                    </span>
                  </div>
                  
                  <p className="property-description">{property.description}</p>
                  
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        <div className="listings-cta">
          <button className="btn btn-secondary">View All Properties</button>
        </div>
      </div>
    </section>
  )
}

export default Listings
