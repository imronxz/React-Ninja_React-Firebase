import { Link } from 'react-router-dom';

// Costum Context Hook
import { useTheme } from '../hooks/useTheme';

// Styles
import './Navbar.css';
import SearchBar from '../components/SearchBar';

export default function Navbar() {
  // TODO: Add a context hook to access the theme
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Resep Nusantara</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Tambah</Link>
        {/* <Link to="/search">Search</Link>
        <Link to="/recipe">Recipe</Link> */}
      </nav>
    </div>
  );
}
