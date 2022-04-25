import { Code, Heading, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <VStack direction="column" gap={2} py={8}>
      <Heading as="h1">Next.js + TypeScript + Chakra UI</Heading>
      <Text as="p">Enjoy starting a new project!</Text>
    </VStack>
  );
};

export default Home;
