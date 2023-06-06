import React from "react";

import {
  Box,
  HStack,
  Image,
  Text,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => (
  <Box
    textAlign="center"
    fontSize="xl"
    w={["80%", "85%", "80%"]}
    maxW={900}
    mx="auto"
    paddingTop={["2.5%", "2.5%", "2.5%"]}
  >
    <HStack spacing={99} justifyContent="center">
      <Box alignSelf={"right"}>
        <Text fontSize="2xl" align={"left"} paddingTop={1}>
          Hey, I'm <b>Thaneesh Babu</b>!
        </Text>
        <Text fontSize="xl" align={"left"} paddingTop={3}>
          I'm a third-year Computer Science student at Georgia Tech,
          specializing in Artificial Intelligence and Systems/Architecture. I
          take interest in full-stack development, machine learning, systems and
          computer architecture.
        </Text>
        <Text fontSize="xl" align={"left"} paddingTop={3}>
          I am an undergraduate research assistant at Dr. Hyesoon Kim's High
          Performance Architecture Lab, where I focus on developing scheduling
          strategies for maximizing performance and memory management in
          In-Storage GPU architectures. I also work as a teaching assistant for
          Operating Systems at Georgia Tech.
        </Text>

        <Text fontSize="xl" align={"left"} paddingTop={3}>
          Some of my full stack experience comes from being the Technology
          Co-director at{" "}
          <a href="https://github.com/HackGT">
            <u>Hexlabs, Inc.</u>
            <ExternalLinkIcon mx="2px" />
          </a>
          , my previous software engineering internships, and several personal
          projects.
        </Text>

        <Text fontSize="xl" align={"left"} paddingTop={3}>
          Here's my{" "}
          <a href="https://thaneesh-babu.github.io/resume.pdf">
            <u>resume</u>
            <ExternalLinkIcon mx="2px" />
          </a>
          , feel free to reach out to me{" "}
          <a href="mailto:thaneesh@gatech.edu">
            <u>here</u>
          </a>
          .
        </Text>
        <ButtonGroup variant="ghost" paddingTop={3}>
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/thaneeshbabu/"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="https://github.com/thaneesh-babu"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Box>
    </HStack>
  </Box>
);

export default Home;
