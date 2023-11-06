import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Створення асинхронної дії для завантаження коментарів
export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

// Створення slice для коментарів
const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      });
  },
});
// Створення селектора для вибору коментарів
export const selectComments = (state) => state.comments.data;

export default commentsSlice.reducer;
