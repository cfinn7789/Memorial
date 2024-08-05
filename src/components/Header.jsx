import { Link, useLocation } from 'react-router-dom';
import Navigation from './Navigation'

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <div className="banner-image">
      <nav className="navbar-brand">
        <Link to="/">Flynn</Link>
      </nav>
        <Navigation />
    </div>
  );
}

export default Header;