import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import Layout from "../components/Layout";
import Container from "../components/Container";
import Section from "../components/Section";
import Button from "../components/Button";

const Heading = styled.h1`
  ${tw`font-bold text-4xl text-blue font-sans md:text-orange`}
`;

const Text = styled.p`
  ${tw`tracking-wide font-sans`}
`;

const IndexPage = () => (
  <Layout>
    <Section>
      <Container>
        <Heading>Hi people</Heading>
        <Text>Welcome to your new Gatsby site.</Text>
        <p>Now go build something great.</p>
        <Button text="Click Me" />
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;
