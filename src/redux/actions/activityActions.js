import axios from 'axios'

export const FETCH_ACTIVITIES_BY_RANGE = 'FETCH_ACTIVITIES_BY_RANGE'

const apiActivityRangeUrl = 'https://limitless-inlet-88615.herokuapp.com/activities/findByDateRange?start=2019-01-01&end=2019-02-28';

export const fetchActivitiesByDateRange = (activities) => {
  return {
    type: FETCH_ACTIVITIES_BY_RANGE,
    activities
  }
};
  
export const fetchAllActivitiesByDateRange = () => {
  return (dispatch) => {
    return axios.get(apiActivityRangeUrl)
      .then(response => {
        dispatch(fetchActivitiesByDateRange(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};