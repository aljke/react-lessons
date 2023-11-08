import { all } from 'redux-saga/effects';
import { waitersWatch } from '../features/waiters/store/sagas';

export function* rootSaga() {
  yield all([
    waitersWatch(),
  ]);
}