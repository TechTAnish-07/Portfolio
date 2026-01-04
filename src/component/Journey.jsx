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
  My journey into technology began with simple curiosity — understanding how
  websites function, how applications communicate, and how code transforms ideas
  into real-world solutions. This curiosity naturally led me to pursue Computer
  Science at IIIT Trichy, where I built a strong foundation in programming,
  algorithms, and core software engineering principles.
</p>

<p className="journey-text">
  I started by mastering <strong>C++</strong> and consistently practicing Data
  Structures and Algorithms, solving hundreds of problems across platforms like
  <strong> LeetCode</strong>, <strong> Codeforces</strong>, and
  <strong> CodeChef</strong>. This phase sharpened my logical thinking, improved
  my ability to break down complex problems, and gave me the confidence to write
  efficient and scalable code.
</p>

<p className="journey-text">
  As my interests evolved, I transitioned into full-stack development, working
  with technologies such as <strong>React</strong> and <strong>Spring Boot</strong>.
  I enjoy building end-to-end applications that focus not just on functionality,
  but also on clean architecture, performance, and user experience. One of my
  ongoing projects includes a full-stack car rental platform designed with
  real-world production considerations.
</p>

<p className="journey-text">
  Beyond academics, I’ve taken on leadership roles as a coding club coordinator
  at my college and actively participated in sports. These experiences helped me
  develop teamwork, discipline, and a growth mindset — qualities that reflect in
  the way I approach both development and problem-solving.
</p>

<p className="journey-text">
  This journey is still in progress. Every project I build, every bug I debug,
  and every concept I learn pushes me forward. I’m driven by the goal of creating
  meaningful, reliable, and scalable software that solves real problems and
  delivers genuine value.
</p>

    </div>
  );
};

export default Journey;
