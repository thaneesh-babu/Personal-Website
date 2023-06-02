import React from "react";
import Home from "./Home";
import { Box, HStack, Image, Text } from "@chakra-ui/react";

const About = () => (
  <Box
    textAlign="center"
    fontSize="xl"
    w={["80%", "85%", "80%"]}
    maxW={800}
    mx="auto"
    paddingTop={["5%", "10%", "2.5%"]}
  >
    <Text fontSize="xl" align={"left"} paddingTop={3}>
      I'm a third-year Computer Science student at Georgia Tech, specializing in
      Artificial Intelligence and Systems/Architecture. I take interest in
      full-stack development, machine learning, systems and computer
      architecture.
    </Text>
    <Text fontSize="xl" align={"left"} paddingTop={3}>
      Besides these interests, I'm huge into football (the real one),
      astrophysics, and listening to EDM.
    </Text>

    <Text fontSize="xl" align={"left"} paddingTop={3}>
      Here's my{" "}
      <a href="https://thaneesh-babu.github.io/resume.pdf">
        <u>resume</u>
      </a>
      , feel free to reach out to me{" "}
      <a href="mailto:thaneesh@gatech.edu">
        <u>here</u>
      </a>
      .
    </Text>
  </Box>
);

export default About;
