import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaPlay } from "react-icons/fa";
import "./FullStack.css";

const FullStack = () => {
  const [activeIframe, setActiveIframe] = useState(null);

  const toggleIframe = (index) => {
    setActiveIframe(activeIframe === index ? null : index);
  };

  const projects = [
    {
      title: "LiveInterview — Real-Time Collaborative Interview Platform",
      duration: "Jan 2026 – March 2026",
      liveLink: "https://live-interview-ten.vercel.app/",
      codeLink: "https://github.com/TechTAnish-07",
      techStack: [
        "Spring Boot",
        "React.js",
        "PostgreSQL",
        "WebSockets",
        "WebRTC",
        "Monaco Editor",
        "Judge0",
      ],
      highlights: [
        "Developed a real-time technical interview platform enabling live coding and P2P video communication.",
        "Implemented low-latency collaborative code editing via WebSockets with role-based synchronization.",
        "Integrated WebRTC for A/V communication and Monaco Editor for a browser-based IDE experience.",
        "Secured code execution by proxying Judge0 requests through the backend, preventing API key exposure.",
        "Added interview integrity signals (ESC detection, copy/paste monitoring, tab-switch tracking) to enhance security.",
      ],
    },
    {
      title: "Sangraj Rentals — Full-Stack Vehicle Booking System",
      duration: "Jul 2025 – Nov 2025",
      liveLink: "https://sangrajrentalll.netlify.app/",
      codeLink: "https://github.com/TechTAnish-07",
      techStack: [
        "Spring Boot",
        "React.js",
        "PostgreSQL",
        "Spring Security",
        "JWT",
        "RBAC",
      ],
      highlights: [
        "Developed a full-stack car rental platform with hourly availability checks and dynamic scheduling.",
        "Implemented secure RBAC with backend admin initialization and user email verification.",
        "Designed a fleet management system to manage vehicles, track bookings, and monitor revenue analytics.",
        "Secured REST APIs with Spring Security and JWT for booking, review, and contact endpoints.",
        "Built dual Admin/User dashboards for booking management, cancellations, and profile tracking.",
      ],
    },
  ];

  return (
    <section className="FullStack-Container" id="projects">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1>Featured Projects</h1>
        <p>
          Production-ready full-stack systems engineered with real-time WebSockets, WebRTC, robust Spring Boot security, and scalable databases.
        </p>
      </motion.div>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <div className="project-top">
            <div className="project-title-area">
              <h2>{project.title}</h2>
              <span className="project-duration">{project.duration}</span>
            </div>

            <div className="project-links">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn primary"
                >
                  <FaExternalLinkAlt size={14} /> Live Demo
                </a>
              )}
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn secondary"
                >
                  <FaGithub size={16} /> Source Code
                </a>
              )}
              {project.liveLink && (
                <button
                  type="button"
                  className="project-btn secondary"
                  onClick={() => toggleIframe(index)}
                >
                  <FaPlay size={12} /> {activeIframe === index ? "Hide Interactive Preview" : "Interactive Preview"}
                </button>
              )}
            </div>
          </div>

          <ul className="project-highlights">
            {project.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="project-tech-tags">
            {project.techStack.map((tech, i) => (
              <span key={i} className="project-tech-tag">
                {tech}
              </span>
            ))}
          </div>

          {activeIframe === index && project.liveLink && (
            <div className="iframe-toggle-container">
              <div className="project-iframe-wrapper">
                <iframe
                  src={project.liveLink}
                  title={project.title}
                  className="project-iframe"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </section>
  );
};

export default FullStack;
