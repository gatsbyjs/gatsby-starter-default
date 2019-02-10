import { FETCH_ACTIVITIES_BY_RANGE } from '../actions/activityActions'

export default function activityRangeReducer(state = [], action) {
    switch (action.type) {
        case FETCH_ACTIVITIES_BY_RANGE:            
            return action.activities;
        default: 
            return state;
    }

}