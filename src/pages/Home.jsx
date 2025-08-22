import React from "react";
import {
  Box,
  VStack,
  Text,
  HStack,
  Link,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => (
  <Box
    bg="black"
    color="gray.200"
    minH="100vh"
    px={8}
    py={16}
    fontFamily="sans-serif"
  >
    <VStack align="start" spacing={14} maxW="800px" mx="auto">
      {/* Header */}
      <Box>
        <Text fontSize="3xl" fontWeight="bold" color="white">
          Thaneesh Babu K.
        </Text>
        <Text fontSize="md" mt={2} color="gray.400">
          Pursuing a MSCS in Machine Learning at Georgia Tech with a BSCS specialization in Artificial
          Intelligence and Systems/Architecture. Passionate about full-stack
          development, machine learning, and computer systems.
        </Text>
      </Box>

      {/* Experience */}
      <Box w="full">
        <Text fontSize="xl" fontWeight="semibold" mb={6} color="white">
          Experience
        </Text>

        <VStack align="start" spacing={6}>

          <HStack justify="space-between" w="full">
            <Box>
              <Text fontWeight="bold" color="white">
                Software Engineer Intern
              </Text>
              <Text color="gray.400">Meta Platforms, Inc.</Text>
              <Text fontSize="sm" color="gray.500">
                Improved model detection of users posting illicit content using XGBoost by 20% (on roc-auc)
              </Text>
            </Box>
            <Text fontSize="sm" color="gray.500">
              May 2025 – Aug 2025
            </Text>
          </HStack>

          <HStack justify="space-between" w="full">
            <Box>
              <Text fontWeight="bold" color="white">
                Software Engineer Intern
              </Text>
              <Text color="gray.400">Nutanix, Inc.</Text>
              <Text fontSize="sm" color="gray.500">
                Built automated test infrastructure to validate CPU compatibility with Nutanix hypervisor
              </Text>
            </Box>
            <Text fontSize="sm" color="gray.500">
              May 2024 – Aug 2024
            </Text>
          </HStack>

          <HStack justify="space-between" w="full">
            <Box>
              <Text fontWeight="bold" color="white">
                Software Engineer Intern
              </Text>
              <Text color="gray.400">Ibotta, Inc.</Text>
              <Text fontSize="sm" color="gray.500">
               Integrated benchmarking by product revenue / company into dashboards, driving budget allocation
              </Text>
            </Box>
            <Text fontSize="sm" color="gray.500">
              May 2023 – Aug 2023
            </Text>
          </HStack>

          <HStack justify="space-between" w="full">
            <Box>
              <Text fontWeight="bold" color="white">
                Undergraduate Research Assistant
              </Text>
              <Link
                href="https://sites.gatech.edu/hparch/"
                isExternal
                color="gray.400"
              >
                High Performance Architecture Lab <ExternalLinkIcon mx="2px" />
              </Link>
              <Text fontSize="sm" color="gray.500">
                Designed SSD-based block I/O scheduler, boosting bandwidth by 7% for compute-heavy workloads
              </Text>
            </Box>
            <Text fontSize="sm" color="gray.500">
              Jan 2023 – May 2024
            </Text>
          </HStack>

          <HStack justify="space-between" w="full">
            <Box>
              <Text fontWeight="bold" color="white">
                Software Engineer Intern
              </Text>
              <Text color="gray.400">NCR Corporation</Text>
              <Text fontSize="sm" color="gray.500">
                Developed client-side services for forecourt systems
              </Text>
            </Box>
            <Text fontSize="sm" color="gray.500">
              May 2022 – Aug 2022
            </Text>
          </HStack>

        </VStack>
      </Box>

      {/* Education */}
      <Box w="full">
  <Text fontSize="xl" fontWeight="semibold" mb={6} color="white">
    Education
  </Text>

  {/* M.S. Entry */}
  <Box mb={4}>
    <HStack justify="space-between" w="full">
      <Box>
        <Text fontWeight="bold" color="white">
          Georgia Institute of Technology
        </Text>
        <Text color="gray.400">
          M.S. Computer Science — GPA: 4.0
        </Text>
        <Text fontSize="sm" color="gray.500">
          Graduate Teaching Assistant, CS 6210: Adv. Operating Systems
        </Text>
      </Box>
      <Text fontSize="sm" color="gray.500">
        Jan 2025 – Dec 2025
      </Text>
    </HStack>
  </Box>

  {/* B.S. Entry */}
  <Box>
    <HStack justify="space-between" w="full">
      <Box>
        <Text fontWeight="bold" color="white">
          Georgia Institute of Technology
        </Text>
        <Text color="gray.400">
          B.S. Computer Science — GPA: 3.96 (Major GPA: 4.0)
        </Text>
        <Text fontSize="sm" color="gray.500">
          Undergraduate Teaching Assistant, CS 3210: Operating Systems
        </Text>
        <Text fontSize="sm" color="gray.500">
          Undergraduate Research Assistant, High Performance Architecture Lab
        </Text>
        <Text fontSize="sm" color="gray.500">
          Co-Directory of Technology, Hexlabs, Inc. (formerly HackGT)
        </Text>
      </Box>
      <Text fontSize="sm" color="gray.500">
        Aug 2021 – Dec 2024
      </Text>
    </HStack>
  </Box>
</Box>


      {/* Contact */}
      <Box>
        <Text fontSize="xl" fontWeight="semibold" mb={4} color="white">
          Contact
        </Text>
        <Text fontSize="sm" mb={4} color="gray.400">
          Feel free to reach out at{" "}
          <Link href="mailto:gkthaneesh2@gmail.com" textDecoration="underline">
            gkthaneesh2@gmail.com
          </Link> {" / "}
          <Link href="mailto:thaneesh@gatech.edu" textDecoration="underline">
            thaneesh@gatech.edu
          </Link>
        </Text>
        <Text fontSize="sm" mb={4} color="gray.400">
          Here's my {" "}
          <Link href="https://thaneesh-babu.github.io/resume.pdf" textDecoration="underline" >
          resume
          </Link>
        </Text>
        <ButtonGroup spacing={4}>
          <Button
            as="a"
            href="https://github.com/thaneesh-babu"
            variant="outline"
            size="sm"
            leftIcon={<FaGithub />}
            colorScheme="gray"
          >
            GitHub
          </Button>
          <Button
            as="a"
            href="https://www.linkedin.com/in/thaneeshbabu/"
            variant="outline"
            size="sm"
            leftIcon={<FaLinkedin />}
            colorScheme="gray"
          >
            LinkedIn
          </Button>
        </ButtonGroup>
      </Box>

      {/* Footer */}
      <Box pt={10}>
        <Text fontSize="xs" color="gray.500">
          © {new Date().getFullYear()} Thaneesh Babu K.
        </Text>
      </Box>
    </VStack>
  </Box>
);

export default Home;
