import '../styling/hero.scss';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    
<section id="gallery-1716">
  <div className="cs-container">
      <div className="cs-content">
          <h4 className="cs-title">ITSM Training Organization</h4>
          
          <p className="cs-text">
            We are a female-owned small business that has been providing IT Service Management (ITSM) education for over 15 years. Our mission is to educate and inspire individuals, teams, and organizations in the field of ITSM. Whether you’re an individual seeking training, a small team, or a large group, we have flexible options to meet your needs.
          </p>
          <a href="" className="cs-button-solid">See More</a>
      </div>
      <div className="cs-gallery">
          <picture className="cs-picture">
              
              <source media="(max-width: 600px)"
                      srcSet={assets.image7} />
              
              <source media="(min-width: 601px)"
                      srcSet={assets.image7} />
              <img loading="lazy" decoding="async"
                      src={assets.image7} alt="picture"
                      width="480" height="549" />
          </picture>
          <picture className="cs-picture">
            
              <source media="(max-width: 600px)"
                      srcSet={assets.image6} />
              
              <source media="(min-width: 601px)"
                      srcSet={assets.image6} />
              <img loading="lazy" decoding="async"
                      src={assets.image6} alt="picture"
                      width="480" height="549" />
          </picture>
          <picture className="cs-picture">
            
              <source media="(max-width: 600px)"
                      srcSet={assets.image5} />
          
              <source media="(min-width: 601px)"
                      srcSet={assets.image5}/>
              <img loading="lazy" decoding="async"
                      src={assets.image5} alt="picture"
                      width="480" height="549" />
          </picture>
      </div>
  </div>
</section>
    
  )
}

export default Hero