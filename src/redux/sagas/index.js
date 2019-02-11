import { all } from 'redux-saga/effects'
import { activityActionWatcher } from './activitySagas';
import { categoryActionWatcher } from './activtyCategorySagas';

export default function* rootSaga() {
    yield all([
        activityActionWatcher(),
        categoryActionWatcher()
      ])
}
