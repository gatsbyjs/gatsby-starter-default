import React from 'react'
import styled from 'styled-components';
import EventCategory from '../containers/EventCategory';

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

// this is a presentational component, style junk would go in here
const EventCategoryList = ({ categories }) => (
  <EventCategoryListWrapper>    
    <EventCategory label={'View All'}></EventCategory>
    {categories.map(category => (
      <EventCategory key={category.index} label={category.activityTypeName}></EventCategory>  
    ))}
  </EventCategoryListWrapper>
)

export default EventCategoryList;
