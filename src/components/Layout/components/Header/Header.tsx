import styles from './Header.module.css';
import LinkButton from '../../../../shared/components/LinkButton/LinkButton.tsx';
import Menu from './components/Menu/Menu.tsx';
import logoIcon from '../../../../assets/logo.svg';


function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <LinkButton url='/'>
          <img src={logoIcon} alt="logo" />
        </LinkButton>
      </div>

      <Menu/>
    </div>
  );
}

export default Header;