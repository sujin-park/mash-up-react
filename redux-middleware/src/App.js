import React from 'react';
import { Route } from 'react-router-dom';

import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <>
      <CounterContainer />
      <Route path="/" component={PostListPage} exact />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;
