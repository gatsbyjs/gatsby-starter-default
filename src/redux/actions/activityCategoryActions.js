import axios from 'axios'
import { FETCH_ACTIVITY_CATEGORIES, FETCH_ALL_ACTIVITY_CATEGORIES } from './actionTypes';

export const fetchActivityCategories = (categories) => {
  return {
    type: FETCH_ACTIVITY_CATEGORIES,
    categories
  }
};
  
export const fetchAllActivityCategories = () => {
  return {
    type: FETCH_ALL_ACTIVITY_CATEGORIES,
  }  
};