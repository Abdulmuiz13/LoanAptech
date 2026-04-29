import React from 'react';
import "./Contact.css";


export default function Contact() {
    return(
        <div className='contact-page'>
            <div className='contact-container'>
                <h1>Contact Us</h1>
                <p>We are here to help reach out anytime</p>
                <div className='contact-info'>
                    <div className='info-item'><strong>Email:</strong> support@loanapp.com</div>
                    <div className='info-item'><strong>Phone:</strong> +1 (123) 456-7890</div>
                    <div className='info-item'><strong>Hours:</strong>Mon-Fri 9:00 AM - 5:00 PM</div>
                </div>
                <form className='contact-form'>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>

        </div>
    );
}