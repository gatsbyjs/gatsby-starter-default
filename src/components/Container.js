import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const ContainerStyled = styled.div`
  ${tw`mx-auto px-4 max-w-lg lg:px-0`}
`;

const Container = props => <ContainerStyled {...props} />;

export default Container;
