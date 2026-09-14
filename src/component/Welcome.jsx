import React from "react";
import "./Welcome.css";

const Welcome = ({ onScroll }) => (
  <div
    className="welcome-container"
    onWheel={onScroll}
    onTouchMove={onScroll}
  >
    <div className="welcome-content">
      <span className="welcome-badge">AI & FULL-STACK SYSTEMS ENGINEER</span>
      <h1 className="welcome-title">Hey, I'm Tanish Patidar</h1>
      <h2 className="welcome-subtitle">Welcome To My Digital Playground</h2>

      <p className="welcome-message">
        I'm a B.Tech Computer Science student at IIIT Tiruchirappalli and an AI & Backend Development Intern at 47Billion.
      </p>
      <p className="welcome-message">
        I engineer intelligent RAG architectures, real-time collaboration platforms, and solve competitive programming challenges (1600+ problems solved).
      </p>

      <div className="welcome-cta-area">
        <button
          type="button"
          className="enter-portfolio-btn"
          onClick={onScroll}
        >
          Explore Portfolio
        </button>
        <p className="scroll-invite">Or scroll / swipe to enter</p>
      </div>
    </div>
  </div>
);

export default Welcome;
