import { Link } from 'react-router-dom';

// Styles
import './Navbar.css';

// Logo
import Temple from '../assets/temple.svg';

export default function Navbar() {
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
        <button className="btn">Keluar</button>
      </ul>
    </div>
  );
}
