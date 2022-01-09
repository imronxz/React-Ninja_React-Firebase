// Router
import { Link } from 'react-router-dom';

// Costum Hooks
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

// Styles
import './Navbar.css';

// Logo
import Temple from '../assets/temple.svg';

export default function Navbar() {
  // Costum Hooks
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="logo app" />
          <span>Dox Chats</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Masuk</Link>
            </li>
            <li>
              <Link to="/signup">Daftar</Link>
            </li>
          </>
        )}
        {user && (
          <li>
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
          </li>
        )}
      </ul>
    </div>
  );
}
