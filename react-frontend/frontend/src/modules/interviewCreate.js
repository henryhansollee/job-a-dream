import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as interviewsAPI from '../lib/api/interviews';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'create/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'create/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  CREATE_INTERVIEW,
  CREATE_INTERVIEW_SUCCESS,
  CREATE_INTERVIEW_FAILURE,
] = createRequestActionTypes('create/CREATE_INTERVIEW'); // 인터뷰 작성
const SET_ORIGINAL_INTERVIEW = 'create/SET_ORIGINAL_INTERVIEW';
const [
  UPDATE_INTERVIEW,
  UPDATE_INTERVIEW_SUCCESS,
  UPDATE_INTERVIEW_FAILURE,
] = createRequestActionTypes('create/UPDATE_INTERVIEW'); // 인터뷰 수정

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const createInterview = createAction(CREATE_INTERVIEW, ({ title, body, tags }) => ({
  title,
  body,
  tags,
}));
export const setOriginalInterview = createAction(SET_ORIGINAL_INTERVIEW, interview => interview);
export const updateInterview = createAction(
  UPDATE_INTERVIEW_SUCCESS,
  ({ id, title, body, tags }) => ({
    id,
    title,
    body,
    tags,
  }),
);

// saga 생성
const createInterviewSaga = createRequestSaga(CREATE_INTERVIEW, interviewsAPI.createInterview);
const updateInterviewSaga = createRequestSaga(UPDATE_INTERVIEW, interviewsAPI.updateInterview);

export function* interviewCreateSaga() {
  yield takeLatest(CREATE_INTERVIEW, createInterviewSaga);
  yield takeLatest(UPDATE_INTERVIEW, updateInterviewSaga);
}

const initialState = {
  title: '',
  body: '',
  tags: [],
  interview: null,
  interviewError: null,
  originalInterviewId: null,
};

const interviewCreate = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [CREATE_INTERVIEW]: state => ({
      ...state,
      // interview와 interviewError를 초기화
      interview: null,
      interviewError: null,
    }),
    // interview 작성 성공
    [CREATE_INTERVIEW_SUCCESS]: (state, { payload: interview }) => ({
      ...state,
      interview,
    }),
    // interview 작성 실패
    [CREATE_INTERVIEW_FAILURE]: (state, { payload: interviewError }) => ({
      ...state,
      interviewError,
    }),
    [SET_ORIGINAL_INTERVIEW]: (state, { payload: interview }) => ({
      ...state,
      title: interview.title,
      body: interview.body,
      tags: interview.tags,
      originalInterviewId: interview._id,
    }),
    [UPDATE_INTERVIEW_SUCCESS]: (state, { payload: interview }) => ({
      ...state,
      interview,
    }),
    [UPDATE_INTERVIEW_FAILURE]: (state, { payload: interviewError }) => ({
      ...state,
      interviewError,
    }),
  },
  initialState,
);

export default interviewCreate;
