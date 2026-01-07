import './Layout.css';
import Header from '../Header/Header';
import Search from '../Search/Search';

function Layout() {
  return (
    <div className="layout">
      <Header/>
      <Search/>
    </div>
  );
}

export default Layout;