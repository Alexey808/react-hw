import {MockMovies} from '../../shared/models/movie/MockMovies.ts';
import MovieCards from '../../shared/components/MovieCards/MovieCards.tsx';
import Title from '../../shared/components/Title/Title.tsx';
import styles from './FavoriteMoviesPage.module.css';

export default function FavoriteMoviesPage() {
  const favoriteMovies = MockMovies;
  return (
    <div>
      <Title title="Избранное" className={styles['title']}/>
      <MovieCards movies={favoriteMovies}/>
    </div>
  );
}


