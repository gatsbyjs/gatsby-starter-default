import React from 'react'
import styled from 'styled-components';
import EventSummary from './EventSummary';

const EventSummaryListWrapper = styled.ul`
  flex: 1;
  list-style-type: none;
  margin-top: 0;
  margin-left: 0;

  li:active {
    background-color: #A2D539;
  }

  li:selected {
    background-color: #A2D539;
  }

  border: 2px solid #00ff00;
`;

class EventSummaryList extends React.Component {
  render() {
    return (
      <EventSummaryListWrapper>
        <EventSummary label={'View All'}></EventSummary>
        <EventSummary label={'Arts Concert / Performance'}></EventSummary>
        <EventSummary label={'Alumni Events'}></EventSummary>
        <EventSummary label={'Athletics'}></EventSummary>
        <EventSummary label={'Public Events'}></EventSummary>
        <EventSummary label={'Student Events'}></EventSummary>
      </EventSummaryListWrapper>
    );
  }
}

export default EventSummaryList
