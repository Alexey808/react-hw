import MovieCards from '../../shared/components/MovieCards/MovieCards.tsx';
import Title from '../../shared/components/Title/Title.tsx';
import styles from './FavoriteMoviesPage.module.css';
import {useSelector} from 'react-redux';
import {AppStore} from '../../store/store.ts';

export default function FavoriteMoviesPage() {
  const { favoriteMovies } = useSelector((state: AppStore) => state.favoritesStore);
  return (
    <div>
      <Title title="Избранное" className={styles['title']}/>
      <MovieCards movies={favoriteMovies}/>
    </div>
  );
}


