import React from 'react'
import styled from 'styled-components';
import EventSummary from './EventSummary';
import H1 from '../components/H1';
import { StaticQuery } from 'gatsby';

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

class EventSummaryList extends React.Component {

  render() {
    const eventSummaries = this.props.eventSummaries.edges;

    return (
      <EventSummaryListWrapper>
        <H1>All Events</H1>
        <EventSummary label={'All'}></EventSummary>
        <EventSummary label={'Arts Concert / Performance'}></EventSummary>
        <EventSummary label={'Alumni Events'}></EventSummary>
        <EventSummary label={'Athletics'}></EventSummary>
        <EventSummary label={'Public Events'}></EventSummary>
        <EventSummary label={'Student Events'}></EventSummary>

        <div>
            {eventSummaries.map((event, i) => {
              
              const eventData = event.node;
              return (
                <EventSummary key={i} eventData={event.node}></EventSummary>
              )
            })}
          </div>

      </EventSummaryListWrapper>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query EventSummariesQuery {
        allEventInfo {
          edges {
            node {
              astraId
              name
              date {
                start
                startTime
                endTime
              }
              typeCode
              location {
                # campus
                building
                room    
                description
              }
              instructor
              days
              canView 
            }        
          }
        }
      }
    `}
    render={({ allEventInfo }) => <EventSummaryList eventSummaries={allEventInfo} {...props} />}
  />
);

