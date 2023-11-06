import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import postsReducer from './postsSlice';
import photosReducer from './photosSlice';
import commentsReducer from './commentsSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    photos: photosReducer,
    comments: commentsReducer,
  },
});

export default store;
