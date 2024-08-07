import '../styling/navbar.scss';
import { assets } from '../assets/assets';
import { useState } from 'react';


const Navbar = () => {
    const [activeItem, setActiveItem] = useState("home");

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
      };

      const [isNavActive, setNavActive] = useState(false);
      const [isDropdownActive, setDropdownActive] = useState(Array(3).fill(false)); // Adjust based on number of dropdowns
    
      // Toggle hamburger menu and navbar
      const toggleNavbar = () => {
        setNavActive(!isNavActive);
      };
    
      // Toggle dropdown
      const toggleDropdown = (index) => {
        setDropdownActive((prev) => {
          const newDropdowns = [...prev];
          newDropdowns[index] = !newDropdowns[index];
          return newDropdowns;
        });
      };
                                               

  return (
   <>
   <header id="cs-navigation" className={`navbar ${isNavActive ? 'cs-active' : ''}`}>
  <div className="cs-container">
     
    <a href="" className="cs-logo" aria-label="back to home">
        <img src={assets.image8} alt="logo" width="210" height="29" aria-hidden="true" decoding="async" />
    </a>
      <nav className="cs-nav" role="navigation">
          
          <button  className={`cs-toggle ${isNavActive ? 'cs-active' : ''}`}
          onClick={toggleNavbar}
          aria-expanded={isNavActive} aria-label="mobile menu toggle">
              <div className="cs-box" aria-hidden="true">
                  <span className="cs-line cs-line1" aria-hidden="true"></span>
                  <span className="cs-line cs-line2" aria-hidden="true"></span>
                  <span className="cs-line cs-line3" aria-hidden="true"></span>
              </div>
          </button>
         
          <div className="cs-ul-wrapper">
              <ul id="cs-expanded" className="cs-ul" aria-expanded={isNavActive}>
                  <li className="cs-li">
                      <a href="#gallery-1716" className={`cs-li-link ${activeItem === 'home' ? 'cs-active' : ''}`} onClick={() => handleItemClick('home')}>
                          Home
                      </a>
                  </li>
                  <li className="cs-li">
                      <a href="#services-1628" className={`cs-li-link ${activeItem === 'about' ? 'cs-active' : ''}`} onClick={() => handleItemClick('about')}>
                          About
                      </a>
                  </li>
                  <li className="cs-li">
                      <a href="#training" className={`cs-li-link ${activeItem === 'training' ? 'cs-active' : ''}`} onClick={() => handleItemClick('training')}>
                          Training
                      </a>
                  </li>
                  <li className="cs-li">
                      <a href="#contact-1388" className={`cs-li-link ${activeItem === 'contact' ? 'cs-active' : ''}`} onClick={() => handleItemClick('contact')}>
                          Contact
                      </a>
                  </li>
                  <li className="cs-li">
                      <a href="" className={`cs-li-link ${activeItem === 'faq' ? 'cs-active' : ''}`} onClick={() => handleItemClick('faq')}>
                          FAQ
                      </a>
                  </li>
              </ul>
          </div>
      </nav>
      <a href="" className="cs-button-solid cs-nav-button">Contact Us</a>
      
  </div>
</header>
   </>
  )
}

export default Navbar