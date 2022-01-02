import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('Indonesia');

  const resetForm = () => {
    setTitle('');
    setDate('');
    setLocation('Indonesia');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      location: location,
      id: Date.now().toString().slice(5),
    };
    console.log(event);

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
      <label>
        <span>Event Location: </span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="Bandung">Bandung</option>
          <option value="Bali">Bali</option>
          <option value="Jakarta">Jakarta</option>
        </select>
      </label>
      <button className="btn-submit">Submit</button>
    </form>
  );
}
