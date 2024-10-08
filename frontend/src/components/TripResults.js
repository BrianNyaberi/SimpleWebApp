import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/TripResults.css';

function TripResults() {
  const navigate = useNavigate();
  
  // Dummy data (replace with actual data from backend later)
  const trips = [
    {
      id: 1,
      pickup: {
        address: "123 Main St, Anytown, USA",
        time: "2023-05-10T09:00:00Z"
      },
      dropoff: {
        address: "456 Elm St, Othertown, USA"
      },
      cost: 25.50,
      distance: 15.2,
      status: "COMPLETE"
    },
    {
      id: 2,
      pickup: {
        address: "789 Oak Ave, Somewhere, USA",
        time: "2023-05-11T14:30:00Z"
      },
      dropoff: {
        address: "101 Pine Rd, Elsewhere, USA"
      },
      cost: 18.75,
      distance: 8.7,
      status: "COMPLETE"
    }
  ];

  const handleTripClick = (trip) => {
    navigate(`/trip/${trip.id}`, { state: { trip } });
  };

  return (
    <div className="trip-results">
      <h2>Search Results ({trips.length})</h2>
      <button className="back-button" onClick={() => navigate(-1)}>Back to Search</button>
      <div className="trip-list">
        {trips.map((trip) => (
          <div key={trip.id} className="trip-card" onClick={() => handleTripClick(trip)}>
            <div className="trip-info">
              <p className="trip-time">Start Time: {new Date(trip.pickup.time).toLocaleString()}</p>
              <p className="trip-cost">Cost: ${trip.cost.toFixed(2)}</p>
              <p className="trip-pickup">Pickup: {trip.pickup.address}</p>
              <p className="trip-dropoff">Dropoff: {trip.dropoff.address}</p>
              <p className="trip-distance">Distance: {trip.distance} miles</p>
              <p className="trip-status">Status: {trip.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripResults;