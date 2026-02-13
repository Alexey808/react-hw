import Search from './Components/Search/Search.tsx';
import {useState} from 'react';
import {Movie} from '../../shared/models/movie/movie.interface.ts';
import MovieCards from '../../shared/components/MovieCards/MovieCards.tsx';
import NoMoviesFound from './Components/NoMoviesFound/NoMoviesFound.tsx';
import {getMoviesByName} from '../../api/api.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, AppStore} from '../../store/store.ts';
import {loadMoviesByName} from '../../store/moviesSlice/movies.slice.ts';


export default function SearchMoviesPage() {
  const {movies} = useSelector((state: AppStore) => state.moviesStore);
  const [searchByName, setSearchByName] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const loadData = async (name: string) => {
      dispatch(loadMoviesByName(name));
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