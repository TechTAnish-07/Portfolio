import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DSA from "./DSA";
import FullStack from "./FullStack";
import Profile from "./Profile";
import "./Home.css";
import Language from "./Language";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.body.scrollHeight;

    if (scrollPosition >= pageHeight * 0.8) {   // 80% down
      setScrolled(true);
    }else{
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className="home-container">
      {/* Profile - from top */}
      <motion.div
        className="section center"
        initial={{ opacity: 0, y: -80, scale: 0.85 }}
        whileInView={{ opacity: 1, y: 0, scale: 0.95 }}
        whileHover={{ scale: 1 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <section id="profile">
          <Profile />
        </section>
      </motion.div>
      <motion.div
        className="section right"
        initial={{ opacity: 0, x: 150, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 0.9 }}
        whileHover={{ scale: 0.95 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <Language />
      </motion.div>
      {/* DSA - from left */}
      <motion.div
        className="section left"
        initial={{ opacity: 0, x: -150, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 0.9 }}
        whileHover={{ scale: 0.95 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <DSA />
      </motion.div>

    
<motion.div
  className="section right"
  initial={{ opacity: 0, x: 150, scale: 0.8 }}
  animate={scrolled ? { opacity: 1, x: 0, scale: 1 } : {}}
  transition={{ duration: 0.9, ease: "easeInOut" }}
>
  <FullStack />
</motion.div>



    </div>
  );
};

export default Home;
