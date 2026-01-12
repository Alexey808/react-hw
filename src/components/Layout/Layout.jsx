import './Layout.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';

function Layout() {
  return (
    <div className="layout">
      <Header/>
      <Search/>
      <Movies/>
      <Login/>
    </div>
  );
}

export default Layout;