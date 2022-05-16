import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import {
  faApple,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <h1 className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
          Hello! i'm{" "}
          <span
            className="highlight"
            data-text="edmund."
            onClick={scrollToAbout}
          >
            Thaneesh
          </span>
          .
        </h1>
        <p className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
          A computer science sophomore at Georgia Institute of Technology, I'm
          interested in machine learning and full stack development, as
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
        <p className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
          Besides these interests, I'm also a huge soccer enthusiast (Barça
          fan), love reading crime/thriller novels and listening to EDM.
        </p>
        <br></br>
        <br></br>
        <div className="icon-container">
          <a
            href="https://www.linkedin.com/in/thaneeshbabu/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/thaneesh-babu"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/thaneesh.bk/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </motion.div>
      <div className="scroll" ref={aboutReference} />
      <About />
      <div className="scroll" ref={projectsReference} />
      <Projects />
    </div>
  );
};

export default Home;
