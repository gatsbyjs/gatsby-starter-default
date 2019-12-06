import { Container } from 'components/container/Container';
import { math } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoints, variables } from 'styles/variables';

const { gutter, segmentPadding, pageLimit } = variables;

interface SegmentProps {
  children: React.ReactNode;
  container?: boolean;
}

const paddingTop = (value) => css`
  padding-top: ${value};
  @supports (--css: variables) {
    padding-top: calc(${value} * var(--scale-element));
  }
`;

const paddingBottom = (value) => css`
  padding-bottom: ${value};
  @supports (--css: variables) {
    padding-bottom: calc(${value} * var(--scale-element));
  }
`;

const SegmentEl = styled.div`
  flex-grow: 1;

  ${paddingTop(math(`${gutter} * 3px`))}
  ${paddingBottom(math(`${gutter} * 3px`))}

  @media (min-width: ${breakpoints.sm}) {
    ${paddingTop(math(`${segmentPadding} / ${pageLimit()}`))}
    ${paddingBottom(math(`${segmentPadding} / ${pageLimit()}`))}
  }

  @media (min-width: ${variables.pageLimit}) {
    ${paddingTop(segmentPadding)}
    ${paddingBottom(segmentPadding)}
  }
`;

export function Segment(props: SegmentProps) {
  const { children, container = true } = props;

  if (container) {
    return (
      <Container>
        <SegmentEl>{children}</SegmentEl>
      </Container>
    );
  }

  return <SegmentEl>{children}</SegmentEl>;
}
