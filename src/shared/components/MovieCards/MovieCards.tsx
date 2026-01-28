import styles from './MovieCards.module.css';
import MovieCard from '../MovieCard/MovieCard.tsx';
import {MovieCardsProps} from './MovieCards.interface.ts';

export default function MovieCards({movies}: MovieCardsProps) {
  return (
    <div className={styles.movies}>
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} movie={movie}/>
        );
      })}
    </div>
  );
}