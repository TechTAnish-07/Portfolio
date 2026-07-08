import React from 'react';
import './Profile.css';
import profileImage from '../assets/Profileimg.jpeg';
import resumePDF from '../assets/ResumeTanish.pdf';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiNetlify, SiGmail } from 'react-icons/si';
import { MdPhone } from 'react-icons/md';

const Profile = () => {
  return (
    <div className="profile-container" id="profile">
      <div className="profile-wrapper">
        <div className="profile-text-section">
          <div className="hero-badges">
            <span className="hero-badge badge-ai">⚡ AI & Backend Development Intern @ 47Billion</span>
            <span className="hero-badge badge-edu">🎓 B.Tech CSE @ IIIT Tiruchirappalli</span>
          </div>

          <h1 className="profile-heading">Tanish Patidar</h1>
          <p className="profile-subheading">
            Full-Stack & AI Systems Engineer | Problem Solver (1600+ Solved)
          </p>

          <p className="profile-text">
            I build high-performance <strong>AI-driven applications</strong>, <strong>RAG architectures</strong>, and robust <strong>Spring Boot & React</strong> systems. Passionate about algorithms, scalable system architecture, and real-time collaboration platforms.
          </p>

          <p className="profile-text">
            Currently working at <strong>47Billion</strong> developing intelligent QA bots with LangChain & vector databases, and recently reached the <strong>National Semi-Finals in Flipkart Grid 7.0</strong>.
          </p>

          <div className="profile-stats-grid">
            <div className="stat-pill">
              <div className="stat-value">1600+</div>
              <div className="stat-label">Problems Solved</div>
            </div>
            <div className="stat-pill">
              <div className="stat-value">1792</div>
              <div className="stat-label">LeetCode Rating</div>
            </div>
            <div className="stat-pill">
              <div className="stat-value">3-Star</div>
              <div className="stat-label">CodeChef (1672)</div>
            </div>
            <div className="stat-pill">
              <div className="stat-value">7.6</div>
              <div className="stat-label">IIIT CSE CGPA</div>
            </div>
          </div>

          <div className="profile-actions">
            <a
              href={resumePDF}
              download="Tanish_Patidar_Resume.pdf"
              className="resume-btn"
            >
              <FaDownload size={18} />
              Download Resume
            </a>

            <div className="social-links">
              <a
                href="https://github.com/TechTAnish-07"
                target="_blank"
                rel="noreferrer"
                title="GitHub: TechTAnish-07"
                className="social-icon"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/tanish07patidar"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn: tanish07patidar"
                className="social-icon"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:patidar29tanish@gmail.com"
                title="Email: patidar29tanish@gmail.com"
                className="social-icon"
              >
                <SiGmail size={20} color="#EA4335" />
              </a>
              <a
                href="tel:+919165849391"
                title="Call: +91-9165849391"
                className="social-icon"
              >
                <MdPhone size={22} color="#4CAF50" />
              </a>
            </div>
          </div>
        </div>

        <div className="profile-image-section">
          <div className="image-glow-ring">
            <img src={profileImage} alt="Tanish Patidar" className="profile-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
