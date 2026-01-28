import Search from './Components/Search/Search.tsx';
import {MockMovies} from '../../shared/models/movie/MockMovies.ts';
import {useCallback, useState} from 'react';
import {Movie} from '../../shared/models/movie/movie.interface.ts';
import MovieCards from '../../shared/components/MovieCards/MovieCards.tsx';
import NoMoviesFound from './Components/NoMoviesFound/NoMoviesFound.tsx';

export default function SearchMoviesPage() {
  const [movies, setMovies] = useState<Movie[]>(MockMovies);
  const [searchByName, setSearchByName] = useState('');

  const searchMovie = (movieName: string) => {
    setSearchByName(movieName);
  };

  const filteredMovies = useCallback(() => {
    return movies.filter(movie =>
      movie.name.toLowerCase().includes(searchByName.toLowerCase())
    );
  }, [movies, searchByName]);

  return (
    <>
      <Search searchMovie={searchMovie}/>
      { filteredMovies().length > 0 ? <MovieCards movies={filteredMovies()}/> : <NoMoviesFound/>}
    </>
  )
}