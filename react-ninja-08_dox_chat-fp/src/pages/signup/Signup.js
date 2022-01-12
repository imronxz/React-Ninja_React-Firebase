// React Hooks
import { useState } from 'react';

// Costum Hooks
import { useSignup } from '../../hooks/useSignup';

// Styles
import './Signup.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  // Costum Hooks
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  //TODO: upload image function
  const uploadProfilePicture = (e) => {
    setThumbnail(null);

    let selected = e.target.files[0];
    // console.log(selected);

    if (!selected) {
      setThumbnailError('Tidak ada gambar yang dipilih');
      return;
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Hanya gambar yang dapat diupload');
      return;
    }
    if (selected.size > 1000000) {
      setThumbnailError('Ukuran gambar maksimal 1MB');
      return;
    }
    // * if everything is ok, set the image
    setThumbnailError(null);
    setThumbnail(selected);
    console.log('Berhasil Upload Gambar');
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
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
          maxLength={9}
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Nama Lengkap"
          required
        />
      </label>
      <label>
        <span>Foto Profile:</span>
        <input
          type="file"
          onChange={uploadProfilePicture}
          placeholder="Foto Profile"
          required
        />
        {/* output thumbnail if get error */}
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      {!isPending && <button className="btn">Daftar Akun</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
