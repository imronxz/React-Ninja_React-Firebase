// React Hooks
import { useState } from 'react';

// Styles
import './Create.css';

export default function Create() {
  // form field values
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [date, setDate] = useState('');
  const [category, useCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details, date);
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Buat Project Baru 🐱‍🏍</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nama Project:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Nama Project"
          />
        </label>
        <label>
          <span>Detail Project:</span>
          <textarea
            type="text"
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
            placeholder="Detail Project"
          ></textarea>
        </label>
        <label>
          <span>Tanggal Project:</span>
          <input
            type="date"
            required
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>
        <label>
          <span>Kategori Project:</span>
          {/* category select here */}
        </label>
        <label>
          <span>Tugas Project:</span>
          {/* assignee select here */}
        </label>

        <button className="btn">Tambah Project</button>
      </form>
    </div>
  );
}
