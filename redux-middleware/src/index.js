import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from './modules';
// react-router-dom 설치 시 자동으로 함께 설치되는 dependency.
import { createBrowserHistory } from 'history';

import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

const customHistory = createBrowserHistory();

// saga 내부에서 history 를 사용할 일이 있다면 context 에 history 를 등록해서 사용해주면 된다.
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory
  }
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, ReduxThunk.withExtraArgument({ history: customHistory }),
    logger
  ))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
