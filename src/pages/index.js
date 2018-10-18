import React from 'react'
import { Link } from 'gatsby'
import { Calendar } from 'react-widgets'
import H1 from '../components/H1';
import RightPanel from './RightPanel';
import LeftPanel from './LeftPanel';
import ActivityArea from './ActivityArea';
import MonthAtAGlance from './MonthAtAGlance';
import EventCategoryList from './EventCategoryList';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';

import Layout from '../components/layout'

Moment.locale('en');
momentLocalizer();


const IndexPage = () => (
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
      </RightPanel>
    </ActivityArea>

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
