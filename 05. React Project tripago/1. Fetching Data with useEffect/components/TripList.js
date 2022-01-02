import { useState, useEffect } from 'react';
import axios from 'axios';

// Styles
import './TripList.css';

export default function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/trips').then((res) => {
      setTrips(res.data);
    });
  }, []);

  console.log(trips);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
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
