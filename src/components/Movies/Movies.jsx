import "./Movies.css";
import { useState } from 'react';
import { MockMovies } from './MockMovies';
import MovieCard from '../MovieCard/MovieCard';


export default function Movies() {
  const [movies, setMovies] = useState(MockMovies);

  return (
    <div class="movies">
      {movies.map((move) => {
        return (
          <MovieCard key={move.id} move={move}/>
        );
      })}
    </div>
  )
}