import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useKeyDown } from 'hooks/use-keydown';
import { Container } from '../container/Container';
import { Row } from '../grid/Row';
import { Column } from '../grid/Column';

const UENO_DEVTOOLS_GRID_VISIBLE = '_uenoDevtoolsGridVisible';

const Grid = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  overflow: hidden;
  pointer-events: none;
  transform-origin: 50% 0%;
`;

const GridContainer = styled(Container)`
  height: 100%;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 0.2s;
`;

const GridRow = styled(Row)`
  height: 100%;
`;

const GridColumn = styled(Column)`
  position: relative;
  height: 100%;
`;

const Visualize = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Button = styled.div`
  position: fixed;
  right: 75px;
  top: 0;
  z-index: 10000;
  padding: 0 15px;
  height: 26px;
  border-style: solid;
  border-width: 0 1px 1px;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 0 0 2px 2px;
  cursor: pointer;
  pointer-events: all;
  font-size: 12px;
  text-transform: uppercase;
  color: #999;
  background-color: #fff;
  opacity: 1;
  transition: opacity 0.25s, transform 0.1s;
  &:hover {
    color: #000;
    g {
      fill: ${props => (props.isVisible ? '#328bf3' : '#000')};
    }
  }
  &:first-of-type {
    right: 131px;
  }
`;

const Svg = styled.svg`
  margin-top: 6px;
  width: 14px;
  height: 14px;
  /* stylelint-disable-next-line */
  g {
    fill: ${props => (props.isVisible ? '#328bf3' : '#8d8d8d')};
    transition: fill 200ms ease-in-out;
  }
`;

export const GridOverlay = ({ columns, button }) => {
  const gridOverlayRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
  const keys = useKeyDown();

  const handleToggle = value => {
    setVisible(value);
    localStorage.setItem(UENO_DEVTOOLS_GRID_VISIBLE, JSON.stringify(value));
  };

  useEffect(() => {
    if (keys.includes(17) && keys.includes(76)) {
      handleToggle(!isVisible);
    }
  }, [keys]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const item = localStorage.getItem(UENO_DEVTOOLS_GRID_VISIBLE);
    if (item) {
      handleToggle(JSON.parse(item));
    }
  }, []);

  return (
    <Grid ref={gridOverlayRef}>
      <GridContainer isVisible={isVisible}>
        <GridRow data-columns={columns}>
          {Array(columns)
            .fill(0)
            .map((_, i) => (
              <GridColumn sm={1} key={i}>
                <Visualize />
              </GridColumn>
            ))}
        </GridRow>
      </GridContainer>
      {button && (
        <Button onClick={() => handleToggle(!isVisible)} isVisible={isVisible}>
          <Svg
            width="14px"
            height="14px"
            viewBox="0 0 14 14"
            isVisible={isVisible}
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <rect x="0" y="0" width="2" height="14" />
              <rect x="4" y="0" width="2" height="14" />
              <rect x="8" y="0" width="2" height="14" />
              <rect x="12" y="0" width="2" height="14" />
            </g>
          </Svg>
        </Button>
      )}
    </Grid>
  );
};

GridOverlay.defaultProps = {
  button: false,
};
