import { useState, useEffect } from 'react';
import axios from 'axios';

// Styles
import './TripList.css';

export default function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState('http://localhost:3001/trips');

  useEffect(() => {
    axios.get(url).then((res) => {
      setTrips(res.data);
    });
  }, [url]); //FIXME: useEffect Dependency Array

  // console.log(trips);

  return (
    <div className="trip-list">
      <h2>Tripago App</h2>
      <div className="filters">
        <button onClick={() => setUrl('http://localhost:3001/trips?location=lokal')}>Local Trips</button>
        <button onClick={() => setUrl('http://localhost:3001/trips?location=international')}>
          International Trips
        </button>
      </div>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
