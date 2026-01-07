import './Menu.css';
import LinkButton from '../../shared/components/LinkButton/LinkButton';
import exitIcon from '../../assets/exit.svg';
import userIcon from '../../assets/user.svg';

function Menu() {
  const hasUser = false;

  return (
    <menu className="menu">
      <div className="menu-item">
        <LinkButton>
          <div>Поиск фильмов</div>
        </LinkButton>
      </div>

      <div className="menu-item">
        <LinkButton>
          <span className="menu-label">Мои фильмы</span>
          <span className="notification-icon"></span>
        </LinkButton>
      </div>

      <div className="menu-item">
        <LinkButton>
          {hasUser ? (
            <>
              <span className="label">Выйти</span>
              <span className="exit-icon">
                <img src={userIcon}/>
              </span>
            </>
          ) : (
            <>
              <span className="label">Войти</span>
              <span className="exit-icon">
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