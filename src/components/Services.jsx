import React, { useEffect, useState } from "react";
import "../styling/services.scss";
import { assets } from "../assets/assets";
import '../main';

const Services = () => {
  const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
  for (const item of faqItems) {
      const onClick = () => {
      item.classList.toggle('active')
  }
  item.addEventListener('click', onClick)
  }
                          
  return (
    <>
      <section id="services-1666">
        <div className="cs-container">
          <div className="cs-image-group">
            <picture className="cs-picture">
              <source media="(max-width: 600px)" srcSet={assets.image4} />

              <source media="(min-width: 601px)" srcSet={assets.image4} />
              <img
                loading="lazy"
                decoding="async"
                src={assets.image4}
                alt="people standing"
                width="605"
                height="690"
              />
            </picture>

            <img
              className="cs-floater"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/white-swirl.svg"
              alt="graphic"
              loading="lazy"
              decoding="async"
              height="710"
              aria-hidden="true"
              width="690"
            />
          </div>
          <div className="cs-content">
            <span className="cs-topper">Our Training</span>
            <h2 className="cs-title">
              Elevate Your ITSM Skills with Our Comprehensive Training
            </h2>
            <p className="cs-text">
              At viaSolutions, we are passionate about empowering individuals,
              teams, and organizations with the knowledge and skills needed to
              excel in IT Service Management. Whether you’re a seasoned IT
              professional or just starting your journey, our accredited and
              sustainable training programs will equip you with the tools to
              succeed.
            </p>

            <ul className="cs-faq-group">
         <li className="cs-faq-item" >
                <button className="cs-button">
                  <img
                    className="cs-icon"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/computer-gold.svg"
                    alt="icon"
                    width="32"
                    height="32"
                  />
                  <span className="cs-button-text">On-Demand e-Training</span>
                  <span className="cs-indicator" aria-hidden="true"></span>
                </button>
                 <p className="cs-item-p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  sapiente placeat enim molestias quam, illum ullam ipsa
                  repellat, necessitatibus quis cumque voluptatum nesciunt. Quia
                  possimus est in recusandae saepe nostrum.
                </p>
              </li>
              <li className="cs-faq-item" >
                <button className="cs-button">
                  <img
                    className="cs-icon"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/calendar-gold.svg"
                    alt="icon"
                    width="32"
                    height="32"
                  />
                  <span className="cs-button-text">Hybrid e-Training</span>
                  <span className="cs-indicator" aria-hidden="true"></span>
                </button>
                 <p className="cs-item-p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  sapiente placeat enim molestias quam, illum ullam ipsa
                  repellat, necessitatibus quis cumque voluptatum nesciunt. Quia
                  possimus est in recusandae saepe nostrum.
                </p>
              </li>
              <li className="cs-faq-item" >
                <button className="cs-button">
                  <img
                    className="cs-icon"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/map-pin-gold.svg"
                    alt="icon"
                    width="32"
                    height="32"
                  />
                  <span className="cs-button-text">
                    Live Instructor e-Training
                  </span>
                  <span className="cs-indicator" aria-hidden="true"></span>
                </button>
                <p className="cs-item-p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  sapiente placeat enim molestias quam, illum ullam ipsa
                  repellat, necessitatibus quis cumque voluptatum nesciunt. Quia
                  possimus est in recusandae saepe nostrum.
                </p> 
              </li>
              <li className="cs-faq-item" >
                <button className="cs-button">
                  <img
                    className="cs-icon"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/map-pin-gold-2.svg"
                    alt="icon"
                    width="32"
                    height="32"
                  />
                  <span className="cs-button-text">
                    Onsite ClassNameroom Training
                  </span>
                  <span className="cs-indicator" aria-hidden="true"></span>
                </button>
                  <p className="cs-item-p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  sapiente placeat enim molestias quam, illum ullam ipsa
                  repellat, necessitatibus quis cumque voluptatum nesciunt. Quia
                  possimus est in recusandae saepe nostrum.
                </p> 
              </li>
            </ul>
            <a href="" className="cs-button-solid">
              View All Courses
            </a>
          </div>
        </div>
       
      </section>
    </>
  );
};

export default Services;
