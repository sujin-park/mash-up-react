import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, goToHome, printState } from '../modules/posts';
import Post from '../components/Post';
import { reducerUtils } from '../lib/asyncUtils';

function PostContainer({ postId }) {
  const { data, loading, error } = useSelector(state => state.posts.post[postId] || reducerUtils.initial());
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPost(postId));
  }, [postId, data, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생...</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
      <button onClick={() => dispatch(printState())}>상태 출력</button>
      <Post post={data} />
    </>
  );
}

export default PostContainer;