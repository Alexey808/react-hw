import styles from './Menu.module.css';
import LinkButton from '../../shared/components/LinkButton/LinkButton';
import exitIcon from '../../assets/exit.svg';
import userIcon from '../../assets/user.svg';
import { useActiveUserStorage } from '../../shared/hooks/useActiveUserStorage/useActiveUserStorage';

function Menu() {
  const [activeUser, setActiveUser, unsetActiveUser] = useActiveUserStorage();
  
  const logout = () => {
    if (activeUser) {
      unsetActiveUser(activeUser.name);
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

      { activeUser?.isLogined &&
        <div className={styles['menu-item']}>
          <LinkButton>
            <span>{activeUser.name}</span>
          </LinkButton>
        </div>
      }

      <div className={styles['menu-item']}>
        <LinkButton onClick={logout}>
          {activeUser?.isLogined ? (
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