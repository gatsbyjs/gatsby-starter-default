import { put, takeLatest } from 'redux-saga/effects'
import { BASE_API_URL } from './sagaConfig'
import { 
    FETCH_ALL_ACTIVITY_CATEGORIES,
    CATEGORIES_REQUESTED,
    CATEGORIES_RECEIVED } from '../actions/actionTypes'

function* fetchAllCategories() {        
    const url = BASE_API_URL + 'activity-types/all';
    yield put({ type: CATEGORIES_REQUESTED});            
    const json = yield fetch(url)
        .then(response => response.json(), );
    yield put({ type: CATEGORIES_RECEIVED, categories: json, });
}

export function* categoryActionWatcher() {
    yield takeLatest(FETCH_ALL_ACTIVITY_CATEGORIES, fetchAllCategories)
}

