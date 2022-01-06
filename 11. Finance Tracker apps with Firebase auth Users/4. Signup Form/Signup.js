import { useState } from 'react';

// Styles
import styles from './Signup.module.css';

export default function Signup() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user, email, password);
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
      <button className="btn">DAFTAR</button>
    </form>
  );
}
