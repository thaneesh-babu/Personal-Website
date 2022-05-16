import React from "react";

import "./About.scss";

const About = () => (
  <div className="about">
    <div className="about-section-1">
      <div className="about-content">
        <h2>Education</h2>
        <h3>Georgia Institute of Technology</h3>
        <h5>
          Bachelor's of Science in Computer Science, August 2021 - December 2024
        </h5>
        <p className="p-content">
          <b>Concentrations</b>: Intelligence, Systems & Architecture
        </p>
        <p className="p-content">
          <b>Coursework</b>: Data Structures and Algorithms, Computer
          Organization and Programming, Object Oriented Programming, Linear
          Algebra
        </p>
      </div>
    </div>
    <div className="about-section-2">
      <div className="about-content">
        <h2>Experience</h2>
        <h3>HexLabs, Inc.</h3>
        <p className="p-content">
          Building the microservice API that supports all HexLabs' frontend
          applications for university-wide hackathons, using the MERN stack and
          GraphQL.
        </p>
        <h3>IT Board, Georgia Tech Student Government Association</h3>
        <p className="p-content">
          Responsible for maintaining{" "}
          <a href="https://critique.gatech.edu/" class="text-blue-500">
            Course Critique
          </a>
          's database (Georgia Tech's grade distribution platform) and
          developing robust algorithms to maximize accurate matches between
          input searches and existing data. The platform serves 10,000+ students
          in planning out their semesters, providing updated course and
          professor information.
        </p>
        <h3>National Institute of Information Technology, Qatar</h3>
        <p className="p-content">
          Learnt and employed Python data science libraries such as Pandas,
          NumPy and Matplotlib. As part of a personal project, I analyzed,
          plotted, and extrapolated COVID-19 case figures in five countries,
          applying data science tools on Johns Hopkins’ open-source coronavirus
          dataset.
        </p>
      </div>
    </div>
  </div>
);

export default About;