import React, { useState } from 'react';
import './Language.css'; // Ensure this CSS file is in the same folder
import { FaReact } from "react-icons/fa";
import Javaimg from '../assets/Javaimg.webp'; // Verify this path is correct
import Devimg from '../assets/Dev-img.webp';  // Verify this path is correct

const Language = () => {
  // State to track which card is flipped
  const [isFlipped, setIsFlipped] = useState({
    dsa: false,
    python: false,
  });

  // State to track the view of the middle card
  const [devCardView, setDevCardView] = useState('dev'); // 'dev', 'frontend', or 'backend'

  // Toggles the flip state for a specific card
  const toggleFlip = (cardName) => {
    setIsFlipped((prev) => ({
      ...prev,
      [cardName]: !prev[cardName],
    }));
  };

  // Skill data arrays
  const frontendSkills = [
    { name: "React", level: "Advanced", stars: 4, percent: 90 },
    { name: "JavaScript", level: "Expert", stars: 5, percent: 88 },
    { name: "HTML/CSS", level: "Expert", stars: 5, percent: 90 },
  ];
  const backendSkills = [
    { name: "Springboot", level: "Learning", stars: 4, percent: 50 },
    { name: "Java", level: "Advanced", stars: 4, percent: 82 },
  ];
  const dsaSkills = [
    { name: "C++, DSA", level: "Advanced", stars: 4, percent: 90 },
    { name: "Arrays & Strings, Linked List", level: "Advanced", stars: 4, percent: 90 },
    { name: "Dynamic Programming, Graphs, Trees", level: "Intermediate", stars: 4, percent: 80 },
  ];
  const pythonSkills = [
    { name: "Python Basics", level: "Advanced", stars: 4, percent: 90 },
    { name: "Data Analysis", level: "Intermediate", stars: 4, percent: 90 },
    { name: "Machine Learning", level: "Learning", stars: 3.5, percent: 70 },
  ];
  const devSkills = [
    { name: "Git", level: "Advanced", stars: 4, percent: 90 },
    { name: "VSCode", level: "Expert", stars: 5, percent: 95 },
    { name: "Netlify", level: "Intermediate", stars: 4, percent: 80 },
  ];

  // Reusable SkillBar Component
  const SkillBar = ({ skill }) => (
    <div className="skill">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="stars">{"⭐".repeat(Math.floor(skill.stars))}</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${skill.percent}%` }}></div>
      </div>
      <div className="skill-footer">
        <span className={`level ${skill.level.toLowerCase()}`}>{skill.level}</span>
        <span className="percent">{skill.percent}%</span>
      </div>
    </div>
  );

  return (
    <div className='language-container'>
      <h1 className='language-heading'>Skills Section</h1>

      {/* DSA Card */}
      <div className='DSA-card'>
        <div
          className={`flip-card ${isFlipped.dsa ? 'flipped' : ''}`}
          onClick={() => toggleFlip('dsa')}
        >
          <div className="flip-card-inner">
            {/* CORRECTED STRUCTURE: Both front and back are always rendered */}
            <div className="flip-card-front">
              <h2>Data Structures & Algorithms</h2>
              <p>{dsaSkills.length} topics</p>
              {dsaSkills.map((skill, i) => <SkillBar skill={skill} key={i} />)}
              <p className="flip-instruction">Click to see details</p>
            </div>
            <div className="flip-card-back">
              <p>
                I practiced DSA using Striver’s Sheet for structured coverage and enhanced my problem-solving on Codeforces, building strong logical and competitive programming skills.
              </p>
              <p className="flip-instruction">Click to flip back</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dev / Backend / Frontend Card (This one does not flip, it switches content) */}
      <div className="dev-card">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              {devCardView === 'dev' && (
                <>
                  <h2>Dev Tools</h2>
                  <p>{devSkills.length} skills</p>
                  {devSkills.map((skill, i) => <SkillBar skill={skill} key={i} />)}
                  <div className="card-navigation">
                    <button onClick={() => setDevCardView("frontend")}><FaReact style={{ color: "#61DBFB", width: "60px", height: "60px" }} /></button>
                    <button onClick={() => setDevCardView("backend")}><img src={Javaimg} alt="Java" title='backend' className="java-icon" /></button>
                  </div>
                </>
              )}
              {devCardView === 'frontend' && (
                 <>
                  <h2>Frontend Development</h2>
                  <p>{frontendSkills.length} skills</p>
                  {frontendSkills.map((skill, i) => <SkillBar skill={skill} key={i} />)}
                   <div className="card-navigation">
                     <button onClick={() => setDevCardView("dev")}><img src={Devimg} alt="Dev" title='dev' className="java-icon" /></button>
                     <button onClick={() => setDevCardView("backend")}><img src={Javaimg} alt="Java" title="backend" className="java-icon" /></button>
                   </div>
                 </>
              )}
              {devCardView === 'backend' && (
                <>
                  <h2>Backend Development</h2>
                  <p>{backendSkills.length} skills</p>
                  {backendSkills.map((skill, i) => <SkillBar skill={skill} key={i} />)}
                  <div className="card-navigation">
                    <button onClick={() => setDevCardView("dev")}><img src={Devimg} alt="Dev" title='dev' className="java-icon" /></button>
                    <button onClick={() => setDevCardView("frontend")}><FaReact style={{ color: "#61DBFB", width: "60px", height: "60px" }} /></button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Python Card */}
      <div className='python-card'>
        <div
          className={`flip-card ${isFlipped.python ? 'flipped' : ''}`}
          onClick={() => toggleFlip('python')}
        >
          <div className="flip-card-inner">
            {/* CORRECTED STRUCTURE: Both front and back are always rendered */}
            <div className="flip-card-front">
              <h2>Python & Machine Learning</h2>
              <p>{pythonSkills.length} skills</p>
              {pythonSkills.map((skill, i) => <SkillBar skill={skill} key={i} />)}
              <p className="flip-instruction">Click to see details</p>
            </div>
            <div className="flip-card-back">
              <p>
                Certified in Machine Learning from Coursera, I've applied Python for data analytics and visualization in projects analyzing COVID-19 trends and IPL match data.
              </p>
              <p className="flip-instruction">Click to flip back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;