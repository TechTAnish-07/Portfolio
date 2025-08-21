import React from 'react';
import './Profile.css';
import profileImage from '../assets/Profileimg.jpeg'; // Adjust path if needed
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiNetlify, SiGmail } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
const Profile = () => {
    return (
        <div className="profile-container" id="Profile">
            <div className="profile-wrapper">
                <div className="profile-text-section">
                    <h1 className="profile-heading">👋 Hey, I'm Tanish Patidar</h1>
                    <p className="profile-subheading"> CSE Student @ IIIT Trichy </p>

                    <p className="profile-text">
                        I'm a passionate <strong>Full Stack Developer</strong> and <strong>Problem Solver</strong> who loves turning ideas into working software.
                    </p>

                    <p className="profile-text">
                        Outside of tech, I’m a sports enthusiast and football lover ⚽ !.! Enjoys balancing my academic and personal interests.
                    </p>

                    <p className="profile-footer-text">
                        🚀 Let's connect and build something amazing together!
                    </p>

                    {/* Social Links */}
                   
                    <div className="social-links">
                        <a
                            href="https://github.com/TechTAnish-07"
                            target="_blank"
                            rel="github"
                            title='github'
                            className="social-icon"
                        >
                            <FaGithub size={46} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tanish07patidar-/"
                            target="_blank"
                            rel="linkdin"
                            title='linkedin'
                            className="social-icon"
                        >
                            <FaLinkedin size={46} />
                        </a>
                        <a
                            href="https://app.netlify.com/teams/tanish007-gltich/projects"
                            target="_blank"
                            rel="netlify"
                            title='netlify'
                            className="social-icon"
                        >
                            <SiNetlify size={46} />
                        </a>
                        <div>
                            <a href="mailto: patidar29tanish@gmail.com" className="email-link" title='gmail'> 
                                <SiGmail size={46} color="#D14836" />
                                
                            </a>
                        </div>
                        <a href="tel:9165849391" className="phone-link" title='phone'>
                            <MdEmail size={46} color="#4CAF50" />
                        </a>
                    </div>
                </div>

                <div className="profile-image-section">
                    <img src={profileImage} alt="Tanish Patidar" className="profile-image" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
