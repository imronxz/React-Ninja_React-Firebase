import './App.css';
import { useState } from 'react';

function App() {
  // TODO: Create a `useState` hook
  const [nama, setNama] = useState('imronxz@core.ofthe');
  // state Hooks array
  const [events, setEvents] = useState([
    { title: "mario's birthday bash ", id: 1 },
    { title: "browser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ]);

  const handleClick = () => {
    setNama('_none');
    console.log(nama);
  };

  return (
    <div className="App">
      <h1>My name is {nama}</h1>
      <button onClick={handleClick}>Ganti Nama</button>
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;
