import { Link } from 'react-router-dom';

// Styles
import './Navbar.css';
import SearchBar from '../components/SearchBar';

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Resep Rumahan</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create</Link>
        {/* <Link to="/search">Search</Link>
        <Link to="/recipe">Recipe</Link> */}
      </nav>
    </div>
  );
}
