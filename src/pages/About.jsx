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
    <Box boxShadow="lg" p="6" rounded="md">
      <Text fontSize="xl" align={"left"} paddingTop={3}>
        I'm a junior at Georgia Tech, majoring in Computer Science specializing
        in Artificial Intelligence and Systems/Architecture. I take interest in
        full-stack development, machine learning, systems and computer
        architecture.
      </Text>
      <Text fontSize="xl" align={"left"} paddingTop={3}>
        Besides these interests, I'm huge into football (the real one),
        astrophysics, and listening to EDM.
      </Text>
    </Box>
    <Box boxShadow="lg" p="6" rounded="md" marginTop={10}>
      <HStack spacing="275px">
        <Text fontSize="xl" align={"left"} fontWeight="bold">
          {" "}
          Georgia Institute of Technology{" "}
        </Text>
        <Text fontSize="lg"> Aug 2021 - Dec 2024 </Text>
      </HStack>
      <Text fontSize="lg" align={"left"} fontWeight="medium">
        {" "}
        B.S. in Computer Science, Cumulative GPA: 3.97, Major GPA: 4.0{" "}
      </Text>
      <Text fontSize="md" align={"left"} fontWeight="medium">
        {" "}
        <b>Concentrations</b>: Artificial Intelligence, Systems/Architecture{" "}
      </Text>
      <Text fontSize="md" align={"left"} fontWeight="medium">
        {" "}
        <b>Coursework</b>: Algorithms Honors, Data Structures, Operating
        Systems, Artificial Intelligence, Systems & Networks, Linear Algebra,
        Applied Combinatorics, Discrete Mathematics, Statistics & Applications{" "}
      </Text>
    </Box>
  </Box>
);

export default About;
