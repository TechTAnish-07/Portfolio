import React from "react";
import "./FullStack.css";

const ProjectCard = ({
  title,
  iframeSrc,
  iframeTitle,
  iframeClass,
  projectLink,
  children,
}) => {
  return (
    <div className="iframe-container">
      <h2>{title}</h2>

      <iframe
        src={iframeSrc}
        title={iframeTitle}
        loading="lazy"
        className={iframeClass}
      />

      {projectLink && (
        <button className="view-button">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </button>
      )}

      <p>{children}</p>
    </div>
  );
};

const FullStack = () => {
  return (
    <section className="FullStack-Container">
       <ProjectCard
        title="Live Interview"
        iframeSrc="https://live-interview-ten.vercel.app/"
        iframeTitle="Live Interview"
        iframeClass="Interview-iframe"
         projectLink="https://live-interview-ten.vercel.app/"
      >
      I  developed a Live Interview Platform designed to simulate real technical interviews and enable seamless interaction between interviewers and candidates.
         The platform supports real-time video communication, collaborative code editing, and live problem solving, creating an environment similar to actual technical interviews.
         It integrates features such as secure authentication,
          WebSocket-based real-time communication, and an interactive coding environment, allowing candidates to write and execute code while discussing solutions with the interviewer.
           The system focuses on interview integrity, smooth user experience, and scalable backend architecture, ensuring reliable performance during live sessions. This project demonstrates 
           my ability to build full-stack applications, 
           handle real-time systems, and design platforms that solve practical problems in the technical hiring process.
       
      </ProjectCard>
      <ProjectCard
        title="Sangraj Rentals — Full Stack Project"
        iframeSrc="https://sangrajrentalll.netlify.app/"
        iframeTitle="Sangraj Rentals Project"
        iframeClass="Sanraj-iframe"
        projectLink="https://sangrajrentalll.netlify.app/"
      >
        Sangraj Rentals is a full-stack car rental platform with a modern
        React-based frontend that communicates with backend services using
        Axios for smooth and efficient API handling. The UI is fully responsive
        and designed to provide a seamless booking experience for users.
        <br /><br />
        The backend is being developed using Spring Boot, focusing on secure
        REST APIs, authentication, scalable architecture, and reliable data
        management. Together, React and Spring Boot form a robust and
        production-ready rental management system.
      </ProjectCard>

     
    </section>
  );
};

export default FullStack;
