import { useState } from 'react';

export default function TransaksiForm() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, amount });
  };

  return (
    <>
      <h3>Form Transaksi</h3>
      <form onSubmit={handleSubmit}>
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
