import { put, takeLatest } from 'redux-saga/effects'
import { BASE_API_URL } from './sagaConfig'
import { FETCH_PERMISSION, PERMISSION_RECEIVED, PERMISSION_REQUESTED } from '../actions/actionTypes'

function* fetch_permission() {        
    const url = BASE_API_URL +'userSettings/checkpermissions?permission=Can%20Request%20Events&role=Guest';
    yield put({ type: PERMISSION_REQUESTED});            
    const json = yield fetch(url)
        .then(response => response.json(), );

    if (json.length === 0){
        yield put({ type: PERMISSION_RECEIVED, ReqEvent: 0});
    } else {
        yield put({ type: PERMISSION_RECEIVED, ReqEvent: 1});
    }
}

export function* eventRequestActionWatcher() {
    yield takeLatest(FETCH_PERMISSION, fetch_permission)
}

