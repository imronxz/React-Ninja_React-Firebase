import './App.css';
import { useState, Fragment } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';

function App() {
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
      <Title title="another title" subtitle="another subtitle" />

      {<button onClick={() => setShowModal(true)}>Show Modal</button>}

      {showModal && (
        <Modal handleClose={handleClose}>
          <h1>Terms and Conditions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et aliquid at consequatur optio asperiores
            similique quo dignissimos, veniam reprehenderit numquam non enim dolor quas ullam! Sunt eligendi quisquam
            perferendis provident.
          </p>
          <a href="$">Find out more..</a>
        </Modal>
      )}

      {/*TODO: if showEvent is true then hide button Show events */}
      {showEvent && (
        <div>
          <button onClick={() => setShowEvent(false)}>Hide events</button>
        </div>
      )}
      {/*TODO: if showEvent is false then hide button Hide events */}
      {!showEvent && (
        <div>
          <button onClick={() => setShowEvent(true)}>Show events</button>
        </div>
      )}
      {/* TODO: if (showEvent) === true then show events, else hide events */}
      {showEvent &&
        events.map((event, index) => (
          <Fragment key={event.id}>
            <h1>
              {index} - {event.title}
            </h1>
            <button
              onClick={() => {
                handleClick(event.id);
              }}
            >
              delete event
            </button>
          </Fragment>
        ))}
      {/* Children Props from jsx App.js
      <Modal>
        <h2>10% Off Coupon Code 🐱‍🏍</h2>
        <p>Use the code NINJA10 at the checkout. 🛒</p>
      </Modal> */}
      {/* {showModal && (
        <Modal handleClose={handleClose}>
          <h1>Terms and Conditions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et aliquid at consequatur optio asperiores
            similique quo dignissimos, veniam reprehenderit numquam non enim dolor quas ullam! Sunt eligendi quisquam
            perferendis provident.
          </p>
          <a href="$">Find out more..</a>
        </Modal>
      )} */}
    </div>
  );
}

export default App;
