import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import Container from "./Container";

const HeaderStyled = styled.div`
  ${tw`bg-purple text-white py-6`}
`;

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <Container>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </HeaderStyled>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
