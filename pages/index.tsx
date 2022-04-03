import { Code, Heading, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <VStack direction="column" gap={2} py={8}>
      <Heading as="h1"> Bluenex Storybook</Heading>
      <Text as="p">
        Check <Code>README.md</Code>!
      </Text>
    </VStack>
  );
};

export default Home;
