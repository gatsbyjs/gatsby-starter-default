import moment from 'moment';

import { 
    GET_ACTIVITY_RANGE, 
    SET_ACTIVITY_RANGE, 
    FETCH_ACTIVITIES_BY_RANGE, 
    FETCH_ALL_ACTIVITIES_BY_RANGE,
    ACTIVITIES_REQUESTED,
    ACTIVITIES_RECEIVED } from '../actions/actionTypes'

const initialState = {
    activityRange: {
        startDate: moment().format('YYYY-MM-01'), 
        endDate: moment().add(1, 'months').date(0).format('YYYY-MM-DD'),
        eventType: ''
    },
    activities: [], 
    loading: false,
 }

export default function activityRangeReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIVITIES_REQUESTED:
            return { ...state, loading: true };
        case ACTIVITIES_RECEIVED:
            return { ...state, activities: action.activities, loading: false };
        case GET_ACTIVITY_RANGE:
            return action.activityRange;
        case SET_ACTIVITY_RANGE:
            return { ...state, activityRange: action.range };            
        case FETCH_ACTIVITIES_BY_RANGE:                        
            return { ...state, activities: action.activities, loading: false };
        case FETCH_ALL_ACTIVITIES_BY_RANGE:            
            return { ...state, loading: false };
        default: 
            return state;
    }

}