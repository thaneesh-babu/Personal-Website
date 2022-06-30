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
          <b>Coursework</b>: Data Structures and Algorithms, Systems and
          Networks, Computer Organization and Programming, Linear Algebra,
          Discrete Mathematics, Statistics & Applications
        </p>
      </div>
    </div>
    <div className="about-section-2">
      <div className="about-content">
        <h2>Experience</h2>
        <h3>Innovation Lab, NCR Corporation</h3>
        <p className="p-content">
          Created a cloud native service deployed onto GCP to support software
          and config downloads by forecourt services, migrating from RCM, a
          single-tenant architecture, consecutively designing the middleware
          update service API for terminal controllers, scaling to large
          deployments.
        </p>
        <h3>HexLabs, Inc.</h3>
        <p className="p-content">
          Lead contributor in building the microservice API that supports all
          HexLabs' frontend applications for university-wide hackathons, using
          the MERN stack and GraphQL, as well as revamping the registration and
          admin dashboard.
        </p>
        <h3>IT Board, Georgia Tech Student Government Association</h3>
        <p className="p-content">
          Responsible for maintaining{" "}
          <a href="https://critique.gatech.edu/" class="text-blue-500">
            Course Critique
          </a>
          's backend (Georgia Tech's grade distribution platform) and developing
          robust algorithms to maximize accurate matches between input searches
          and existing data. The platform serves 10,000+ students in planning
          out their semesters, providing updated course and professor
          information.
        </p>
      </div>
    </div>
  </div>
);

export default About;
