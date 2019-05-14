import React, { Component } from 'react';
import Layout from './components/layout';
import RightPanel from './containers/RightPanel';
import LeftPanel from './containers/LeftPanel';
import ActivityArea from './containers/ActivityArea';
import MonthAtAGlance from './containers/MonthAtAGlance';
import SummaryCalendarContainer from './containers/SummaryCalendarContainer';
import EventCategoryListContainer from './containers/EventCategoryListContainer';
import EventSummaryListContainer from './containers/EventSummaryListContainer';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers';
import { fetchAllActivityCategories } from './redux/actions/activityCategoryActions';
import { fetchAllActivitiesByDateRange } from './redux/actions/activityActions';
import rootSaga from './redux/sagas';

import 'react-widgets/dist/css/react-widgets.css';

Moment.locale('en');
momentLocalizer();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(rootSaga);

store.dispatch(fetchAllActivityCategories())
store.dispatch(fetchAllActivitiesByDateRange())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <ActivityArea>
            <LeftPanel>
              <MonthAtAGlance>
                <SummaryCalendarContainer/>
              </MonthAtAGlance>
              { <EventCategoryListContainer>
              </EventCategoryListContainer> }
            </LeftPanel>
            <RightPanel>
              <EventSummaryListContainer>
              </EventSummaryListContainer>
            </RightPanel>
          </ActivityArea>
        </Layout>
      </Provider>
    );
  }
}

export default App;