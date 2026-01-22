import styles from './Menu.module.css';
import LinkButton from '../../shared/components/LinkButton/LinkButton';
import exitIcon from '../../assets/exit.svg';
import userIcon from '../../assets/user.svg';
import { useContext } from 'react';
import { ActiveUser, ActiveUserContext } from '../../shared/contexts/ActiveUserContext/ActiveUserContext.context';

function Menu() {
  const { name, isLogined, logoutActiveUser, setActiveUser } = useContext<ActiveUserContext>(ActiveUser);

  const logout = () => {
    if (isLogined && !!logoutActiveUser) {
      logoutActiveUser();
    }
  };

  return (
    <menu className={styles.menu}>
      <div className={styles['menu-item']}>
        <LinkButton>
          <span>Поиск&nbsp;фильмов</span>
        </LinkButton>
      </div>

      <div className={styles['menu-item']}>
        <LinkButton>
          <span>Мои&nbsp;фильмы</span>
          <span className={styles['notification-icon']}></span>
        </LinkButton>
      </div>

      { !!isLogined &&
        <div className={styles['menu-item']}>
          <LinkButton>
            <span>{name}</span>
          </LinkButton>
        </div>
      }

      <div className={styles['menu-item']}>
        <LinkButton onClick={logout}>
          {isLogined ? (
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