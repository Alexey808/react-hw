import styles from "./Movies.module.css";
import { useState } from 'react';
import { MockMovies } from './MockMovies';
import MovieCard from '../MovieCard/MovieCard';
import { Movie } from './Movie.interface';


export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>(MockMovies);

  return (
    <div className={styles.movies}>
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} movie={movie}/>
        );
      })}
    </div>
  )
}