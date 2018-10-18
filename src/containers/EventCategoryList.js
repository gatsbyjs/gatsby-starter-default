import React from 'react'
import styled from 'styled-components';
import EventCategory from './EventCategory';

const EventCategoryListWrapper = styled.ul`
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
`;

class EventCategoryList extends React.Component {
  render() {
    return (
      <EventCategoryListWrapper>
        <EventCategory label={'View All'}></EventCategory>
        <EventCategory label={'Arts Concert / Performance'}></EventCategory>
        <EventCategory label={'Alumni Events'}></EventCategory>
        <EventCategory label={'Athletics'}></EventCategory>
        <EventCategory label={'Public Events'}></EventCategory>
        <EventCategory label={'Student Events'}></EventCategory>
      </EventCategoryListWrapper>
    );
  }
}

export default EventCategoryList
