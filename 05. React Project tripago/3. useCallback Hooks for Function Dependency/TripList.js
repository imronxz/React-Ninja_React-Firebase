import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Styles
import './TripList.css';

export default function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState('http://localhost:3001/trips');

  // TODO: useCallback Hooks will return a memoized version of the callback that only changes if one of the inputs has changed.
  const fetchTrips = useCallback(async () => {
    const res = await axios.get(url);
    setTrips(res.data);
  }, [url]);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]); //FIXME: useEffect Dependency Array

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
