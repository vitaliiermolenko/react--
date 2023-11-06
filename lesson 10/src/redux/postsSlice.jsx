import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    loading: 'idle', // Початковий стан loading
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = 'pending'; // Під час завантаження встановлюємо loading в 'pending'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = 'fulfilled'; // У разі успішного завершення встановлюємо loading в 'fulfilled'
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = 'rejected'; // У разі помилки встановлюємо loading в 'rejected'
        state.error = action.error.message;
      });
  },
});
// Селектор для вибору даних
export const selectPosts = (state) => state.posts.data;

export default postsSlice.reducer;
