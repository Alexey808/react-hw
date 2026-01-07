import './Layout.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Movies from '../Movies/Movies';

function Layout() {
  return (
    <div className="layout">
      <Header/>
      <Search/>
      <Movies/>
    </div>
  );
}

export default Layout;