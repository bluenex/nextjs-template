import { Code, Heading, Text, VStack } from "@chakra-ui/react";
import React, { AnchorHTMLAttributes } from "react";
// import './App.css';
import styled from "styled-components";

const StyledBox = styled.div`
  width: 320px;

  border: 3px dashed palevioletred;
  border-radius: 10px;

  padding: 1.25em;
`;

const TwLink = (p: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className="hover:underline hover:text-amber-500 text-blue-400" {...p}>
    {p.children}
  </a>
);

function App() {
  return (
    <VStack direction="column" gap={2} py={8}>
      <Heading as="h1" size="2xl">
        Personal Storybook
      </Heading>
      <Text>
        Check <Code>README.md</Code>!
      </Text>
      <StyledBox>
        <Text mb={4}>
          This Storybook repository has 3 style libraries installed as listed
          below
        </Text>
        <ul className="list-disc list-inside mb-4">
          <li>
            <TwLink href="https://chakra-ui.com/">Chakra UI</TwLink>
          </li>
          <li>
            <TwLink href="https://styled-components.com/">
              styled-components
            </TwLink>
          </li>
          <li>
            <TwLink href="https://tailwindcss.com/">Tailwind CSS</TwLink>
          </li>
        </ul>
        <Text>
          Just install them in this repo so that I can load components of any
          version into the Storybook.
        </Text>
      </StyledBox>
    </VStack>
  );
}

export default App;
