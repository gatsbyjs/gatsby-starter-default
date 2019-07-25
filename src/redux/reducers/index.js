import { combineReducers } from 'redux';
import categories from './activityCategoryReducer';
import activities from './activityReducer';
import reqEvent from './eventRequestReducer';

export default combineReducers({
    categories: categories,
    activities: activities,
    reqEvent: reqEvent
});