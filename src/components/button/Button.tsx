import { lighten, math, stripUnit } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';
import { variables } from 'styles/variables';
import { Link } from 'gatsby';

interface ButtonProps {
  href?: string;
  disabled?: boolean;
  children: React.ReactNode;
  [key: string]: any;
}

function ButtonElement(props: ButtonProps) {
  const { children, ...passProps } = props;
  const isLink = typeof props.href !== 'undefined';
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(props.href || '');

  if (isExternal) {
    return (
      <a target="_blank" rel="noopener noreferrer" {...passProps}>
        {children}
      </a>
    );
  }

  if (isLink) {
    return (
      <Link to={props.href || '#'}>
        <a {...passProps}>{children}</a>
      </Link>
    );
  }

  return <button {...passProps}>{children}</button>;
}

export const Button = styled(ButtonElement)`
  display: inline-flex;
  position: relative;

  padding: 0 ${variables.gutter};

  height: 40px;

  border: 2px solid transparent;
  border-radius: 2px;

  cursor: pointer;

  font-size: ${variables.font.size};
  line-height: ${math(`40px - 2px * 2px`)};
  vertical-align: middle;
  text-align: center;
  text-decoration: none;

  background-color: #000;
  color: #fff;

  transition: 180ms;
  transition-property: border-color, background-color, color, opacity;

  ${(props) =>
    props.disabled &&
    css`
      cursor: default;
      background-color: #bbb;
    `}

  & + & {
    margin-left: ${stripUnit(variables.gutter) / 2}px;
  }

  &:hover,
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${lighten(0.25, '#000')};
  }
`;
