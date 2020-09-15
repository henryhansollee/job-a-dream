//FETCH_ARTICLE액션이 불렸을 때
//데이터를 articleList에 저장해 새로운 state를 반환해줌

import { FETCH_ARTICLE } from '../actions/index';

const initialState = {
  articleList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLE:
      return { ...state, articleList: action.payload.data };
    default:
      return state;
  }
}
