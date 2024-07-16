import React, {useState} from 'react';
import '../styling/services.scss';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <ul className="cs-faq-group">
        <li className="cs-faq-item">
     <button className="cs-button">
       <div  onClick={() => setIsActive(!isActive)}>
        <div className="cs-button-text">{title}</div>
        <div className="cs-indicator">{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
     </button>
    </li>
      </ul>
    );
  };
  
  export default Accordion;