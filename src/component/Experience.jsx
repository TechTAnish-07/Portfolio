import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "47Billion",
      role: "Software Development Engineer Intern",
      duration: "May 2026 – July 2026",
      location: "Indore, India",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=47Billion+Crystal+IT+Park+Khandwa+Road+Indore+452001",
      points: [
        <>
          Engineered a <strong>RAG-based QA Bot</strong> utilizing <strong>LangChain</strong>, driving an <strong>80% reduction</strong> in manual query resolution time and achieving <strong>90% retrieval accuracy</strong> for critical internal workflows.
        </>,
        <>
          Architected robust data pipelines using <strong>vector embeddings</strong> to process gigabytes of textual data, delivering scalable contextual awareness to LLMs across complex state machines.
        </>,
        <>
          Optimized model performance and reasoning capabilities through advanced <strong>prompt engineering</strong>, successfully decreasing autonomous task hallucination rates by <strong>90%</strong>.
        </>,
      ],
      techStack: [
        "LangChain",
        "AI Agents",
        "RAG",
        "Prompt Engineering",
        "Vector Embeddings",
        "Python",
        "Spring Boot",
        "PostgreSQL",
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-badge">CAREER & IMPACT</span>
        <h2 className="experience-title">Experience & Achievements</h2>
        <p className="experience-subtitle">
          Real-world industry experience in AI engineering, RAG pipelines, and scalable backend systems
        </p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="card-top">
              <div className="company-info">
                <h3>{exp.company}</h3>
                <p className="role-title">{exp.role}</p>
                <a
                  href={exp.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="location-link"
                >
                  <FaMapMarkerAlt style={{ marginRight: '6px', color: '#61DBFB' }} />
                  {exp.location}
                  <FaExternalLinkAlt size={11} style={{ marginLeft: '4px', opacity: 0.8 }} />
                </a>
              </div>
              <div className="duration-pill">{exp.duration}</div>
            </div>

            <ul className="experience-points">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="tech-tags">
              {exp.techStack.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          className="achievement-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="achievement-icon">
            <FaTrophy color="#F89F1B" size={28} />
          </div>
          <div className="achievement-content">
            <h4>Flipkart Grid 7.0 Semi-Finalist</h4>
            <p>
              Reached National Semi-Finals by solving complex real-world software engineering challenges among top universities nationwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
