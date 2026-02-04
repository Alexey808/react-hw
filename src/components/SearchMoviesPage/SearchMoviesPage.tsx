import Search from './Components/Search/Search.tsx';
import {useState} from 'react';
import {Movie} from '../../shared/models/movie/movie.interface.ts';
import MovieCards from '../../shared/components/MovieCards/MovieCards.tsx';
import NoMoviesFound from './Components/NoMoviesFound/NoMoviesFound.tsx';
import {getMoviesByName} from '../../api/helperApi.tsx';


export default function SearchMoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchByName, setSearchByName] = useState('');

  const loadData = async (name: string) => {
      const movies = await getMoviesByName(name);
      setMovies(movies);
  };

  const searchMovie = (movieName: string) => {
    setSearchByName(movieName);
    loadData(movieName);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchByName.toLowerCase())
  );

  return (
    <>
      <Search searchMovie={searchMovie}/>
      { filteredMovies.length > 0 ? <MovieCards movies={filteredMovies}/> : <NoMoviesFound/>}
    </>
  )
}