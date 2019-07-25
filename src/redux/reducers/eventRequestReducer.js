import { 
    FETCH_PERMISSION,
    PERMISSION_REQUESTED,
    PERMISSION_RECEIVED } from '../actions/actionTypes'

const initialState = {    
    ReqEvent: [], 
    loading: false,
    }
    
export default function eventRequestReducer(state = initialState, action) {
    switch (action.type) {
        case PERMISSION_REQUESTED:
            return { ...state, loading: true };
        case PERMISSION_RECEIVED:
            return { ...state, ReqEvent: action.ReqEvent, loading: false };
        case FETCH_PERMISSION:            
            return action.ReqEvent;
        default: 
            return state;
    }

}