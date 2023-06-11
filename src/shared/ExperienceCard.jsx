import React from "react";
import { Card, Text, Wrap, Tag } from "@chakra-ui/react";

const ExperienceCard = (props) => {
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
      <Text>{props.title}</Text>
      <Text fontWeight="bold">{props.company}</Text>
      <Text fontSize="sm">{props.location}</Text>
      <Text fontSize="sm">
        {props.startDate} - {props.endDate}
      </Text>
      <Text fontSize="md" marginTop={5}>
        {props.description}
      </Text>
      <Wrap marginTop={10}>
        {props.skills.map((skill) => (
          <Tag variant="solid" colorScheme="blue">
            {skill}
          </Tag>
        ))}
      </Wrap>
    </Card>
  );
};

export default ExperienceCard;
