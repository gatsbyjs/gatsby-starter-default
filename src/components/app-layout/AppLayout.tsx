import * as React from 'react';
import Helmet from 'react-helmet';

import Logo from 'assets/svg/ueno-logo.svg';
import Dribbble from 'assets/svg/dribbble.svg';
import Twitter from 'assets/svg/twitter.svg';
import Github from 'assets/svg/github.svg';
import Instagram from 'assets/svg/instagram.svg';
import Facebook from 'assets/svg/facebook.svg';
import Linkedin from 'assets/svg/linkedin.svg';

import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { HeaderLink } from 'components/header/Link';
import { Footer } from 'components/footer/Footer';
import { Devtools } from 'components/devtools/Devtools';
import styled from 'styled-components';

import { Styles } from 'styles/base';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const LayoutWrap = styled.div`
  display: block;
  min-height: 100vh;
`;

const isDev = process.env.NODE_ENV === 'development';

// tslint:disable-next-line: no-default-export
export default ({ children }: IAppLayoutProps) => (
  <LayoutWrap>
    <Styles />
    <Helmet {...helmet} />

    <Header>
      <HeaderLink name="about" to="/about" />

      <HeaderLink name="github" to="https://github.com/ueno-llc" icon={<Github />} />
    </Header>

    {children}

    <Footer
      logo={<Logo />}
      social={[
        { icon: <Dribbble />, to: 'https://dribbble.com/ueno' },
        { icon: <Twitter />, to: 'https://twitter.com/uenodotco' },
        { icon: <Github />, to: 'https://github.com/ueno-llc' },
        { icon: <Instagram />, to: 'https://www.instagram.com/uenodotco' },
        { icon: <Facebook />, to: 'https://www.facebook.com/uenodotco' },
        { icon: <Linkedin />, to: 'https://www.linkedin.com/company/ueno' },
      ]}
    />
    {isDev && <Devtools />}
  </LayoutWrap>
);
