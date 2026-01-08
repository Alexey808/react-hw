import styles from './Menu.module.css';
import LinkButton from '../../shared/components/LinkButton/LinkButton';
import exitIcon from '../../assets/exit.svg';
import userIcon from '../../assets/user.svg';

function Menu() {
  const hasUser = false;

  return (
    <menu className={styles.menu}>
      <div className={styles['menu-item']}>
        <LinkButton>
          <div>Поиск фильмов</div>
        </LinkButton>
      </div>

      <div className={styles['menu-item']}>
        <LinkButton>
          <span>Мои фильмы</span>
          <span className={styles['notification-icon']}></span>
        </LinkButton>
      </div>

      <div className={styles['menu-item']}>
        <LinkButton>
          {hasUser ? (
            <>
              <span>Выйти</span>
              <span className={styles['exit-icon']}>
                <img src={userIcon}/>
              </span>
            </>
          ) : (
            <>
              <span>Войти</span>
              <span className={styles['exit-icon']}>
                <img src={exitIcon}/>
              </span>
            </>
          )}

        </LinkButton>
      </div>
    </menu>
  );
}

export default Menu;