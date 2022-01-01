import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const resetForm = () => {
    setTitle('');
    setDate('');
  };

  return (
    <form className="new-event-form">
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title} /*TODO: controlled inputs Dynamic value*/
          placeholder="Full Name"
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date} /*TODO: controlled inputs Dynamic value*/
          placeholder="Tanggal Lahir"
        />
      </label>
      <button>Submit</button>

      <p>
        title - {title}, date - {date}
      </p>
      <p onClick={resetForm}>Reset Form</p>
    </form>
  );
}
