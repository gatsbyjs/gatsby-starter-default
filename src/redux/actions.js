import axios from 'axios'

export const FETCH_ACTIVITY_CATEGORIES = 'FETCH_ACTIVITY_CATEGORIES'

const apiUrl = 'https://limitless-inlet-88615.herokuapp.com/activity-types/all';

export const fetchActivityCategories = (categories) => {
    return {
      type: FETCH_ACTIVITY_CATEGORIES,
      categories
    }
  };
  
  export const fetchAllActivityCategories = () => {
    return (dispatch) => {
      return axios.get(apiUrl)
        .then(response => {
          dispatch(fetchActivityCategories(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };