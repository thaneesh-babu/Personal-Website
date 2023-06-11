import React from "react";
import { Box, Wrap } from "@chakra-ui/react";
import ExperienceCard from "../shared/ExperienceCard";
import { experiences } from "../data/experiences";

const Experience = () => (
  <Box
    textAlign="center"
    fontSize="xl"
    paddingTop={["5%", "10%", "2.5%"]}
    paddingLeft={["5%", "10%", "2.5%"]}
  >
    <Wrap spacing={15}>
      {experiences.map((experience) => (
        <ExperienceCard {...experience} />
      ))}
    </Wrap>
  </Box>
);

export default Experience;
