import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedNav, setClickedNav] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToHomeSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  useEffect(() => {
    if (clickedNav) {
      document.title = clickedNav;
    }
  }, [clickedNav]);

  useEffect(() => {
    const handleHashLink = () => {
      if (location.pathname === '/' && window.location.hash) {
        const sectionId = window.location.hash.substring(1);
        setTimeout(() => {
          scrollToHomeSection(sectionId);
        }, 100);
      }
    };
    handleHashLink();
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo" onClick={() => navigate('/')}>
          Tanish Portfolio
        </div>

        {/* Hamburger Menu */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink
            to="/#profile"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => {
              setClickedNav('Home');
              setIsOpen(false);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/DSA"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => {
              setClickedNav('DSA');
              setIsOpen(false);
            }}
          >
            DSA
          </NavLink>
          <NavLink
            to="/FullStack"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => {
              setClickedNav('FullStack');
              setIsOpen(false);
            }}
          >
            FullStack
          </NavLink>
          <NavLink
            to="/Journey"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => {
              setClickedNav('Journey');
              setIsOpen(false);
            }}
          >
            Journey
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => {
              setClickedNav('Contact');
              setIsOpen(false);
            }}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
