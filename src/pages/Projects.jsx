import React from "react";
import { Box, Wrap } from "@chakra-ui/react";
import ProjectCard from "../shared/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => (
  <Box
    textAlign="center"
    fontSize="xl"
    paddingTop={["5%", "10%", "2.5%"]}
    paddingLeft={["5%", "10%", "2.5%"]}
  >
    <Wrap spacing={15}>
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </Wrap>
  </Box>
);

export default Projects;
