import React, { useEffect, useState } from 'react';
import './DSA.css';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

const DSA = () => {
  const [codolioData, setCodolioData] = useState(null);

 

  return (
    <div className="dsa-container" id="DSA">
      <h1 className="dsa-heading">🚀 DSA Journey</h1>
      <p className="dsa-summary">
        I’ve solved over <strong>1000+ DSA problems using c++ language</strong> across multiple coding platforms. These challenges have shaped my logical thinking, improved my problem-solving efficiency, and helped me become a better developer.
      </p>

      <h2 className="dsa-heading">My Real-Time Codolio DSA </h2>
      <div className="iframe-container">
        <div className="iframe-wrapper">
          <iframe
            src="https://codolio.com/profile/TAnish07"
            title="Codolio DSA Sheet"
            loading="lazy"
            className="codolio-iframe"
          ></iframe>
        </div>
      </div>

  

      <h3 className="dsa-subheading">
        Here are some of my public profiles where you can explore my coding journey 👇🏻
      </h3>

      <div className="dsa-links">
        <a href="https://codolio.com/profile/TAnish07" target="_blank" rel="noreferrer" className="dsa-link">
          <FaCode className="icon" /> Codolio Profile <FaExternalLinkAlt className="ext-icon" />
        </a>

        <a href="https://leetcode.com/TAnish07/" target="_blank" rel="noreferrer" className="dsa-link">
          <SiLeetcode className="icon" /> LeetCode <FaExternalLinkAlt className="ext-icon" />
        </a>

        <a href="https://www.codechef.com/users/tanish07" target="_blank" rel="noreferrer" className="dsa-link">
          <SiCodechef className="icon" /> CodeChef <FaExternalLinkAlt className="ext-icon" />
        </a>

        <a href="https://codeforces.com/profile/TAnish07" target="_blank" rel="noreferrer" className="dsa-link">
          <SiCodeforces className="icon" /> CodeForces <FaExternalLinkAlt className="ext-icon" />
        </a>

        <a href="https://auth.geeksforgeeks.org/user/TAnish07/practice/" target="_blank" rel="noreferrer" className="dsa-link">
          <SiGeeksforgeeks className="icon" /> GeeksForGeeks <FaExternalLinkAlt className="ext-icon" />
        </a>
      </div>
    </div>
  );
};

export default DSA;
