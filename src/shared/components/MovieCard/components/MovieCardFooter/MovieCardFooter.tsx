import styles from "./MovieCardFooter.module.css";
import {type MouseEvent} from "react";
import { MovieCardFooterProps } from './MovieCardFooter.interface.ts';
import FavoriteButton from '../../../FavoriteButton/FavoriteButton.tsx';
import {favoriteActions} from '../../../../../store/favoriteSlice/favorite.slice.ts';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, AppStore} from '../../../../../store/store.ts';

export default function MovieCardFooter({movie}: MovieCardFooterProps) {
  const { favoriteMovies } = useSelector((state: AppStore) => state.favoritesStore);
  const movieId = movie.imdb_id;
  const isFavorites = favoriteMovies.map((m) => m.imdb_id).includes(movieId);
  const dispatch = useDispatch<AppDispatch>();


  const handleAddMovieToFavorite = (e: MouseEvent) => {
    e.preventDefault();
    if (isFavorites) {
      dispatch(favoriteActions.removeMovie(movie.imdb_id));
    } else {
      dispatch(favoriteActions.addMovie(movie));
    }
  }

  return (
    <div className={styles['move-card-footer']}>
      <FavoriteButton onClick={handleAddMovieToFavorite} isFavorite={isFavorites}/>
    </div>
  );
}