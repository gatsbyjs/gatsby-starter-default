import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EventCategoryWrapper = styled.li`
  background-color: #D6DBE1;
  color: #1B77B7;
  line-height: 2em;
  font-size: 1em;
  margin-bottom: .2em;
  padding-left: 1.5em;
`;

const EventCategoryLink = styled.a`
  color: #1B77B7;

  &:hover {
    color: #125D91;
  }
`;


export default class EventCategory extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    label: PropTypes.string.isRequired,
  }

  render() {
    return (
      <EventCategoryWrapper>
        <EventCategoryLink>
          {this.props.label}
        </EventCategoryLink>
      </EventCategoryWrapper>
    );
  }
}
