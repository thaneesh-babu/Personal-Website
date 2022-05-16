import React from "react";

import "./Projects.scss";

const Projects = () => (
  <div className="projects">
    <div className="projects-section">
      <div className="projects-content">
        <h2>Projects</h2>
        <h3>
          <a href="https://devpost.com/software/daymaker">DayMaker</a>
        </h3>
        <p className="p-content">
          A web application that automatically creates Google Calendar events by
          extracting relevant titles and corresponding dates from uploaded
          documents using Google Cloud's DocumentAI and NLP API. This project
          won the <b>Best Use of Google Cloud API</b> challenge at HackTX 2021.
          Our team is currently working towards building DayMaker from scratch
          without Google's services.
        </p>
        <h3>
          <a href="https://github.com/thaneesh-babu/Caproxy">Caproxy</a>
        </h3>
        <p className="p-content">
          A blockchain application that allows users to perform transactions on
          the Ethereum network, with a React frontend, using Solidity smart
          contracts and Metamask to interact with the blockchain.
        </p>
        <h3>
          <a href="https://github.com/thaneesh-babu/DreddIT">DreddIT</a>
        </h3>
        <p className="p-content">
          Performs sentiment analysis on the comments of a user-entered number
          of posts within a searched subreddits and subsequently generates plots
          describing the frequency and sentiment of words, displayed on a React
          application served by a Flask backend.
        </p>
        <h3>
          <a href="https://github.com/thaneesh-babu/Might-Bite">Might Bite</a>
        </h3>
        <p className="p-content">
        Built an application that displays recipes made with matching user-entered
                ingredients with a GUI using Swing. Returned recipes were categorized with vegan, vegetarian and
                lactose-free labels
                for a comprehensive list of recommendations. The application improved dining hall’s efficiency by 200% and was used
                by 20+ faculty members & 50+ students.
        </p>
      </div>
    </div>
  </div>
);

export default Projects;
