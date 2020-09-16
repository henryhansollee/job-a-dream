import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as interviewsAPI from '../lib/api/interviews';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_INTERVIEW,
  READ_INTERVIEW_SUCCESS,
  READ_INTERVIEW_FAILURE,
] = createRequestActionTypes('interview/READ_INTERVIEW');
const UNLOAD_INTERVIEW = 'interview/UNLOAD_INTERVIEW'; //  인터뷰 페이지에서 벗어날 때 데이터 비우기

export const readInterview = createAction(READ_INTERVIEW, id => id);
export const unloadInterview = createAction(UNLOAD_INTERVIEW);

const readInterviewSaga = createRequestSaga(READ_INTERVIEW, interviewsAPI.readInterview);
export function* interviewSaga() {
  yield takeLatest(READ_INTERVIEW, readInterviewSaga);
}

const initialState = {
  interview: null,
  error: null,
};

const interview = handleActions(
  {
    [READ_INTERVIEW_SUCCESS]: (state, { payload: interview }) => ({
      ...state,
      interview,
    }),
    [READ_INTERVIEW_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_INTERVIEW]: () => initialState,
  },
  initialState,
);

export default interview;
