import styles from "./MovieCard.module.css";
import rateIcon from "../../assets/star.svg";
import MovieCardFooter from "../MovieCardFooter/MovieCardFooter";
import { MovieCardProps } from './MovieCard.interface';


export default function MovieCard({movie}: MovieCardProps) {
  const { id, name, rate, poster } = movie;

  const posterInlineStyle = {
    backgroundImage: `url(${poster})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={styles['movie-card']}>
      <div className={styles['rate-block']}>
        <img src={rateIcon} alt="Рейтинг"/>
        {rate}
      </div>
      <div className={styles.poster} style={posterInlineStyle}></div>
      <div className={styles.name}>
        {name}
      </div>
      <MovieCardFooter moveId={id}/>
    </div>
  );
}