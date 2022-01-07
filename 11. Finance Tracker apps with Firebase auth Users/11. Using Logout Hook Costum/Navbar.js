import { Link } from 'react-router-dom';

import { useLogout } from '../hooks/useLogout';
// styles module
import styles from './Navbar.module.css';

export default function Navbar() {
  const { logout } = useLogout();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Uang Saya</li>
        <li>
          <Link to="/login">Masuk</Link>
        </li>
        <li>
          <Link to="/signup">Daftar</Link>
        </li>

        <li>
          <button className="btn" onClick={logout}>
            Keluar
          </button>
        </li>
      </ul>
    </nav>
  );
}
