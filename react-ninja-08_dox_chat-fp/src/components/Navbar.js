// Router
import { Link } from 'react-router-dom';

// Costum Hooks
import { useLogout } from '../hooks/useLogout';

// Styles
import './Navbar.css';

// Logo
import Temple from '../assets/temple.svg';

export default function Navbar() {
  // Costum Hooks
  const { logout, isPending } = useLogout();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="logo app" />
          <span>Dox Chats</span>
        </li>
        <li>
          <Link to="/login">Masuk</Link>
        </li>
        <li>
          <Link to="/signup">Daftar</Link>
        </li>
        {!isPending && (
          <button className="btn" onClick={logout}>
            Keluar
          </button>
        )}
        {isPending && (
          <button className="btn" disabled>
            Sedang Keluar..
          </button>
        )}
      </ul>
    </div>
  );
}
