import React from "react";
import { motion } from "framer-motion";
import "./Journey.css";

const Journey = () => {
  const milestones = [
    {
      icon: "🎓",
      title: "Indian Institute of Information Technology (IIIT), Tiruchirappalli",
      subtitle: "Bachelor of Technology in Computer Science and Engineering (CGPA: 7.6)",
      date: "Aug 2023 – May 2027",
      description:
        "Building a rigorous academic foundation in computer science and software engineering in Tamil Nadu, India.",
      tags: [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
      ],
    },
    {
      icon: "⚡",
      title: "47Billion — AI & Backend Development Intern",
      subtitle: "Industry Engineering Internship | Indore, India",
      date: "May 2026 – Present",
      description:
        "Developing enterprise QA Bots with LangChain and RAG architectures, engineering vector embedding data pipelines, and optimizing LLM reasoning via advanced prompt engineering.",
      tags: ["LangChain", "RAG", "Vector Embeddings", "Prompt Engineering", "Python"],
    },
    {
      icon: "🤖",
      title: "Stanford Machine Learning Specialization",
      subtitle: "Coursera Certified (Cert 1 & Cert 2)",
      date: "Professional Certification",
      description:
        "Completed comprehensive training in Supervised Learning, Regression/Classification algorithms, and Advanced Neural Networks.",
      tags: ["Supervised Learning", "Neural Networks", "Deep Learning", "Python ML"],
    },
    {
      icon: "🏆",
      title: "Athletics MVP & College Leadership",
      subtitle: "Sports MVP & Coding Coordinator",
      date: "Extracurricular Excellence",
      description:
        "3-time College Champion in 100m Sprint; Best Player Award winner in Inter-College Football & Kho-Kho. Demonstrates high discipline, teamwork, and competitive resilience.",
      tags: ["100m Champion (3x)", "Football Best Player", "Kho-Kho MVP"],
    },
  ];

  return (
    <section className="journey-container" id="journey">
      <motion.div
        className="journey-heading-area"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1>Academic & Professional Journey</h1>
        <p>
          From rigorous IIIT Tiruchirappalli computer science engineering to AI & Backend internships and athletics championships.
        </p>
      </motion.div>

      <div className="journey-timeline-grid">
        {milestones.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <div className="timeline-icon-box">{item.icon}</div>
            <div className="timeline-content">
              <div className="timeline-top">
                <h3>{item.title}</h3>
                <span className="timeline-date">{item.date}</span>
              </div>
              <p className="timeline-subtitle">{item.subtitle}</p>
              <p className="timeline-text">{item.description}</p>
              <div className="coursework-pills">
                {item.tags.map((tag, i) => (
                  <span key={i} className="coursework-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
