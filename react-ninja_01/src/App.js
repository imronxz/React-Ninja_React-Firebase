import './App.css';
import { useState, Fragment } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';

import EventList from './components/EventList';

function App(props) {
  // TODO: Functional as Props
  const [showModal, setShowModal] = useState(false);

  // TODO: state Hooks Conditional
  const [showEvent, setShowEvent] = useState(true);

  // TODO: state Hooks array
  const [events, setEvents] = useState([
    { title: "mario's birthday bash ", id: 1 },
    { title: "browser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ]);

  console.log(showModal);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((e) => {
        return id !== e.id;
      });
    });
    console.log(id);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = 'All the latest events in Marioland 🏹';

  return (
    <div className="App">
      <Title title="Events in Your Area 🐱‍🏍" subtitle={subtitle} />

      {<button onClick={() => setShowModal(true)}>Show Modal</button>}

      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>10% Off Coupon Code 🐱‍🏍</h2>
          <p>Use the code NINJA10 at the checkout. 🛒</p>

          <a href="#">Find out more..</a>
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
