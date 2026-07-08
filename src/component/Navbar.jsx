import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const handleScroll = () => {
      const sections = [
        'profile',
        'experience',
        'projects',
        'skills',
        'dsa',
        'journey',
        'contact',
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleHomeClick = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSectionScroll = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 90;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      }
    }
  };

  const isLinkActive = (sectionId, routePath) => {
    if (location.pathname === routePath && routePath !== '/') {
      return true;
    }
    if (location.pathname === '/' && activeSection === sectionId) {
      return true;
    }
    return false;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={handleHomeClick}>
          <span>Tanish Patidar</span>
        </div>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a
            className={`nav-item-link ${
              isLinkActive('profile', '/') ? 'active-link' : ''
            }`}
            onClick={handleHomeClick}
          >
            Home
          </a>
          <a
            className={`nav-item-link ${
              isLinkActive('experience', null) ? 'active-link' : ''
            }`}
            onClick={() => handleSectionScroll('experience')}
          >
            Experience
          </a>
          <a
            className={`nav-item-link ${
              isLinkActive('projects', '/FullStack') ? 'active-link' : ''
            }`}
            onClick={() => handleSectionScroll('projects')}
          >
            Projects
          </a>
          <a
            className={`nav-item-link ${
              isLinkActive('skills', null) ? 'active-link' : ''
            }`}
            onClick={() => handleSectionScroll('skills')}
          >
            Skills
          </a>
          <a
            className={`nav-item-link ${
              isLinkActive('dsa', '/DSA') ? 'active-link' : ''
            }`}
            onClick={() => handleSectionScroll('dsa')}
          >
            DSA & CP
          </a>
          <a
            className={`nav-item-link ${
              isLinkActive('journey', '/Journey') ? 'active-link' : ''
            }`}
            onClick={() => handleSectionScroll('journey')}
          >
            Journey
          </a>
          <a
            className={`nav-item-link ${
              isLinkActive('contact', '/contact') ? 'active-link' : ''
            }`}
            onClick={() => handleSectionScroll('contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
