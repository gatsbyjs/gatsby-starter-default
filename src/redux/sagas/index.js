import { all } from 'redux-saga/effects'
import { activityActionWatcher } from './activitySagas';
import { categoryActionWatcher } from './activtyCategorySagas';
import { eventRequestActionWatcher} from './eventRequestSagas';

export default function* rootSaga() {
    yield all([
        activityActionWatcher(),
        categoryActionWatcher(),
        eventRequestActionWatcher()
      ])
}
