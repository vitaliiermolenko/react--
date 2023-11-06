import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPosts } from '../redux/postsSlice';

function PostPage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Список постів</h2>
      {loading === 'pending' ? (
        <p>Loading...</p>
      ) : loading === 'fulfilled' ? (
        posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))
      ) : (
        <p>Error: {loading === 'rejected' ? 'Failed to fetch data' : null}</p>
      )}
    </div>
  );
}


export default PostPage;
