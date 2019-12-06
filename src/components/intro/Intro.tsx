import * as React from 'react';
import { Container } from 'components/container/Container';
import { Column, Row } from 'components/grid';
import styled from 'styled-components';
import { responsiveFont } from 'styles/utils';
import { variables } from 'styles/variables';

const Wrapper = styled(Row)`
  padding-top: 60px;
  padding-bottom: 60px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 60px;
`;

const Paragraph = styled.p`
  font-family: ${variables.font.family};
  font-weight: 300;
  ${responsiveFont(26, 32)}
`;

export function Intro({ children }) {
  return (
    <Container>
      <Wrapper>
        <Column md={7}>
          <Paragraph>{children}</Paragraph>
        </Column>
      </Wrapper>
    </Container>
  );
}
