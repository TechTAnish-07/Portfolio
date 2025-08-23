import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const validateEmail = (email) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!validateEmail(formData.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    emailjs
      .sendForm('service_awi20ay', 'template_mlrtt7x', form.current, {
        publicKey: 'mih2qcs43emd4XuSC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('Failed to send message. Try again.');
        }
      );
  };

  return (
    <div className="page-wrapper">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="contact-input"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="contact-textarea"
          />
          <button
            type="submit"
            className={`contact-button ${submitted ? 'submitted' : ''}`}
          >
            {submitted ? 'Sent!' : 'Send Message'}
          </button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
