import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Створюємо асинхронну дію для завантаження фотографій
export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch photos');
  }
});

// Редуктор для фотографій
const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      });
  },
});

// Експортуємо селектор для фотографій
export const selectPhotos = (state) => state.photos.data;

export default photosSlice.reducer;
