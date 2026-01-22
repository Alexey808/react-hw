import styles from './Header.module.css';
import LinkButton from '../../shared/components/LinkButton/LinkButton';
import Menu from '../Menu/Menu';
import logoIcon from '../../assets/logo.svg';


function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <LinkButton>
          <img src={logoIcon} />
        </LinkButton>
      </div>

      <Menu/>
    </div>
  );
}

export default Header;