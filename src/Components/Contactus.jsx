// ContactUs.jsx
import React, { useState } from 'react';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
    // State to manage form data (optional, but good practice)
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        emailId: '',
        queries: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send formData to an API endpoint
        console.log('Form submitted:', formData);
        alert('Form submitted! (Check console for data)');
    };

    return (
        <div className="contact-form-container">
            <h2 className="contact-form-title">Get in Touch</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="form-grid">
                    {/* Full Name */}
                    <input
                        type="text"
                        name="fullName"
                        className="form-field"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />

                    {/* Mobile Number */}
                    <input
                        type="tel"
                        name="mobileNumber"
                        className="form-field"
                        placeholder="Mobile Number"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                    />

                    {/* Email Id */}
                    <input
                        type="email"
                        name="emailId"
                        className="form-field"
                        placeholder="Email id"
                        value={formData.emailId}
                        onChange={handleChange}
                        required
                    />

                    {/* Queries */}
                    <input
                        type="text"
                        name="queries"
                        className="form-field"
                        placeholder="Queries"
                        value={formData.queries}
                        onChange={handleChange}
                    />

                    {/* Message */}
                    <textarea
                        name="message"
                        className="form-field message-field"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactUs;