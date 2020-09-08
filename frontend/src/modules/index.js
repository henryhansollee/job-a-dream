import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import loading from './loading';

const rootReducer = combineReducers({
  user,
  loading,
});

export function* rootSaga() {
  yield all([userSaga()]);
}

export default rootReducer;
