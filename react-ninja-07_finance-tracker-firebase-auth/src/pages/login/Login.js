// npm
import { useState } from 'react';

// Costum Hook
import { useLogin } from '../../hooks/useLogin';
import { useAuthContext } from '../../hooks/useAuthContext';

// Styles
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mode } = useAuthContext();
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles['login-form']} ${mode}`}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          placeholder="Masukkan Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          placeholder="Minimal 6 Karakter"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {!isPending && <button className="btn">MASUK</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
