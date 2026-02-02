import styles from "./MovieCardFooter.module.css";
import { useState } from "react";
import { MovieCardFooterProps } from './MovieCardFooter.interface.ts';
import FavoriteButton from '../../../FavoriteButton/FavoriteButton.tsx';

export default function MovieCardFooter({moveId}: MovieCardFooterProps) {
  const [userFavoriteMovieIds, setUserFavoriteMoveIds] = useState<string[]>([]);
  const isFavorites = userFavoriteMovieIds.includes(moveId);

  const handleUserFavoriteMovie = () => {
    setUserFavoriteMoveIds((prevMovieIds) => {
      return prevMovieIds.includes(moveId)
        ? prevMovieIds.filter((id) => id !== moveId)
        : [...prevMovieIds, moveId];
    })
  }

  return (
    <div className={styles['move-card-footer']}>
      <FavoriteButton click={handleUserFavoriteMovie} isFavorite={isFavorites}/>
    </div>
  );
}