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
      title: "LiveInterview — AI-Powered Real-Time Interview Platform",
      duration: "Jan 2026 – Present",
      liveLink: "https://live-interview-ten.vercel.app/",
      codeLink: "https://github.com/TechTAnish-07",
      techStack: [
        "Spring Boot",
        "React.js",
        "PostgreSQL",
        "WebSockets",
        "WebRTC",
        "Judge0",
        "Python",
        "FastAPI",
        "LiveKit Agents",
        "LLM (Gemini)",
      ],
      highlights: [
        "Built a real-time collaborative technical interview platform and extended it with an autonomous AI voice interviewer agent for resume-grounded mock interviews (Python worker via LiveKit Agents SDK, integrated with the Spring Boot backend through a service-to-service API layer).",
        "Designed an adaptive AI conversation pipeline (VAD → STT → LLM reasoning → TTS) with tool-calling for dynamic actions and a bounded sliding-window memory with rolling summarization, sustaining long, context-aware conversations.",
        "Implemented low-latency code synchronization via WebSockets with role-based event broadcasting, and secured remote code execution by proxying Judge0 API requests through the Spring Boot backend.",
        "Added real-time interview integrity monitors (ESC key detection, clipboard tracking) alongside AI safety controls (resume-to-role relevance checks, content-moderation warnings, session lifecycle limits) to keep sessions secure and well-behaved.",
        "Built a live coding round (Judge0) into the voice interview via LiveKit’s data channel, with post-session LLM-generated feedback reports covering technical depth and resume-answer consistency.",
      ],
    },
    {
      title: "Sangraj Rentals — Highly-Available Booking Engine",
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
        "Built a full-stack vehicle booking engine, optimizing complex relational database states to support dynamic hourly scheduling and real-time availability tracking.",
        "Enforced strict transactional isolation in PostgreSQL, eliminating double-booking race conditions during high-traffic concurrent requests.",
        "Integrated Role-Based Access Control (RBAC) using Spring Security and JWT, establishing rigorous authorization protocols for administrative fleet workflows.",
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
