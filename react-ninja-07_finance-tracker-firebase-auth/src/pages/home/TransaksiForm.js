import { useEffect, useState } from 'react';

import { useFirestore } from '../../hooks/useFirestore';
import { useAuthContext } from '../../hooks/useAuthContext';

// Received {uid} props from Home.js
export default function TransaksiForm({ uid }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  // * useFirestore
  const { addDocument, response } = useFirestore('transaksi');
  const { color } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount,
    });
  };

  // * Reset the form fields when the user submits success
  useEffect(() => {
    if (response.success) {
      setName('');
      setAmount('');
    }
  }, [response.success]);

  return (
    <>
      <h3>Form Transaksi</h3>
      <form onSubmit={handleSubmit} style={{ background: color }}>
        <label>
          <span>Nama Transaksi:</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Nama Transaksi"
            required
          />
        </label>
        <label>
          <span>Jumlah Pengeluaran (Rp.):</span>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            placeholder="Jumlah Transaksi"
            required
          />
        </label>
        <button>Tambah Transaksi</button>
      </form>
    </>
  );
}
