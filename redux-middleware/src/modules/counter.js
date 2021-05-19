import { delay, put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  // 모든 호출에 대해서 dispatch 한다. (takeEvery)
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  // 가장 마지막에 들어온 호출만 dispatch 한다. (takeLatest)
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);

  // 가장 처음 들어온 호출만 dispatch 한다.
  yield takeLeading(INCREASE_ASYNC, increaseSaga);
}

const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}