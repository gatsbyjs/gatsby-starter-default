import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const SectionStyled = styled.div`
  ${tw`py-12`}
`;

const Section = props => <SectionStyled {...props} />;

export default Section;
