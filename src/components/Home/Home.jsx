import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

import About from "../About/About";
import Projects from "../Projects/Projects";

import "./Home.scss";

const Home = () => {
  const aboutReference = (useRef < null) | (HTMLDivElement > null);
  const projectsReference = (useRef < null) | (HTMLDivElement > null);

  const [isVisible, setVisible] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  const scrollToAbout = () => {
    aboutReference.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    projectsReference.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <div className="scroll" />
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="Home"
      >
        <h1 className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
          Hello, i'm{" "}
          <span
            className="highlight"
            data-text="edmund."
            onClick={scrollToAbout}
          >
            Thaneesh
          </span>
          , a sophomore at Georgia Institute of Technology, majoring in computer
          science.
        </h1>
        <h1 className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
          I'm interested in machine learning and backend development, as my{" "}
          <span
            className="highlight"
            data-text="website."
            onClick={scrollToProjects}
          >
            work
          </span>
          below suggests. Besides these interests, I'm also a huge soccer
          enthusiast (Barça fan), love reading crime/thriller novels and
          listening to EDM.
        </h1>
      </motion.div>
      <div className="scroll" ref={aboutReference} />
      <About />
      <div className="scroll" ref={projectsReference} />
      <Projects />
    </div>
  );
};

export default Home;
