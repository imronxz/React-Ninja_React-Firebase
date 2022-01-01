import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const resetForm = () => {
    setTitle('');
    setDate('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      id: Date.now().toString().slice(5),
    };
    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
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
          type="datetime"
          onChange={(e) => setDate(e.target.value)}
          value={date} /*TODO: controlled inputs Dynamic value*/
          placeholder="Tanggal Lahir"
        />
      </label>
      <button className="btn-submit">Submit</button>

      {/* <p>
        title - {title}, date - {date}
      </p>

      <p
        style={{
          color: 'blue',
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
        onClick={resetForm}
      >
        Reset Form
      </p> */}
    </form>
  );
}
