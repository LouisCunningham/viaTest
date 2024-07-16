import React, {useState} from 'react';
import '../styling/footer.scss';
import { assets } from '../assets/assets';
const Footer = () => {

    const [activeItem, setActiveItem] = useState("home");

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
      };
  return (


    
    <>
    <footer id="cs-footer-269">
  <div className="cs-container">

      <div className="cs-logo-group">
        <a href="" className="cs-logo" aria-label="back to home">
            <img src={assets.image8} alt="logo" width="240" height="59" aria-hidden="true" decoding="async" />
        </a>
          
          <p className="cs-text">
              Etiam nulla ultrices consequat, posuere nulla. Ac iaculis lorem phasellus ultrices adipiscing viverra sit ut quam. In diam mattis elementum diam at sed ultricies.
          </p>
      </div>
      
      <ul className="cs-nav">
          <li className="cs-nav-li">
              <span className="cs-header">Sitemap</span>
          </li>
          <li className="cs-nav-li">
              <a className={`cs-nav-link ${activeItem === 'home' ? 'cs-active' : ''}`} onClick={() => handleItemClick('home')} href="#gallery-1716">Home</a>
          </li>
          <li className="cs-nav-li">
              <a className={`cs-nav-link ${activeItem === 'about' ? 'cs-active' : ''}`} onClick={() => handleItemClick('about')} href="#services-1628">About</a>
          </li>
          <li className="cs-nav-li">
              <a className={`cs-nav-link ${activeItem === 'training' ? 'cs-active' : ''}`} onClick={() => handleItemClick('training')} href="#services-1666">Training</a>
          </li>
          <li className="cs-nav-li">
              <a className={`cs-nav-link ${activeItem === 'contact' ? 'cs-active' : ''}`} onClick={() => handleItemClick('contact')} href="#contact-1388">Contact</a>
          </li>
          <li className="cs-nav-li">
              <a className={`cs-nav-link ${activeItem === 'faq' ? 'cs-active' : ''}`} onClick={() => handleItemClick('faq')} href="">F.A.Q</a>
          </li>
      </ul>
 
      <ul className="cs-contact">
          <li className="cs-nav-li">
              <span className="cs-header">Contact</span>
          </li>
          <li className="cs-contact-li">
              <a className="cs-contact-link" href="tel: 123-456-7890">(123) 456-7890</a>
          </li>
          <li className="cs-contact-li">
              <a className="cs-contact-link" href="mailto:info@codestitch.com">info@company.com</a>
          </li>
          
          <li className="cs-contact-li cs-social-group">
              <div className="cs-social">
                  <a className="cs-social-link" aria-label="visit google profile" href="">
                      <img className="cs-social-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Social/google.svg" alt="google" width="11" height="11" />
                  </a>
                  <a className="cs-social-link" aria-label="visit facebook profile" href="">
                      <img className="cs-social-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Social/Facebook.svg" alt="facebook" width="6" height="11" />
                  </a>
                  <a className="cs-social-link" aria-label="visit instagram profile" href="">
                      <img className="cs-social-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Social/instagram.svg" alt="instagram" width="11" height="11" />
                  </a>
              </div>
          </li>
      </ul>
  </div>
</footer>
    </>
  )
}

export default Footer