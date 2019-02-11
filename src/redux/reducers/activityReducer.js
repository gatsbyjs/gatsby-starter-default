import { 
    GET_ACTIVITY_RANGE, 
    SET_ACTIVITY_RANGE, 
    FETCH_ACTIVITIES_BY_RANGE, 
    ACTIVITIES_REQUESTED,
    ACTIVITIES_RECEIVED } from '../actions/actionTypes'

const initialState = {
    activityRange: {},
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
        default: 
            return state;
    }

}