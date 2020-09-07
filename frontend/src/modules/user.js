import { createAction, handleActions } from 'redux-actions';

const SAMPLE_ACTION = 'user/SAMPLE_ACTION';

export const sampleAction = createAction(SAMPLE_ACTION);

const initialState = {};

const user = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state,
  },
  initialState,
);

export default user;
