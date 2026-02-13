import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FavoriteState} from './favorite.slice.interface.ts';
import {Movie} from '../../shared/models/movie/movie.interface.ts';
import {userSlice} from '../userSlice/user.slice.ts';

const initialState: FavoriteState = {
  favoriteMovies: [],
}

export const favoriteSlice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.favoriteMovies.push(action.payload);
    },
    removeMovie: (state, action: PayloadAction<string>) => {
      state.favoriteMovies = state.favoriteMovies.filter((movie) => movie.imdb_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSlice.actions.removeUser, (state) => {
      state.favoriteMovies = [];
    })
  }
});

export const favoriteActions = favoriteSlice.actions;