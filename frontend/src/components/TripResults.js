import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './../styles/TripResults.css';

function TripResults() {
  const location = useLocation();
  const navigate = useNavigate();

  const trips = location.state?.trips || [];
  
  const handleTripClick = (trip) => {
    navigate(`/trip/${trip.id}`, { state: { trip } });
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="trip-results">
      <h2>Search Results ({trips.length})</h2>
      <button className="back-button" onClick={() => navigate(-1)}>Back to Search</button>
      <div className="trip-list">
        {trips.length > 0 ? (
          trips.map((trip) => (
            <div key={trip.id} className="trip-card" onClick={() => handleTripClick(trip)}>
              <div className="trip-info">
                <p className="trip-time">Start Time: {new Date(trip.pickup_date).toLocaleString()}</p>
                <p className="trip-cost">Cost: {trip.cost} {trip.cost_unit}</p>
                <p className="trip-pickup">Pickup: <span className="green">{trip.pickup_location}</span></p>
                <p className="trip-dropoff">Dropoff: <span className="red">{trip.dropoff_location}</span></p>
                <p className="trip-distance">Distance: {trip.distance} {trip.distance_unit}</p>
                <p className={`trip-status ${trip.status.toLowerCase()}`}>
                  Status: {trip.status}
                  {trip.status === 'COMPLETED' && <span className="status-icon">✓</span>}
                  {trip.status === 'CANCELED' && <span className="status-icon">✗</span>}
                </p>
                <p className="driver-rating">{renderStars(trip.driver_rating)}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No trips found. Consider adjusting your search filter</p>
        )}
      </div>
    </div>
  );
}

export default TripResults;