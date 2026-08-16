import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCertificate, FaAward, FaExternalLinkAlt } from "react-icons/fa";
import "./Journey.css";

const Journey = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the wrapper
      const totalHeight = rect.height;
      const scrolled = windowHeight / 2 - rect.top;
      const percent = Math.min(Math.max(scrolled / totalHeight, 0), 1);
      setScrollProgress(percent * 100);

      // Determine active milestone based on scroll percentage
      const milestoneCount = 4;
      const idx = Math.min(
        Math.floor(percent * milestoneCount),
        milestoneCount - 1
      );
      setActiveMilestone(Math.max(idx, 0));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const milestones = [
    {
      category: "WORK EXPERIENCE",
      icon: <FaBriefcase size={13} />,
      date: "May 2026 – July 2026",
      title: "47Billion — Software Development Engineer Intern",
      subtitle: "Indore, India",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=47Billion+Crystal+IT+Park+Khandwa+Road+Indore+452001",
      description:
        "Engineered a RAG-based QA Bot utilizing LangChain (80% query resolution time reduction, 90% retrieval accuracy), architected vector embedding data pipelines, and optimized LLM reasoning via prompt engineering (90% hallucination reduction).",
      tags: ["LangChain", "AI Agents", "RAG", "Vector Embeddings", "Prompt Engineering"],
    },
    {
      category: "EDUCATION",
      icon: <FaGraduationCap size={15} />,
      date: "Aug 2023 – May 2027",
      title: "Indian Institute of Information Technology (IIIT), Tiruchirappalli",
      subtitle: "Bachelor of Technology in Computer Science and Engineering (CGPA: 7.6)",
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
      category: "CERTIFICATION",
      icon: <FaCertificate size={13} />,
      date: "Professional Certification",
      title: "Stanford Machine Learning Specialization",
      subtitle: "Coursera Certified (Cert 1 & Cert 2)",
      description:
        "Completed comprehensive training in Supervised Learning, Regression/Classification algorithms, and Advanced Neural Networks.",
      tags: ["Supervised Learning", "Neural Networks", "Deep Learning", "Python ML"],
    },
    {
      category: "LEADERSHIP",
      icon: <FaAward size={14} />,
      date: "Extracurricular Excellence",
      title: "Athletics MVP & College Leadership",
      subtitle: "Sports MVP & Coding Coordinator",
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
          From rigorous IIIT Tiruchirappalli computer science engineering to AI & Backend internships and athletics leadership.
        </p>
      </motion.div>

      <div className="timeline-center-wrapper" ref={wrapperRef}>
        {/* Background Track Line */}
        <div className="timeline-center-line-track" />

        {/* Dynamic Interactive Scroll Fill Line */}
        <div
          className="timeline-center-line-fill"
          style={{ height: `${scrollProgress}%` }}
        />

        {milestones.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isActive = activeMilestone === index || scrollProgress > (index / 4) * 100;

          return (
            <motion.div
              key={index}
              className={`timeline-row ${isLeft ? "left-side" : "right-side"} ${isActive ? "active-row" : ""
                }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              onMouseEnter={() => setActiveMilestone(index)}
            >
              <div
                className={`timeline-node ${isActive ? "active-node" : ""}`}
                onClick={() => setActiveMilestone(index)}
              >
                {item.icon}
              </div>

              <div
                className="timeline-card-box"
                onClick={() => setActiveMilestone(index)}
              >
                <div className="timeline-card-header">
                  <span className="timeline-category-badge">
                    {item.icon} {item.category}
                  </span>
                  <span className="timeline-date-pill">{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                {item.mapUrl ? (
                  <a
                    href={item.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="timeline-subtitle"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.subtitle}
                    <FaExternalLinkAlt size={11} />
                  </a>
                ) : (
                  <p className="timeline-subtitle">{item.subtitle}</p>
                )}
                <p className="timeline-desc">{item.description}</p>
                <div className="timeline-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="timeline-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Journey;
