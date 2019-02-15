import { put, takeLatest, select } from 'redux-saga/effects'
import { BASE_API_URL } from './sagaConfig'
import { 
    ACTIVITIES_REQUESTED,
    FETCH_ALL_ACTIVITIES_BY_RANGE,
    ACTIVITIES_RECEIVED, 
    SET_ACTIVITY_RANGE } from '../actions/actionTypes'
import * as selectors from '../selectors';

function* searchByActivityRange() {
    const range = yield select(selectors.activityRange);        
    if (range && range.startDate && range.endDate) {                                        
        const url = BASE_API_URL + `activities/findByDateRange?start=${range.startDate}&end=${range.endDate}`;        
        yield put({ type: ACTIVITIES_REQUESTED});            
        const json = yield fetch(url)
            .then(response => response.json(), );
        yield put({ type: ACTIVITIES_RECEIVED, activities: json, });
    }
}

export function* activityActionWatcher() {
    yield takeLatest(SET_ACTIVITY_RANGE, searchByActivityRange);
    yield takeLatest(FETCH_ALL_ACTIVITIES_BY_RANGE, searchByActivityRange);
}

