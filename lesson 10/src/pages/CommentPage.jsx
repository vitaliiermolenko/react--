import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, selectComments } from '../redux/commentsSlice';

function CommentPage() {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const loading = useSelector((state) => state.comments.loading);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div>
      <h2>Список коментарів</h2>
      {loading === 'pending' ? (
        <p>Loading...</p>
      ) : loading === 'fulfilled' ? (
        comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
        ))
      ) : (
        <p>Error: {loading === 'rejected' ? 'Failed to fetch data' : null}</p>
      )}
    </div>
  );
}


export default CommentPage;
