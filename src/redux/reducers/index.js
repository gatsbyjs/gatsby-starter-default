import { combineReducers } from 'redux';
import categories from './activityCategoryReducer';

export default combineReducers({
    categories: categories
});