import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllUsers, loadUsers } from '../../../redux/slice/users';
import axios, { AxiosResponse } from 'axios';

async function requestUsers(): Promise<AxiosResponse<any>> {
  const json = await axios.get('https://jsonplaceholder.typicode.com/users');
  return json;
}

export function* watchFetchAllUsers() {
  yield takeEvery(loadUsers.type, handleGetAllUsers);
}

function* handleGetAllUsers(): any {
  try {
    const response: any = yield call(requestUsers);
    const { data } = response;
    yield put(getAllUsers(data));
  }
  catch (error) {
    yield put(getAllUsers(error));
  }
}
