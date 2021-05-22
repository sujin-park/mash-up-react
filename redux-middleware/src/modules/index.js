import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import counter, { counterSaga } from './counter';
import posts, { postsSaga } from './posts';

const rootReducer = combineReducers({ counter, posts }); 

export function* rootSaga() {
  yield all([counterSaga(), postsSaga()]);
}

export default rootReducer;