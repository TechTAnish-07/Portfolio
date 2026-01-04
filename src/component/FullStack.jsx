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

      <ProjectCard
        title="Pikachu API Project"
        iframeSrc="https://pokemon-07.netlify.app/"
        iframeTitle="Pikachu API Project"
        iframeClass="pikachu-iframe"
      >
        This project demonstrates efficient API integration using React and
        Axios to fetch and display dynamic Pokémon data in real time. Axios
        enables clean request handling, error management, and smooth data flow
        across the application.
        <br /><br />
        The Pikachu-themed UI enhances user engagement while ensuring fast,
        responsive interactions, making the application scalable and reliable
        for real-world API-driven use cases.
      </ProjectCard>
    </section>
  );
};

export default FullStack;
