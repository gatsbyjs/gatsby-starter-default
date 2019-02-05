import { FETCH_ACTIVITY_CATEGORIES } from '../actions'

export default function activityCategoryReducer(state = [], action) {
    switch (action.type) {
        case FETCH_ACTIVITY_CATEGORIES:            
            return action.categories;
        default: 
            return state;
    }

}