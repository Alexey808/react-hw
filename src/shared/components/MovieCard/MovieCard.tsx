import styles from "./MovieCard.module.css";
import MovieCardFooter from "./components/MovieCardFooter/MovieCardFooter.tsx";
import { MovieCardProps } from './MovieCard.interface.ts';
import {Link} from 'react-router-dom';
import RatingTag from '../RatingTag/RatingTag.tsx';


export default function MovieCard({movie}: MovieCardProps) {
  const { imdb_id, img_poster, title, rank } = movie;

  const posterInlineStyle = {
    backgroundImage: `url(${img_poster})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <Link to={`/movie/${imdb_id}`} className='default-link'>
      <div className={styles['movie-card']}>
        <div className={styles['rate-block']}>
          <RatingTag value={rank}/>
        </div>
        <div className={styles.poster} style={posterInlineStyle}></div>
        <div className={styles.name}>
          {title}
        </div>
        <MovieCardFooter movie={movie}/>
      </div>
    </Link>
  );
}