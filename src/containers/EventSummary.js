import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EventSummaryWrapper = styled.li`
  color: #1B77B7;
  margin-bottom: .2em;
  padding-top: 0;
  // flex: 1;
  display: flex;
  flex-direction: row;
`;

const EventThumbnail = styled.div`
  flex-grow: 0;
  background-color: #D6DBE1;
  min-width: 4em;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const EventThumbnailMonth = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 0.85em;
  line-height: 140%;
  background-color: #1b75b7;
  text-transform: uppercase;
  color: #ffffff;
  padding-left: .5em;
  padding-right: .5em;
`;

const EventThumbnailDay = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  line-height: 120%;
`;

const EventThumbnailDayOfWeek = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  font-family: "Times New Roman", Times, serif;
  font-size: 0.85em;
  line-height: 120%;
`;

const EventSummaryContainer = styled.div`
  background-color: #D6DBE1;
  color: #000000;
  flex-grow: 1;
  margin-left: .2em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const EventSummaryHeadline = styled.div`
`;

const EventSummaryTimespan = styled.span`
`;

const EventSummaryLocation = styled.span`
  border-left: 2px solid #B6BBC1;
  margin-left:20px;
  padding-left:20px;
`;


export default class EventSummary extends React.Component { 

  render() {    
    const eventInfo = this.props.eventData;
    if (!eventInfo) {
      return null;
    }
    return (
      <EventSummaryWrapper>
        <EventThumbnail>
          <EventThumbnailMonth>Jan</EventThumbnailMonth>
          <EventThumbnailDay>31</EventThumbnailDay>
          <EventThumbnailDayOfWeek>Mon</EventThumbnailDayOfWeek>
        </EventThumbnail>
        <EventSummaryContainer>
          <EventSummaryHeadline>{eventInfo.name}</EventSummaryHeadline>
          <EventSummaryTimespan>10:00am - 11:00am</EventSummaryTimespan>
          <EventSummaryLocation>WVPCA - WV304, Lincoln Theater</EventSummaryLocation>
        </EventSummaryContainer>
      </EventSummaryWrapper>
    );
  }
}
