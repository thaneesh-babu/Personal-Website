import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

import About from "../About/About";
import Projects from "../Projects/Projects";

import "./Home.scss";

const Home = () => {
  const aboutReference = useRef(null);
  const projectsReference = useRef(null);

  const [isVisible, setVisible] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  const scrollToAbout = () => {
    if (aboutReference.current) {
      aboutReference.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    if (projectsReference.current) {
      projectsReference.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container">
      <div className="scroll" />
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="Home"
      >
        <h3 className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
          Hello! i'm{" "}
          <span
            className="highlight"
            data-text="edmund."
            onClick={scrollToAbout}
          >
            Thaneesh
          </span>
          , a computer science sophomore at Georgia Institute of Technology.
        </h3>
        <p className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
          I'm interested in machine learning and full stack development, as
          suggested by my{" "}
          <span
            className="highlight"
            data-text="website."
            onClick={scrollToProjects}
          >
            work
          </span>
          .
        </p>
        Besides these interests, I'm also a huge soccer enthusiast (Barça
          fan), love reading crime/thriller novels and listening to EDM.
      </motion.div>
      <div className="scroll" ref={aboutReference} />
      <About />
      <div className="scroll" ref={projectsReference} />
      <Projects />
    </div>
  );
};

export default Home;
