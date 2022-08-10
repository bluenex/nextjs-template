import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
`;

const Title = styled.h1`
  margin-bottom: 0.5rem;
`;

const Home = () => {
  return (
    <Container>
      <Title>Next.js + TS + styled-components</Title>
      <p>Enjoy starting a new project!</p>
    </Container>
  );
};

export default Home;
