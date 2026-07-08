import React from 'react';
import { motion } from 'framer-motion';
import './DSA.css';
import { FaCode, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

const DSA = () => {
  const achievements = [
    {
      platform: "LeetCode",
      icon: <SiLeetcode color="#F89F1B" />,
      rating: "Max Rating: 1792",
      desc: "Solved 850+ problems with focus on advanced algorithmic techniques.",
      highlights: [
        "Top 3% in Weekly Contest 445 (Rank 702 / 25k)",
        "Advanced Dynamic Programming & Graph Algorithms",
      ],
      link: "https://leetcode.com/u/TAnish_07/",
    },
    {
      platform: "CodeChef",
      icon: <SiCodechef color="#86513A" />,
      rating: "3-Star (Max: 1672)",
      desc: "Active competitive programmer solving time-critical contest challenges.",
      highlights: [
        "Global Rank 203 in Starters 179 (Div 3)",
        "Consistent rating growth and contest performance",
      ],
      link: "https://www.codechef.com/users/tanish_7",
    },
    {
      platform: "Codeforces",
      icon: <SiCodeforces color="#1F8ACB" />,
      rating: "200+ Solved",
      desc: "Specialized in constructive algorithms, math, and rapid implementation.",
      highlights: [
        "Strong problem decomposition & optimization skills",
        "Div 2 & Div 3 regular participant",
      ],
      link: "https://codeforces.com/profile/TAnish_29",
    },
    {
      platform: "GeeksforGeeks",
      icon: <SiGeeksforgeeks color="#2F8D46" />,
      rating: "200+ Solved",
      desc: "Comprehensive mastery of core CS data structures and classic algorithms.",
      highlights: [
        "Trees, Graphs, Segment Trees & DP mastery",
        "Core interview & system design fundamentals",
      ],
      link: "https://www.geeksforgeeks.org/user/patidar207me/",
    },
  ];

  return (
    <div className="dsa-container" id="dsa">
      <motion.div
        className="dsa-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="dsa-heading">Problem Solving & Competitive Programming</h1>
        <p className="dsa-summary">
          Solved over <strong>1,600+ algorithmic challenges</strong> across platforms in C++ & Java. Reached the <strong>National Semi-Finals in Flipkart Grid 7.0</strong> by engineering complex software solutions.
        </p>
      </motion.div>

      <div className="dsa-stats-grid">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="cpsc-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <div>
              <div className="cpsc-top">
                <div className="cpsc-title">
                  {item.icon} {item.platform}
                </div>
                <span className="cpsc-rating">{item.rating}</span>
              </div>
              <p className="cpsc-desc">{item.desc}</p>
            </div>

            <ul className="cpsc-highlights">
              {item.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="codolio-section">
        <h2 className="dsa-heading" style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>
          Real-Time Codolio Activity Tracker
        </h2>
        <div className="iframe-wrapper">
          <iframe
            src="https://codolio.com/profile/TAnish07"
            title="Codolio DSA Profile"
            loading="lazy"
            className="codolio-iframe"
          />
        </div>
      </div>

      <div className="dsa-links">
        <a href="https://codolio.com/profile/TAnish07" target="_blank" rel="noreferrer" className="dsa-link">
          <FaCode /> Codolio <FaExternalLinkAlt size={12} />
        </a>
        <a href="https://leetcode.com/u/TAnish_07/" target="_blank" rel="noreferrer" className="dsa-link">
          <SiLeetcode color="#F89F1B" /> LeetCode <FaExternalLinkAlt size={12} />
        </a>
        <a href="https://www.codechef.com/users/tanish_7" target="_blank" rel="noreferrer" className="dsa-link">
          <SiCodechef color="#86513A" /> CodeChef <FaExternalLinkAlt size={12} />
        </a>
        <a href="https://codeforces.com/profile/TAnish_29" target="_blank" rel="noreferrer" className="dsa-link">
          <SiCodeforces color="#1F8ACB" /> Codeforces <FaExternalLinkAlt size={12} />
        </a>
        <a href="https://www.geeksforgeeks.org/user/patidar207me/" target="_blank" rel="noreferrer" className="dsa-link">
          <SiGeeksforgeeks color="#2F8D46" /> GeeksForGeeks <FaExternalLinkAlt size={12} />
        </a>
      </div>
    </div>
  );
};

export default DSA;
