import { all, fork } from 'redux-saga/effects';
import { fetchUsersSaga } from './userSaga';


export default function* rootSaga() {
  yield all([
    fork(fetchUsersSaga),

  ]);
}