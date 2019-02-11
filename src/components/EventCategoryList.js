import React from 'react'
import styled from 'styled-components';
import EventCategory from '../containers/EventCategory';

const EventCategoryListWrapper = styled.ul`
  flex: 1;
  list-style-type: none;
  margin-top: 0;
  margin-left: 0;

  li:active {
    background-color: #aaaaaa;
  }

  li:selected {
    background-color: #aaaaaa;
  }
`;

const EventCategoryList = ({ categories }) => (
  <EventCategoryListWrapper>    
    <EventCategory label={'View All'}></EventCategory>
    {categories.categories.map(category => (
      <EventCategory key={category.index} label={category.activityTypeName}></EventCategory>  
    ))}
  </EventCategoryListWrapper>
)

export default EventCategoryList;
