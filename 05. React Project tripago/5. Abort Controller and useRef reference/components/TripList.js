import { useState } from 'react';
import { useAxios } from '../hooks/useAxios';

// Styles
import './TripList.css';

export default function TripList() {
  const [url, setUrl] = useState('http://localhost:3001/trips');
  // TODO: Costum Fetch Hook API
  const { data: trips, isLoading, error } = useAxios(url, { type: 'GET' });

  return (
    <div className="trip-list">
      <h2>Tripago App</h2>

      {isLoading && <h2>Loading Data 🔃</h2>}
      {error && <h2>Error Loading Data 🚫</h2>}
      <div className="filters">
        <button onClick={() => setUrl('http://localhost:3001/trips?location=lokal')}>Local Trips</button>
        <button onClick={() => setUrl('http://localhost:3001/trips?location=international')}>
          International Trips
        </button>
      </div>
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
