import styles from './Menu.module.css';
import LinkButton from '../../../../../../shared/components/LinkButton/LinkButton.tsx';
import exitIcon from '../../../../../../assets/exit.svg';
import userIcon from '../../../../../../assets/user.svg';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, AppStore} from '../../../../../../store/store.ts';
import {userSliceAction} from '../../../../../../store/userSlice/user.slice.ts';

function Menu() {
  const favoriteMovieCounter = useSelector((store: AppStore) => store.favoritesStore.favoriteMovies.length)
  const { user } = useSelector((store: AppStore) => store.userStore);

  const dispatch = useDispatch<AppDispatch>();
  const logout = () => {
    if (user) {
      dispatch(userSliceAction.removeUser());
    }
  };

  return (
    <menu className={styles.menu}>
      <div className={styles['menu-item']}>
        <LinkButton url='/search-movies'>
          <span>Поиск&nbsp;фильмов</span>
        </LinkButton>
      </div>

      <div className={styles['menu-item']}>
        <LinkButton url='/favorite-movies'>
          <span>Мои&nbsp;фильмы</span>
          {favoriteMovieCounter > 0 && <span className={styles['favorite-movie-counter']}>{favoriteMovieCounter}</span>}
        </LinkButton>
      </div>

      { user &&
        <div className={styles['menu-item']}>
          <LinkButton url='/login'>
            <span>{user.name}</span>
          </LinkButton>
        </div>
      }

      <div className={styles['menu-item']}>
        <LinkButton onClick={logout} url='/login'>
          {user ? (
            <>
              <span>Выйти</span>
              <span className={styles['exit-icon']}>
                <img src={userIcon} alt='user-icon'/>
              </span>
            </>
          ) : (
            <>
              <span>Войти</span>
              <span className={styles['exit-icon']}>
                <img src={exitIcon} alt='user-icon'/>
              </span>
            </>
          )}

        </LinkButton>
      </div>
    </menu>
  );
}

export default Menu;