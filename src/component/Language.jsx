import React from "react";
import { motion } from "framer-motion";
import "./Language.css";

const Language = () => {
  const categories = [
    {
      title: "AI & Data",
      icon: "🤖",
      skills: [
        { name: "LangChain & AI Agents", level: "Production", percent: 92 },
        { name: "RAG & Vector Embeddings", level: "Advanced", percent: 90 },
        { name: "Prompt Engineering", level: "Expert", percent: 95 },
      ],
    },
    {
      title: "Backend & Microservices",
      icon: "⚙️",
      skills: [
        { name: "Spring Boot & Spring Security", level: "Advanced", percent: 92 },
        { name: "Node.js & Express", level: "Advanced", percent: 88 },
        { name: "WebSocket (STOMP) & REST APIs", level: "Production", percent: 92 },
      ],
    },
    {
      title: "Languages",
      icon: "💻",
      skills: [
        { name: "Java & C++ (DSA Mastery)", level: "Expert (1600+ Solved)", percent: 95 },
        { name: "JavaScript (ES6+) & Python", level: "Advanced", percent: 90 },
        { name: "SQL (PostgreSQL) & HTML/CSS", level: "Advanced", percent: 88 },
      ],
    },
    {
      title: "Frontend",
      icon: "⚛️",
      skills: [
        { name: "React.js & Redux Toolkit", level: "Advanced", percent: 92 },
        { name: "Monaco Editor & WebRTC", level: "Advanced", percent: 88 },
        { name: "Tailwind CSS", level: "Expert", percent: 90 },
      ],
    },
    {
      title: "Infrastructure & Tools",
      icon: "🛠️",
      skills: [
        { name: "Git / GitHub & Linux", level: "Advanced", percent: 90 },
        { name: "Judge0 Engine & Maven", level: "Advanced", percent: 88 },
        { name: "Postman API Testing", level: "Advanced", percent: 90 },
      ],
    },
  ];

  return (
    <section className="language-container" id="skills">
      <motion.div
        className="language-heading-section"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="language-heading">Technical Expertise</h1>
        <p className="language-subheading">
          Full-Stack engineering stack combining modern AI frameworks, production Spring Boot backends, real-time protocols, and competitive algorithmic mastery.
        </p>
      </motion.div>

      <div className="skills-grid">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            className="skill-category-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="category-header">
              <span className="category-icon">{cat.icon}</span>
              <h3 className="category-title">{cat.title}</h3>
            </div>

            <div className="skills-list">
              {cat.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-top">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level-badge">{skill.level}</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Language;