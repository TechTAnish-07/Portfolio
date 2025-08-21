import React from 'react'
import './FullStack.css';
const FullStack = () => {
  return (
    <div className='FullStack-Container'>
      <h1>FrontEnd</h1>


      <div className='iframe-container'>
        <h2> Sangraj-rentals Project </h2>
        <iframe
          src="https://sangraj-rentals.netlify.app/"
          title="Sangra-rentals Project"
          loading="lazy"
          className="Sanraj-iframe"
        >
        </iframe>
        <button className='view-button'>
          <a href="https://sangraj-rentals.netlify.app/" target="Sangraj" rel="noopener noreferrer">
            View Project
          </a>
        </button>
        <p>
         The Sanraj Rentals project has its frontend developed in React, where API handling is
          efficiently managed using Axios for smooth communication between the client and server.
           The frontend ensures a responsive and user-friendly interface for customers to explore
            rental options easily. Currently, I am also working on developing its backend using Spring 
            Boot, which will provide robust REST APIs, secure data management, and scalable services. 
            Together, this combination of React and Spring Boot aims to deliver a complete, reliable, 
            and modern web application for rental management.</p>
      </div>
      <div>
        <div className='iframe-container'>
          <h2> Pikachu Project </h2>
          <iframe
            src="https://pokemon-07.netlify.app/"
            title="Pikachu api Project"
            loading="lazy"
            className="pikachu-iframe"
          >
          </iframe>

          <p>

            In this project, API handling is implemented using React along with Axios for making 
            seamless HTTP requests. The application, themed around Pikachus, fetches and displays 
            dynamic data by interacting with external APIs in real-time. Axios is used for its simplicity
             and powerful features such as interceptors, error handling, and request cancellation, which 
             makes the overall data flow smooth and reliable. This ensures that the project is efficient,
              scalable, and provides users with a responsive and interactive experience while working with
               Pikachu-related data.        </p>
        </div>
      </div>
    </div>
  )
}

export default FullStack
