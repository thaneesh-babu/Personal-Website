import React from "react";
import Home from "./Home";
import { Box, HStack, Image, Text, Wrap } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
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
