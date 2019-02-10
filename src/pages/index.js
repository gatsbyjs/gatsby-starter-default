import React from 'react'
import { Calendar } from 'react-widgets'
import RightPanel from '../containers/RightPanel';
import LeftPanel from '../containers/LeftPanel';
import ActivityArea from '../containers/ActivityArea';
import MonthAtAGlance from '../containers/MonthAtAGlance';
import EventCategoryListContainer from '../containers/EventCategoryListContainer';
import EventSummaryListContainer from '../containers/EventSummaryListContainer';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';
import { fetchAllActivityCategories } from '../redux/actions/activityCategoryActions';
import { fetchAllActivitiesByDateRange } from '../redux/actions/activityActions';

import 'react-widgets/dist/css/react-widgets.css';
import Layout from '../components/layout';

Moment.locale('en');
momentLocalizer();

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

store.dispatch(fetchAllActivityCategories())
store.dispatch(fetchAllActivitiesByDateRange())

const IndexPage = (props) => {
  return (
    <Provider store={store}>
      <Layout>
        <ActivityArea>
          <LeftPanel>
            <MonthAtAGlance>
              <Calendar defaultValue={new Date()}/>
            </MonthAtAGlance>
            <EventCategoryListContainer>
            </EventCategoryListContainer>
          </LeftPanel>
          <RightPanel>
            <EventSummaryListContainer>
            </EventSummaryListContainer>
          </RightPanel>
        </ActivityArea>
      </Layout>
    </Provider>
  );
};

export default IndexPage