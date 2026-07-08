import React from "react";
import Profile from "./Profile";
import Experience from "./Experience";
import FullStack from "./FullStack";
import Language from "./Language";
import DSA from "./DSA";
import Journey from "./Journey";
import ContactUs from "./ContactUs";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Profile />
      <Experience />
      <FullStack />
      <Language />
      <DSA />
      <Journey />
      <ContactUs />

      <footer className="home-footer">
        © {new Date().getFullYear()} <span>Tanish Patidar</span>. Built with React & Modern UI Design.
      </footer>
    </div>
  );
};

export default Home;
