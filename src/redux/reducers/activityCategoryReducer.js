import { 
    FETCH_ACTIVITY_CATEGORIES,
    CATEGORIES_REQUESTED,
    CATEGORIES_RECEIVED } from '../actions/actionTypes'

const initialState = {    
    categories: [], 
    loading: false,
    }
    
export default function activityCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case CATEGORIES_REQUESTED:
            return { ...state, loading: true };
        case CATEGORIES_RECEIVED:
            return { ...state, categories: action.categories, loading: false };
        case FETCH_ACTIVITY_CATEGORIES:            
            return action.categories;
        default: 
            return state;
    }

}