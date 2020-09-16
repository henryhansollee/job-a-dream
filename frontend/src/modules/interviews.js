import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as interviewsAPI from '../lib/api/interviews';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_INTERVIEWS,
  LIST_INTERVIEWS_SUCCESS,
  LIST_INTERVIEWS_FAILURE,
] = createRequestActionTypes('interviews/LIST_INTERVIEWS');

export const listInterviews = createAction(
  LIST_INTERVIEWS,
  ({ tag, username, page }) => ({ tag, username, page }),
);

const listInterviewsSaga = createRequestSaga(LIST_INTERVIEWS, interviewsAPI.listInterviews);
export function* interviewsSaga() {
  yield takeLatest(LIST_INTERVIEWS, listInterviewsSaga);
}

const initialState = {
  interviews: null,
  error: null,
  lastPage: 1,
};

const interviews = handleActions(
  {
    [LIST_INTERVIEWS_SUCCESS]: (state, { payload: interviews, meta: response }) => ({
      ...state,
      interviews,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_INTERVIEWS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default interviews;
