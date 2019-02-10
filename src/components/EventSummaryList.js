import React from 'react'
import styled from 'styled-components';
import EventSummary from '../containers/EventSummary';
import H1 from './H1';

const EventSummaryListWrapper = styled.ul`
  list-style-type: none;
  margin-top: 0;
  margin-left: 0;

  li:active {
    background-color: #A2D539;
  }

  li:selected {
    background-color: #A2D539;
  }
`;

const EventSummaryList = ({ activities }) => (
  <EventSummaryListWrapper>
    <H1>All Events</H1>
    {activities.map((activity, i) => (       
      <EventSummary key={i} eventData={activity}></EventSummary>  
     ))}
  </EventSummaryListWrapper>
)

export default EventSummaryList;
