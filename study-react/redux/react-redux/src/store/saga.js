import { takeEvery, put } from 'redux-saga/effects';
import Axios from 'axios';
import { GET_DEFAULTSTATE } from './actionType';
import { getDefaultState3 } from './actionCreator';

function* mySagas() {
  // 监听
  yield takeEvery(GET_DEFAULTSTATE,getDefaultState)
}

function* getDefaultState() {
  console.log('saga success')
  const res = yield Axios.get('https://easy-mock.com/mock/5d8616daef4e69787bdfa226/redux/initData')
  yield put(getDefaultState3(res.data.data))
}

export default mySagas