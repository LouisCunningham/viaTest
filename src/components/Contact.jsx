import React from 'react';
import '../styling/contact.scss';

const Contact = () => {
  return (
    <>
    <section id="contact-1388">
    <div className="cs-container">
        <div className="cs-content">
            <span className="cs-topper">Contact Us</span>
            <h2 className="cs-title">Get in Touch</h2>
            <p className="cs-text">
                We are a team of passionate and creative individuals dedicated to crafting captivating designs that leave a lasting impression.
            </p>
            <ul className="cs-ul">
                <li className="cs-li">
                    <picture className="cs-icon-wrapper">
                        <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-76.svg" alt="phone icon" className="cs-icon" width="40" height="40" decoding="async" />
                    </picture>
                    <div className="cs-flex-group">
                        <span className="cs-header">Phone</span>
                        <a href="tel:888-4565-789
                        " className="cs-link">+1 (888) 4565 789
                        </a>
                    </div>
                </li>
                <li className="cs-li">
                    <picture className="cs-icon-wrapper">
                        <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mail-76.svg" alt="address icon" className="cs-icon" width="40" height="40" decoding="async" />
                    </picture>
                    <div className="cs-flex-group">
                        <span className="cs-header">Email</span>
                        <a href="mailto:Email@stitch.com" className="cs-link">Email@stitch.com</a>
                    </div>
                </li>
                <li className="cs-li">
                    <picture className="cs-icon-wrapper">
                        <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/pin-76.svg" alt="address icon" className="cs-icon" width="40" height="40" decoding="async" />
                    </picture>
                    <div className="cs-flex-group">
                        <span className="cs-header">Address</span>
                        <a href="" className="cs-link">2553 Woodbridge Lane, Boston Ware 120</a>
                    </div>
                </li>
            </ul>
        </div>
    
        <form className="cs-form" id="cs-form-1388" name="Contact Form" method="post">
            <h3 className="cs-h3">Make Appointment</h3>
            <label className="cs-label">
                Name
                <input className="cs-input" required type="text" id="name-1388" name="name" placeholder="Name" />
            </label>
            <label className="cs-label cs-email">
                Email
                <input className="cs-input" required type="email" id="email-1388" name="email" placeholder="Email" />
            </label>
            <label className="cs-label cs-phone">
                Phone
                <input className="cs-input" required type="number" id="phone-1388" name="phone" placeholder="Phone" />
            </label>
            <label className="cs-label">
                Message
                <textarea className="cs-input cs-textarea" required name="Message" id="message-1388" placeholder="Write message..."></textarea>
            </label>
            <button className="cs-button-solid cs-submit" type="submit">Send Message</button>
        </form>
    </div>
</section>
    </>
  )
}

export default Contact