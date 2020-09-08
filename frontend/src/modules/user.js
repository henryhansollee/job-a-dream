import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as userAPI from '../lib/api/user';

const CHANGE_FIELD = 'user/CHANGE_FIELD';
const INITIALZE_FORM ='user/INITIALIZE_FORM';

const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionTypes(
  'user/SIGNUP',
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'user/login',
);

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);

export const initializeForm = createAction(INITIALZE_FORM, form => form);

export const signup = createAction(SIGNUP, ({ email, password }) => ({
  email,
  password,
}));

export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}));

const signupSaga = createRequestSaga(SIGNUP, userAPI.signup);
const loginSaga = createRequestSaga(LOGIN, userAPI.login);
export function* userSaga() {
  yield takeLatest(SIGNUP, signupSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  signup: {
    email: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    email: '',
    password: '',
  },
  user: null,
  userError: null,
};

const user = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value;
      }),
    [INITIALZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      userError: null,
    }),
    [SIGNUP_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      userError: null,
      user,
    }),
    [SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      userError: error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      userError: null,
      user,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      userError: error,
    }),
  },
  initialState,
);

export default user;
