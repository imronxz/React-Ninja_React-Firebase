import { useState, useRef } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {
  // const [title, setTitle] = useState('');
  // const [date, setDate] = useState('');
  const titleRef = useRef();
  const dateRef = useRef();

  const resetForm = () => {
    titleRef.current.value = '';
    dateRef.current.value = '';
    // setTitle('');
    // setDate('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(titleRef, dateRef);

    const event = {
      title: titleRef.current.value,
      date: dateRef.current.value,
      id: Date.now().toString().slice(5),
    };
    addEvent(event);
    resetForm();

    /* const event = {
      title: title,
      date: date,
      id: Date.now().toString().slice(5),
    };
    addEvent(event);
    resetForm(); */
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          // onChange={(e) => setTitle(e.target.value)}
          // value={title} /*TODO: controlled inputs Dynamic value*/
          ref={titleRef}
          placeholder="Full Name"
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="datetime"
          // onChange={(e) => setDate(e.target.value)}
          // value={date} /*TODO: controlled inputs Dynamic value*/
          ref={dateRef}
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
