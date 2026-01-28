import styles from "./MovieCard.module.css";
import MovieCardFooter from "./components/MovieCardFooter/MovieCardFooter.tsx";
import { MovieCardProps } from './MovieCard.interface.ts';
import {Link} from 'react-router-dom';
import RatingTag from '../RatingTag/RatingTag.tsx';


export default function MovieCard({movie}: MovieCardProps) {
  const { id, name, rate, poster } = movie;

  const posterInlineStyle = {
    backgroundImage: `url(${poster})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <Link to={`/movie/${id}`} className='default-link'>
      <div className={styles['movie-card']}>
        <div className={styles['rate-block']}>
          <RatingTag value={rate}/>
        </div>
        <div className={styles.poster} style={posterInlineStyle}></div>
        <div className={styles.name}>
          {name}
        </div>
        <MovieCardFooter moveId={id}/>
      </div>
    </Link>
  );
}