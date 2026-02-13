import {UserState} from './userSlice/user.slice.interface.ts';
import {MoviesState} from './moviesSlice/movies.slice.interface.ts';
import {FavoriteState} from './favoriteSlice/favorite.slice.interface.ts';

export interface AppState {
  favorites: FavoriteState[],
  movies: MoviesState[],
  user: UserState,
}