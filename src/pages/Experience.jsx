import React from "react";

const Experience = () => (
    <div>
      <div>
        <h2>Experience</h2>
        <h3>Innovation Lab, NCR Corporation</h3>
        <p>
          Created a cloud native service deployed onto GCP to support software
          and config downloads by forecourt services, migrating from RCM, a
          single-tenant architecture, consecutively designing the middleware
          update service API for terminal controllers, scaling to large
          deployments.
        </p>
        <h3>HexLabs, Inc.</h3>
        <p>
          Lead contributor in building the microservice API that supports all
          HexLabs' frontend applications for university-wide hackathons, using
          the MERN stack and GraphQL, as well as revamping the registration and
          admin dashboard services.
        </p>
        <h3>IT Board, Georgia Tech Student Government Association</h3>
        <p>
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
);

export default Experience;
