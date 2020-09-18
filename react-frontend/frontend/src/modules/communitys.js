import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as communitysAPI from '../lib/api/communitys';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_COMMUNITYS,
  LIST_COMMUNITYS_SUCCESS,
  LIST_COMMUNITYS_FAILURE,
] = createRequestActionTypes('communitys/LIST_COMMUNITYS');

export const listCommunitys = createAction(
  LIST_COMMUNITYS,
  ({ tag, username, page }) => ({ tag, username, page }),
);

const listCommunitysSaga = createRequestSaga(LIST_COMMUNITYS, communitysAPI.listCommunitys);
export function* communitysSaga() {
  yield takeLatest(LIST_COMMUNITYS, listCommunitysSaga);
}

const initialState = {
  communitys: null,
  error: null,
  lastPage: 1,
};

const communitys = handleActions(
  {
    [LIST_COMMUNITYS_SUCCESS]: (state, { payload: communitys, meta: response }) => ({
      ...state,
      communitys,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_COMMUNITYS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default communitys;
