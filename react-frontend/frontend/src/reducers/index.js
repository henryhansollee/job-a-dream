//combineReducers로 우리가 사용할 리듀서들을 묶어
//rootReducer로 export

import { combineReducers } from 'redux';
import ListsReducer from './reducer_lists';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  lists: ListsReducer,
  form: formReducer,
});
export default rootReducer;
