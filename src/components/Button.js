import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const ButtonStyled = styled.button`
  ${tw`bg-blue hover:bg-red-dark text-white font-bold py-2 px-4 rounded font-sans border-none`}
  cursor: pointer;
`;

const Button = props => <ButtonStyled>{props.text}</ButtonStyled>;

export default Button;
