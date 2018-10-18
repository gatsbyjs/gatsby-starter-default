import styled from 'styled-components';

export default styled.ul`
  flex: 1;
  padding-left: 1em;
  padding-right: 1em;
  list-style-type: none;
  margin-top: 0;

  li:active {
    background-color: #A2D539;
  }

  li:selected {
    background-color: #A2D539;
  }

  border: 2px solid #00ff00;
`;
