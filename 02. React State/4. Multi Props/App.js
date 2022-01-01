import './App.css';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  // TODO state Hooks Conditional
  const [showEvent, setShowEvent] = useState(true);

  // TODO: state Hooks array
  const [events, setEvents] = useState([
    { title: "mario's birthday bash ", id: 1 },
    { title: "browser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ]);

  console.log(showEvent);

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
      <Title title="another title" subtitle="another subtitle" />
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
          <div key={event.id}>
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
          </div>
        ))}
    </div>
  );
}

export default App;
