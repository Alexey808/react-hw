import styles from './MoviePage.module.css';
import {Await, useLoaderData, useParams} from 'react-router-dom';
import {MockMovies} from '../../shared/models/movie/MockMovies.ts';
import FavoriteButton from '../../shared/components/FavoriteButton/FavoriteButton.tsx';
import RatingTag from '../../shared/components/RatingTag/RatingTag.tsx';
import {ShortMovieInfo} from '../../shared/models/movie/movieInfo.interface.ts';
import {Suspense} from 'react';
import Loader from '../../shared/components/Loader/Loader.tsx';

export default function MoviePage() {
  const { id } = useParams();
  const shortMovieInfo = useLoaderData<ShortMovieInfo>();

  console.log('component movieInfo', shortMovieInfo);

  const movie = MockMovies.find((m) => m.id === Number(id))!;
  const mockFavorite = true;
  const mockAddToFavoriteMovie = () => {}

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
            {/*<RatingTag value={shortMovieInfo.review.reviewRating.ratingValue}/>*/}
            <FavoriteButton click={mockAddToFavoriteMovie} isFavorite={mockFavorite}/>
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