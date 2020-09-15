import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import icreate, { icreateSaga } from './interview/InterviewCreate';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  icreate,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), icreateSaga()]);
}

export default rootReducer;
