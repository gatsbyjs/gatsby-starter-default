import { 
    FETCH_PERMISSION,
    PERMISSION_REQUESTED,
    PERMISSION_RECEIVED } from '../actions/actionTypes'

const initialState = {    
    reqEvent: 0, 
    loading: false,
    }
    
export default function eventRequestReducer(state = initialState, action) {
    switch (action.type) {
        case PERMISSION_REQUESTED:
            return { ...state, loading: true };
        case PERMISSION_RECEIVED:
            return { ...state, reqEvent: action.reqEvent, loading: false };
        case FETCH_PERMISSION:       
           return { ...state, reqEvent: action.reqEvent, loading: false }; 
        default: 
            return state;
    }

}