import { Container } from 'components/container/Container';
import React from 'react';
import styled from 'styled-components';

interface Social {
  icon: React.ReactNode;
  to: string;
}

interface FooterProps {
  logo: React.ReactNode;
  social: Social[];
}

const FooterRoot = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  border-bottom: 10px solid #8effbf;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-left: 30px;
  transition: 200ms opacity ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`;

export function Footer({ logo, social }: FooterProps) {
  return (
    <FooterRoot>
      <Container>
        <Content>
          <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">
            {logo}
          </a>
          <List>
            {social.map(item => (
              <ListItem key={item.to}>
                <a href={item.to} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    </FooterRoot>
  );
}
