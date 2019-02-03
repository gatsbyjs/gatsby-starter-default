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

import 'react-widgets/dist/css/react-widgets.css';
import Layout from '../components/layout';

Moment.locale('en');
momentLocalizer();


const IndexPage = (props) => {
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
        </RightPanel>
      </ActivityArea>
    </Layout>
  );
};

export default IndexPage