import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as communitysAPI from '../lib/api/communitys';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_COMMUNITY,
  READ_COMMUNITY_SUCCESS,
  READ_COMMUNITY_FAILURE,
] = createRequestActionTypes('community/READ_COMMUNITY');
const UNLOAD_COMMUNITY = 'community/UNLOAD_COMMUNITY'; // 커뮤니티 페이지에서 벗어날 때 데이터 비우기

export const readCommunity = createAction(READ_COMMUNITY, id => id);
export const unloadCommunity = createAction(UNLOAD_COMMUNITY);

const readCommunitySaga = createRequestSaga(READ_COMMUNITY, communitysAPI.readCommunity);
export function* communitySaga() {
  yield takeLatest(READ_COMMUNITY, readCommunitySaga);
}

const initialState = {
  community: null,
  error: null,
};

const community = handleActions(
  {
    [READ_COMMUNITY_SUCCESS]: (state, { payload: community }) => ({
      ...state,
      community,
    }),
    [READ_COMMUNITY_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_COMMUNITY]: () => initialState,
  },
  initialState,
);

export default community;
