import { Link } from 'react-router-dom';

// styles module
import styles from './Navbar.module.css';

export default function Navbar() {
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
      </ul>
    </nav>
  );
}
