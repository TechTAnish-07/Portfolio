import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
          <a className="nav-item-link" onClick={handleHomeClick}>
            Home
          </a>
          <a
            className="nav-item-link"
            onClick={() => handleSectionScroll('experience')}
          >
            Experience
          </a>
          <NavLink
            to="/FullStack"
            className={({ isActive }) =>
              isActive ? 'nav-item-link active-link' : 'nav-item-link'
            }
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <a
            className="nav-item-link"
            onClick={() => handleSectionScroll('skills')}
          >
            Skills
          </a>
          <NavLink
            to="/DSA"
            className={({ isActive }) =>
              isActive ? 'nav-item-link active-link' : 'nav-item-link'
            }
            onClick={() => setIsOpen(false)}
          >
            DSA & C++
          </NavLink>
          <NavLink
            to="/Journey"
            className={({ isActive }) =>
              isActive ? 'nav-item-link active-link' : 'nav-item-link'
            }
            onClick={() => setIsOpen(false)}
          >
            Journey
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'nav-item-link active-link' : 'nav-item-link'
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
