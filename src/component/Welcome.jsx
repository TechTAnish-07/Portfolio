// src/component/Welcome.jsx

import React from "react";
import './Welcome.css';

const Welcome = ({ onScroll }) => (
  <div
    className="welcome-container"
    onWheel={onScroll}
  //  onTouchMove={onScroll}
  //  onClick={onScroll}
  >
    <div className="welcome-content">
      <h1 className="welcome-title">Hey, I'm Tanish Patidar👋</h1>
      <h2 className="welcome-subtitle">Welcome To My Digital Playground</h2>
      
      <p className="welcome-message">
        I'm a passionate Computer Science student who enjoys building web applications, solving complex problems, and creating impactful projects.
      </p>
      <p className="welcome-message">
        Explore my work in DSA, Full Stack Development, and personal innovations.
      </p>
      <p className="welcome-message">
        Let's collaborate and build something amazing together.
      </p>

      <p className="scroll-invite">⬇ Scroll to explore ⬇</p>
    </div>
  </div>
);

export default Welcome;
