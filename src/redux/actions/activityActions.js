import { GET_ACTIVITY_RANGE, SET_ACTIVITY_RANGE, } from './actionTypes';

export const getActivityRange = (range) => {
  return {
    type: GET_ACTIVITY_RANGE,
    range
  }
};

export const setActivityRange = (range) => {
  return {
    type: SET_ACTIVITY_RANGE,
    range
  }
}

export const fetchActivitiesByDateRange = (activities) => {
  return {
    type: FETCH_ACTIVITIES_BY_RANGE,
    activities
  }
};
 
export const onActivityRangeModified = (range) => {
  return {
    type: ACTIVITY_RANGE_MODIFIED, 
    range
  }
};

export const onActivitiesReceived = (activities) => {
  return {
    type: ACTIVITIES_RECEIVED,
    activities
  }
};
