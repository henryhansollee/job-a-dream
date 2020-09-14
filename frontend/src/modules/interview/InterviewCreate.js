import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga';
import * as interviewAPI from '../../lib/api/interview';
import { takeLatest } from 'redux-saga/effects';

// 모든 내용 초기화
const INITIALIZE = 'icreate/INITIALIZE';

// 특정 key 값 바꾸기
const CHANGE_FIELD = 'icreate/CHANGE_FIELD';
const [
  ICREATE_POST,
  ICREATE_SUCCESS,
  ICREATE_FAILURE,
] = createRequestActionTypes('icreate/ICREATE_POST');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const icreatepost = createAction(ICREATE_POST, ({ title, body, tags }) => ({
  title,
  body,
  tags,
}));

const icreatePostSaga = createRequestSaga(ICREATE_POST, interviewAPI.icreatePost);
export function* icreateSaga() {
  yield takeLatest(ICREATE_POST, icreatePostSaga);
}

const initialState = {
  title: '',
  body: '',
  tags: [],
  ipost: null,
  ipostError: null,
};

const icreate = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      
      // 특정 key 값을 업데이트
      [key]: value,
    }),
    [ICREATE_POST]: state => ({
      ...state,
      ipost: null,
      ipostError: null,
    }),
    [ICREATE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      ipostError,
    }),
  },
  initialState,
)

export default icreate;