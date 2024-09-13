import React from 'react';
import '../styles/contactform.css';  

function ContactForm() {
    return (
        <div className="contact-form-section">
            <h2 style={{ textDecoration: 'underline' }}><strong><center>Let's Talk</center></strong></h2>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactForm;
