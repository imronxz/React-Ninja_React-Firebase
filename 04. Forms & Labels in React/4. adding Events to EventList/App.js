import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import NewEventForm from './components/NewEventForm';

import EventList from './components/EventList';

function App(props) {
  // TODO: Functional as Props
  const [showModal, setShowModal] = useState(false);

  // TODO: state Hooks Conditional
  const [showEvent, setShowEvent] = useState(true);

  // TODO: state Hooks array
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    // TODO: return new array with event(handleSubmit()_from_NewEventForm.js)
    setEvents([...events, event]);
    setShowModal(false);
    /* 
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    }); 
    */
  };

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((e) => {
        return id !== e.id;
      });
    });
    console.log(id);
  };

  const subtitle = 'All the latest events in Marioland 🏹';

  return (
    <div className="App">
      <Title title="Events in Your Area 🐱‍🏍" subtitle={subtitle} />

      <div>{<button onClick={() => setShowModal(true)}>Add New Event</button>}</div>

      {showModal && (
        <Modal dinamicInlStyles={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}

      {/*TODO: if showEvent is true then hide button Show events(setShowEvent : false) */}
      {showEvent && (
        <div>
          <button onClick={() => setShowEvent(false)}>Hide events</button>
        </div>
      )}
      {/*TODO: if showEvent is false then hide button Hide events(setShowEvent : true) */}
      {!showEvent && (
        <div>
          <button onClick={() => setShowEvent(true)}>Show events</button>
        </div>
      )}

      {/* TODO: if (showEvent) === true then show events, else hide events
      --> Reusable component EventList
      */}
      {showEvent && <EventList events={events} handleClick={handleClick} />}
    </div>
  );
}

export default App;
