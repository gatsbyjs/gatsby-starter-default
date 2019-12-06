import { Container } from 'components/container/Container';
import { Column, Row } from 'components/grid';
import React from 'react';
import styled from 'styled-components';
import { responsiveFont } from 'styles/utils';
import { breakpoints, variables } from 'styles/variables';

interface BlockTextProps {
  heading: string;
  description: React.ReactNode;
}

const Block = styled.div`
  padding: 60px 0;

  @media (min-width: ${breakpoints.lg}) {
    padding: 180px 0;
  }
`;

const Heading = styled.h3`
  margin-bottom: 10px;
  font-family: ${variables.font.family};

  ${responsiveFont(16, 18)}
`;

const Description = styled.p`
  font-weight: 300;
  line-height: ${26 / 16};
  ${responsiveFont(16, 18)}

  a {
    text-decoration: none;
    font-weight: 400;
    color: #000;
    transition: 200ms opacity ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export function BlockText({ heading, description }: BlockTextProps) {
  return (
    <Container>
      <Block>
        <Row>
          <Column md={5}>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
          </Column>
        </Row>
      </Block>
    </Container>
  );
}
