import React from "react";
import { Card, Text, Wrap, Tag, HStack, Button } from "@chakra-ui/react";

const ProjectCard = (props) => {
  return (
    <Card
      boxShadow="lg"
      p="6"
      rounded="md"
      w={400}
      h={400}
      _hover={{
        boxShadow: "2xl",
      }}
    >
      <Text fontWeight="bold">{props.title}</Text>
      <Text fontSize="md" marginTop={5}>
        {props.description}
      </Text>
      <HStack marginTop={5}>
        {Object.keys(props.links).map((link) => (
            <Button size='sm'><a href={props.links[link]}>{link}</a></Button>
        ))}
      </HStack>
      <Wrap marginTop={5}>
        {props.technologies.map((tool) => (
          <Tag variant="solid" colorScheme="blue">
            {tool}
          </Tag>
        ))}
      </Wrap>
    </Card>
  );
};

export default ProjectCard;
