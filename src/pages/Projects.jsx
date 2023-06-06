import React from "react";
import Home from "./Home";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";


const Projects = () => (
  <Box
    textAlign="center"
    fontSize="xl"
    w={["80%", "85%", "80%"]}
    maxW={800}
    mx="auto"
    paddingTop={["5%", "10%", "2.5%"]}
  >
    <Text fontSize="xl" align={"left"} paddingTop={3}>
      Coming soon, until then check out my <a href="https://github.com/thaneesh-babu">
            <u>GitHub</u>
            <ExternalLinkIcon mx="2px" />
          </a> for some of my projects!
    </Text>

  </Box>
);

export default Projects;
