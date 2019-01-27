import React from 'react'
import { Calendar } from 'react-widgets'
import RightPanel from '../containers/RightPanel';
import LeftPanel from '../containers/LeftPanel';
import ActivityArea from '../containers/ActivityArea';
import MonthAtAGlance from '../containers/MonthAtAGlance';
import EventCategoryList from '../containers/EventCategoryList';
import EventSummaryList from '../containers/EventSummaryList';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { graphql } from 'gatsby';

import 'react-widgets/dist/css/react-widgets.css';
import Layout from '../components/layout';

Moment.locale('en');
momentLocalizer();


const IndexPage = (props) => {
  
  const events = props.data.allEventInfo.edges;

  return (
    <Layout>
      <ActivityArea>
        <LeftPanel>
          <MonthAtAGlance>
            <Calendar defaultValue={new Date()}/>
          </MonthAtAGlance>
          <EventCategoryList>
          </EventCategoryList>
        </LeftPanel>
        <RightPanel>
          <EventSummaryList>
          </EventSummaryList>
          <div>
            {events.map((event, i) => {
              const eventData = event.node;
              return (
                <div key={i}>
                  <p>Name: {eventData.name}</p>
                </div>
              )
            })}
          </div>
        </RightPanel>
      </ActivityArea>
    </Layout>
  );
};

export default IndexPage

export const query = graphql`  
  query EventInfoQuery {
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
`;