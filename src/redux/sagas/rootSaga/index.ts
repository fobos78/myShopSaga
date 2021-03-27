import { all, fork } from 'redux-saga/effects';

import { watchFetchAllUsers } from '../../../companents/Users/saga';

export default function* rootSaga() {
  yield all([
    fork(watchFetchAllUsers),
  ]);
};
