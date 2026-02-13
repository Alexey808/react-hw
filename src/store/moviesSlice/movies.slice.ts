import {MoviesState} from './movies.slice.interface.ts';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getMovieInfoById, getMoviesByName} from '../../api/api.tsx';

const initialState: MoviesState = {
  movies: [],
};

export const loadMoviesByName = createAsyncThunk('movies/loader',
  async (name: string) => await getMoviesByName(name)
);

export const loadMovieInfoById = createAsyncThunk('movie/info',
  async (id: string) => await getMovieInfoById(id)
)

export const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadMoviesByName.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(loadMoviesByName.rejected, (state, action) => {
      state.movies = [];
    });
  }
});

export const moviesSliceActions = moviesSlice.actions;