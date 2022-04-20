import { Code, Heading, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 320px;

  border: 3px dashed palevioletred;
  border-radius: 10px;

  padding: 1.25em;
`;

const Home: NextPage = () => {
  return (
    <VStack direction="column" gap={2} py={8}>
      <Heading as="h1"> Bluenex Storybook</Heading>
      <Text as="p">
        Check <Code>README.md</Code>!
      </Text>
      <StyledBox>
        <Text as="p" textAlign="center">
          This box is created with styled-components
        </Text>
      </StyledBox>
    </VStack>
  );
};

export default Home;
