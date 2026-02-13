import styles from './MoviePage.module.css';
import {Await, useLoaderData, useParams} from 'react-router-dom';
import {MockMovies} from '../../shared/models/movie/MockMovies.ts';
import FavoriteButton from '../../shared/components/FavoriteButton/FavoriteButton.tsx';
import RatingTag from '../../shared/components/RatingTag/RatingTag.tsx';
import {ShortMovieInfo} from '../../shared/models/movie/movieInfo.interface.ts';
import {Suspense, useEffect} from 'react';
import Loader from '../../shared/components/Loader/Loader.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, AppStore} from '../../store/store.ts';
import {favoriteActions} from '../../store/favoriteSlice/favorite.slice.ts';

export default function MoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const shortMovieInfo = useLoaderData<ShortMovieInfo>();
  const isFavoriteMovie = useSelector((store: AppStore) => !!store.favoritesStore.favoriteMovies.find(
    (m) => m.imdb_id === id)
  );

  const { movies } = useSelector((state: AppStore) => state.moviesStore);

  const handleAddMovieToFavoriteMovie = () => {
    if (isFavoriteMovie && id) {
      dispatch(favoriteActions.removeMovie(id));
    } else {
      const movieInfoFromMovieList = movies.find((movie) => movie.imdb_id === id);
      if (movieInfoFromMovieList && !isFavoriteMovie) {
        dispatch(favoriteActions.addMovie(movieInfoFromMovieList));
      }
    }
  }

  return (
    <div className={styles['movie-page']}>
      <div className={styles['search-result']}>
        <div className={styles['search-label']}>Поиск фильмов</div>
        <div className={styles['movie-title']}>{shortMovieInfo.name}</div>
      </div>

      <div className={styles['movie-info']}>
        <div className={styles['poster']}>
          <img src={shortMovieInfo.image} alt='poster'/>
        </div>

        <div className={styles['description']}>
          <div className={styles['description-info']}>{shortMovieInfo.description}</div>
          <div className={styles['buttons']}>
            <FavoriteButton onClick={handleAddMovieToFavoriteMovie} isFavorite={isFavoriteMovie}/>
          </div>
          <div className={styles['description-row']}>
            <div className={styles['description-label']}>Тип</div>
            <div className={styles['description-value']}>{shortMovieInfo['@type']}</div>
          </div>
          <div className={styles['description-row']}>
            <div className={styles['description-label']}>Дата</div>
            <div className={styles['description-value']}>{shortMovieInfo.datePublished}</div>
          </div>
          <div className={styles['description-row']}>
            <div className={styles['description-label']}>Длительность</div>
            <div className={styles['description-value']}>{shortMovieInfo.duration} мин</div>
          </div>
          <div className={styles['description-row']}>
            <div className={styles['description-label']}>Жанр</div>
            <div className={styles['description-value']}>
              {shortMovieInfo.genre.join(', ')}
            </div>
          </div>
        </div>
      </div>

      <div className={styles['reviews']}>
        <div className={styles['reviews-label']}>Отзывы</div>
        <div className={styles['review-card']}>
          <div className={styles['review-header']}>
            <div className={styles['review-title']}>Заголовок отзыва</div>
            <div className={styles['review-date']}>Дата отзыва</div>
          </div>
          <div className={styles['review-body']}>Текст отзыва</div>
        </div>
      </div>
    </div>
  );
}