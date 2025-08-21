import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './Journey.css';

const Journey = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 600,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);

  return (
    <div className="journey-section" ref={tiltRef}>
      <h2 className="section-title">My Tech Journey</h2>

      <p className="journey-text">
        My journey into tech started with curiosity — how websites work, how apps are made, and how code shapes the world we live in. This curiosity led me to pursue a degree in Computer Science at IIIT Trichy, where I started building a strong foundation in programming, data structures, and software development.
      </p>

      <p className="journey-text">
        I began by mastering <strong>C++</strong> and solving hundreds of DSA problems on platforms like <strong>LeetCode</strong>, <strong>Codeforces</strong>, and <strong>CodeChef</strong>, developing not just coding skills, but problem-solving confidence. Over time, I moved into full-stack development, exploring technologies like <strong>React</strong> and <strong>Spring Boot</strong>, and began creating real-world web applications — including my current passion project: a car rental app.
      </p>

      <p className="journey-text">
        Apart from academics, I’ve served as a coordinator in my college coding club and received recognition in sports — a balance that helped me grow both technically and personally.
      </p>

      <p className="journey-text">
        My journey is still unfolding. Every project I build, every bug I fix, and every user I help — is a step forward. I'm excited about the future and eager to contribute to meaningful products that make life easier, smarter, and more connected.
      </p>
    </div>
  );
};

export default Journey;
