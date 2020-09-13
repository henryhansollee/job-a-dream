import { createAction, handleActions } from 'redux-actions';

// 모든 내용 초기화
const INITIALIZE = 'icreate/INITIALIZE';

// 특정 key 값 바꾸기
const CHANGE_FIELD = 'icreate/CHANGE_FIELD';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

const initialState = {
  title: '',
  body: '',
  tags: [],
};

const icreate = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      
      // 특정 key 값을 업데이트
      [key]: value,
    }),
  },
  initialState,
)

export default icreate;