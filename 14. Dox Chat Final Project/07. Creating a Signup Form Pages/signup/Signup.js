// React Hooks
import { useState } from 'react';

// Styles
import './Signup.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  return (
    <form className="auth-form">
      <h2>Buat Akun</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Valid Email"
          required
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Minimal 6 Karakter"
          required
        />
      </label>
      <label>
        <span>Username:</span>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Nama Lengkap"
          required
        />
      </label>
      <label>
        <span>Foto Profile:</span>
        <input type="file" placeholder="Foto Profile" required />
      </label>
      <button className="btn">Daftar Akun</button>
    </form>
  );
}
