import React from "react";

import "./Projects.scss";

const Projects = () => (
  <div className="projects">
    <div className="projects-section">
      <div className="projects-content">
        <h2>Projects</h2>
        <h3>
          <a>Revix</a>
        </h3>
        <p className="p-content">
          Designing a model that produces electronic dance music similar to your
          favorite artists, using a multi-scale VQ-VAE and autoregressive
          transformers, inspired by OpenAI's Jukebox. Trained on music samples
          of various genres and artists, the model aims to produce new samples
          of the user's liking
        </p>
        <h3>
          <a href="https://devpost.com/software/daymaker">DayMaker</a>
        </h3>
        <p className="p-content">
          Full-stack web application that automatically creates Google Calendar
          events from uploaded documents, using a custom trained NER model to
          extract dates and relevant titles. The project was awarded Best Use of
          Google Cloud 1st Place at HackTX 2021, and our team is currently
          working on building DayMaker without Google's services
        </p>
        <h3>
          <a href="https://github.com/thaneesh-babu/Caproxy">Caproxy</a>
        </h3>
        <p className="p-content">
          Blockchain application that allows users to perform transactions on
          the Ethereum network, using a React frontend, Solidity smart contracts
          and MetaMask to interact with the blockchain
        </p>
        <h3>
          <a href="https://github.com/thaneesh-babu/DreddIT">DreddIT</a>
        </h3>
        <p className="p-content">
          NLP model that performs sentiment analysis on the comments of a
          user-entered number of posts within a searched subreddit, generating
          plots describing the subreddit's sentiment over numerous features,
          rendered on a React application and backed by a Flask server
        </p>
        <h3>
          <a href="https://github.com/thaneesh-babu/Might-Bite">Might Bite</a>
        </h3>
        <p className="p-content">
          Built an application that displays recipes made with matching
          user-entered ingredients, responsible for the project's backend
          development; used a cloud hosted SQL database to store 50+ recipes.
          Integrated the application with the school dining hall, improving
          efficiency by 200% and used by 20+ faculty members
        </p>
      </div>
    </div>
  </div>
);

export default Projects;
