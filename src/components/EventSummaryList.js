import React from 'react'
import styled from 'styled-components';
import EventSummary from '../containers/EventSummary';
import H1 from './H1';

import { css } from '@emotion/core';
import { PulseLoader } from 'react-spinners';

const override = css`    
    margin: 0 auto;
    display: inline;
    margin-left: 20px;
`;

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
  
  H1 {
    display: inline;
  }
`;

const EventSummaryList = ({ activities }) => (
  <EventSummaryListWrapper>
    <H1>All Events</H1>
    <span className='sweet-loading'>
      <PulseLoader            
        css={override}
        sizeUnit={"px"}
        size={10}
        color={'#1b75b7'}
        loading={activities.loading}
      />
    </span>
    {activities.activities.map((activity, i) => (       
      <EventSummary key={i} eventData={activity}></EventSummary>  
     ))}
  </EventSummaryListWrapper>
)

export default EventSummaryList;
