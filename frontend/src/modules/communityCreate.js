import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as communitysAPI from '../lib/api/communitys';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'createCommunity/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'createCommunity/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  CREATE_COMMUNITY,
  CREATE_COMMUNITY_SUCCESS,
  CREATE_COMMUNITY_FAILURE,
] = createRequestActionTypes('createCommunity/CREATE_COMMUNITY'); // 포스트 작성
const SET_ORIGINAL_COMMUNITY = 'createCommunity/SET_ORIGINAL_COMMUNITY';
const [
  UPDATE_COMMUNITY,
  UPDATE_COMMUNITY_SUCCESS,
  UPDATE_COMMUNITY_FAILURE,
] = createRequestActionTypes('createCommunity/UPDATE_COMMUNITY'); // 포스트 수정

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const createCommunity = createAction(CREATE_COMMUNITY, ({ title, body, tags }) => ({
  title,
  body,
  tags,
}));
export const setOriginalCommunity = createAction(SET_ORIGINAL_COMMUNITY, community => community);
export const updateCommunity = createAction(
  UPDATE_COMMUNITY,
  ({ id, title, body, tags }) => ({
    id,
    title,
    body,
    tags,
  }),
);

// saga 생성
const createCommunitySaga = createRequestSaga(CREATE_COMMUNITY, communitysAPI.createCommunity);
const updateCommunitySaga = createRequestSaga(UPDATE_COMMUNITY, communitysAPI.updateCommunity);

export function* communityCreateSaga() {
  yield takeLatest(CREATE_COMMUNITY, createCommunitySaga);
  yield takeLatest(UPDATE_COMMUNITY, updateCommunitySaga);
}

const initialState = {
  title: '',
  body: '',
  tags: [],
  community: null,
  communityError: null,
  originalCommunityId: null,
};

const communityCreate = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [CREATE_COMMUNITY]: state => ({
      ...state,
      // community와 communityError를 초기화
      community: null,
      communityError: null,
    }),
    // 커뮤니티 작성 성공
    [CREATE_COMMUNITY_SUCCESS]: (state, { payload: community }) => ({
      ...state,
      community,
    }),
    // 커뮤니티 작성 실패
    [CREATE_COMMUNITY_FAILURE]: (state, { payload: communityError }) => ({
      ...state,
      communityError,
    }),
    [SET_ORIGINAL_COMMUNITY]: (state, { payload: community }) => ({
      ...state,
      title: community.title,
      body: community.body,
      tags: community.tags,
      originalCommunityId: community._id,
    }),
    [UPDATE_COMMUNITY_SUCCESS]: (state, { payload: community }) => ({
      ...state,
      community,
    }),
    [UPDATE_COMMUNITY_FAILURE]: (state, { payload: communityError }) => ({
      ...state,
      communityError,
    }),
  },
  initialState,
);

export default communityCreate;
