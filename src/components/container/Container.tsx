import { math } from 'polished';
import styled, { css } from 'styled-components';
import { breakpoints, variables } from 'styles/variables';

function breakpointStyles(key: string) {
  return () => {
    const { width, gutter } = variables.breakpoints[key];
    return css`
      @media (min-width: ${width}) {
        padding-left: ${gutter};
        padding-right: ${gutter};
        max-width: ${math(`${variables.pageWidth} + ${width}`)};
      }
    `;
  };
}

export const Container = styled.div`
  flex-grow: 1;

  margin: 0 auto;

  padding-left: ${variables.gutter};
  padding-right: ${variables.gutter};

  max-width: ${math(`${variables.pageWidth} + ${variables.gutter}`)};

  @media (min-width: ${breakpoints.sm}) {
    max-width: ${math(`${variables.pageWidth} + ${variables.breakpoints.sm.gutter}`)};
  }

  ${breakpointStyles('md')}
  ${breakpointStyles('lg')}
`;
