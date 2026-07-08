import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
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
          setSubmitted(true);
          setStatus('Message sent successfully! I will get back to you shortly.');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Failed to send message. Please try emailing directly.');
        }
      );
  };

  return (
    <div className="contact-page-wrapper" id="contact">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>
          Whether you have an exciting opportunity, a project proposal, or just want to chat about AI & Full-Stack development, feel free to reach out!
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info-cards">
          <a href="mailto:patidar29tanish@gmail.com" className="contact-info-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div className="info-details">
              <h4>Email Address</h4>
              <span>patidar29tanish@gmail.com</span>
            </div>
          </a>

          <a href="tel:+919165849391" className="contact-info-card">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>
            <div className="info-details">
              <h4>Phone Number</h4>
              <span>+91-9165849391</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/tanish07patidar"
            target="_blank"
            rel="noreferrer"
            className="contact-info-card"
          >
            <div className="info-icon">
              <FaLinkedin />
            </div>
            <div className="info-details">
              <h4>LinkedIn Profile</h4>
              <span>linkedin.com/in/tanish07patidar</span>
            </div>
          </a>

          <a
            href="https://github.com/TechTAnish-07"
            target="_blank"
            rel="noreferrer"
            className="contact-info-card"
          >
            <div className="info-icon">
              <FaGithub />
            </div>
            <div className="info-details">
              <h4>GitHub Profile</h4>
              <span>github.com/TechTAnish-07</span>
            </div>
          </a>
        </div>

        <div className="contact-form-box">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="contact-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              className="contact-textarea"
              required
            />
            <button
              type="submit"
              className={`contact-button ${submitted ? 'submitted' : ''}`}
            >
              {submitted ? 'Message Sent ✓' : 'Send Message'}
            </button>
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
