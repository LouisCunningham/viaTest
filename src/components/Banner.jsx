import React from 'react';
import '../styling/banner.scss';

const Banner = () => {
  return (
    <>
    
<section id="cta-51">
  <div className="cs-container">
      <div className="cs-content">
          <span className="cs-topper">Contact Us</span>
          <h2 className="cs-title">Get It Done With Us Today</h2>
          <p className="cs-text">
            Thank you for considering ITSM Academy for your training needs. Whether you’re an individual seeking training, part of a small team, or representing a large organization, we’re here to assist you. Feel free to reach out to us using the following contact information:
          </p>
          <a href="" className="cs-button-solid">Get A Free Quote</a>
      </div>
  </div>
  
  <picture className="cs-picture">
      <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/CTA/cabinets-m.jpg" />
      <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/CTA/cabinets.jpg" />
      <img loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/CTA/cabinets.jpg" alt="cabinets" width="1920" height="1280" aria-hidden="true" />
  </picture>
</section>
             
    </>
  )
}

export default Banner