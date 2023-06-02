import React from "react";

import { Box, HStack, Image, Text } from "@chakra-ui/react";

const Home = () => (
  <Box
    textAlign="center"
    fontSize="xl"
    w={["80%", "85%", "80%"]}
    maxW={800}
    mx="auto"
    paddingTop={["5%", "10%", "2.5%"]}
  >
    <HStack spacing={99} justifyContent="center">
      <Image
        borderRadius="full"
        boxSize="150px"
        src="../../assets/personal/thaneeshbabuimage.jpeg"
        alt="Thaneesh Babu"
      />
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
    </HStack>
  </Box>
);

export default Home;
