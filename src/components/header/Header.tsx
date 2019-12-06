import StarterLogo from 'assets/svg/starter-logo.svg';
import { Container } from 'components/container/Container';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { breakpoints, variables } from 'styles/variables';

const HeaderRoot = styled.header`
  display: block;
`;

const Content = styled.div`
  display: flex;
  align-items: center;

  padding: ${variables.gutter} 0;
`;

const Logo = styled(StarterLogo)`
  display: block;

  height: 16px;
  width: auto;

  @media (min-width: ${breakpoints.md}) {
    height: 18px;
  }
`;

const Navigation = styled.div`
  display: flex;
  margin-left: auto;
`;

export function Header({ children }) {
  return (
    <HeaderRoot>
      <Container>
        <Content>
          <Link to="/">
            <a>
              <Logo />
            </a>
          </Link>
          <Navigation>{children}</Navigation>
        </Content>
      </Container>
    </HeaderRoot>
  );
}
