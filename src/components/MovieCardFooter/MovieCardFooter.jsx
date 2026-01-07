import "./MovieCardFooter.css";
import SvgLogo from "../../shared/components/SvgLogo/SvgLogo";
import likeIcon from "../../assets/like.svg";
import { useState } from 'react';

export default function MovieCardFooter({moveId}) {
  const [userFavoriteMovieIds, setUserFavoriteMoveIds] = useState([5]);
  const isFavorites = userFavoriteMovieIds.includes(moveId);

  const icon = isFavorites
    ? <SvgLogo color={isFavorites ? 'rgba(55, 216, 167, 1)' : 'rgba(123, 110, 246, 1)'} alt="Избранное"/>
    : <img src={likeIcon} alt="Добавить в избранное"/>;
  
  const handleUserFavoriteMovie = () => {
    setUserFavoriteMoveIds((prevMovieIds) => {
      return prevMovieIds.includes(moveId)
        ? prevMovieIds.filter((id) => id !== moveId)
        : [...prevMovieIds, moveId];
    })
  }

  return (
    <div className={`move-card-footer${isFavorites ? ' has-favorites' : ''}`}>
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