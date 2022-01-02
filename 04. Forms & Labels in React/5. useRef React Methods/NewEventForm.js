import { useRef } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {
  // TODO: useRef Hooks
  const titleRef = useRef();
  const dateRef = useRef();

  const resetForm = () => {
    titleRef.current.value = '';
    dateRef.current.value = '';
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
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input type="text" ref={titleRef} placeholder="Full Name" />
      </label>
      <label>
        <span>Event Date:</span>
        <input type="datetime" ref={dateRef} placeholder="Tanggal Lahir" />
      </label>
      <button className="btn-submit">Submit</button>
    </form>
  );
}
