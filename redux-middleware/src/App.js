import React from 'react';
import { Route } from 'react-router-dom';

import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';


function App() {
  return (
    <>
      <Route path="/" component={PostListPage} exact />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;
