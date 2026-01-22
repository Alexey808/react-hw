import styles from './Layout.module.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';

function Layout() {
  return (
    <>
      <div className={styles.layout}>
        <Header/>
        <Search/>
        <Movies/>
        <Login/>
      </div>
    </>

  );
}

export default Layout;