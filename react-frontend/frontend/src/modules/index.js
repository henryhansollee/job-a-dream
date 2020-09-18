import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import communityCreate, { communityCreateSaga } from './communityCreate';
import interviewCreate, { interviewCreateSaga } from './interviewCreate';
import interview, { interviewSaga } from './interview';
import interviews, { interviewsSaga } from './interviews';
import community, { communitySaga } from './community';
import communitys, { communitysSaga } from './communitys';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  interviewCreate,
  communityCreate,
  interview,
  community,
  interviews,
  communitys,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    communityCreateSaga(),
    interviewCreateSaga(),
    interviewSaga(),
    interviewsSaga(),
    communitySaga(),
    communitysSaga()
  ]);
}

export default rootReducer;
