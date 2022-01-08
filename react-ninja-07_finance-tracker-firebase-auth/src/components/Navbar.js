import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

// styles module
import styles from './Navbar.module.css';

export default function Navbar() {
  const { logout } = useLogout();
  const { user, color } = useAuthContext();

  return (
    <nav className={styles.navbar} style={{ background: color }}>
      <ul>
        <li className={styles.title}>Uang Saya</li>

        {/* jika tidak ada user login return jsx... */}
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

        {/* jika ada user login return jsx... */}
        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>
                Keluar
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
