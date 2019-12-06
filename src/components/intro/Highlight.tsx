import * as React from 'react';
import { rgba } from 'polished';
import styled from 'styled-components';

const HighlightItem = styled.span`
  position: relative;
`;

const HighlightText = styled.span<{ isFirst?: boolean }>`
  position: relative;
  z-index: 1;
  padding-right: ${(props) => (props.isFirst ? 10 : 0)}px;
`;

const HighlightColor = styled.span`
  position: absolute;
  bottom: 8px;
  left: 0;
  z-index: 0;

  width: 100%;
  height: 16px;

  background-color: ${rgba('#8effbf', 0.3)};
`;

export function Highlight({ children }) {
  return children.split(' ').map((word, index, words) => (
    <HighlightItem key={index}>
      <HighlightText isFirst={words.length > 1 && index === 0}>{word}</HighlightText>
      <HighlightColor />
    </HighlightItem>
  ));
}
