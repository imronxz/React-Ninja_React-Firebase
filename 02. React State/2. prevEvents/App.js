import './App.css';
import { useState } from 'react';

function App() {
  // TODO: state Hooks array
  const [events, setEvents] = useState([
    { title: "mario's birthday bash ", id: 1 },
    { title: "browser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ]);

  /* const handleClicka = (id) => {
    setEvents(
      events.filter((e) => {
        return id !== e.id;
      }),
    );
    console.log(id);
  }; */

  // TODO: prevEvents
  const handlePrev = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((e) => {
        return id !== e.id;
      });
    });
    console.log(id);
  };

  return (
    <div className="App">
      {events.map((event, index) => (
        <div key={event.id}>
          <h1>
            {index} - {event.title}
            <button
              onClick={() => {
                handlePrev(event.id);
              }}
            >
              delete event
            </button>
          </h1>
        </div>
      ))}
    </div>
  );
}

export default App;
