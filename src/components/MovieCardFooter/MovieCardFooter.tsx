import styles from "./MovieCardFooter.module.css";
import SvgLogo from "../../shared/components/SvgLogo/SvgLogo";
import likeIcon from "../../assets/like.svg";
import { useState } from "react";
import cn from "classnames";
import { MovieCardFooterProps } from './MovieCardFooter.interface';

export default function MovieCardFooter({moveId}: MovieCardFooterProps) {
  const [userFavoriteMovieIds, setUserFavoriteMoveIds] = useState([5]);
  const isFavorites = userFavoriteMovieIds.includes(moveId);

  const icon = isFavorites
    ? <SvgLogo color={isFavorites ? 'rgba(55, 216, 167, 1)' : 'rgba(123, 110, 246, 1)'}/>
    : <img src={likeIcon} alt="Добавить в избранное"/>;
  
  const handleUserFavoriteMovie = () => {
    setUserFavoriteMoveIds((prevMovieIds) => {
      return prevMovieIds.includes(moveId)
        ? prevMovieIds.filter((id) => id !== moveId)
        : [...prevMovieIds, moveId];
    })
  }

  return (
    <div className={cn(styles['move-card-footer'], {
      [styles['has-favorites']]: isFavorites
    })}>
      <button onClick={handleUserFavoriteMovie}>
        { icon }
        { isFavorites
          ? 'В избранном'
          : 'В избранное'
        }
      </button>
    </div>
  );
}