import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// Styles
import styles from './Signup.module.css';

export default function Signup() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Costume hooks
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, user);
  };

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>signup</h2>
      <label>
        <span>Username:</span>
        <input
          type="text"
          placeholder="ID User"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          placeholder="Valid Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          placeholder="Minimal 6 Karakter"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {/* jika isPending = false tampilkan DAFTAR btn,
      jika isPending = true tampilkan loading btn*/}
      {!isPending && <button className="btn">DAFTAR</button>}
      {/* disabled: button ketika mengirim data ke firebase */}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
