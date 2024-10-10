import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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
      <div className="header">
        <ArrowLeft className="back-arrow" onClick={() => navigate(-1)} />
        <h2>Trips ({trips.length})</h2>
      </div>
      <div className="trip-list">
        {trips.length > 0 ? (
          trips.map((trip) => (
            <div key={trip.id} className="trip-card" onClick={() => handleTripClick(trip)}>
              <div className="trip-info">
                <div className="trip-main-info">
                  <p className="trip-time">{new Date(trip.pickup_date).toLocaleString()}</p>
                  <div className="trip-locations">
                    <p className="trip-pickup">
                      <span className="dot green"></span>
                      {trip.pickup_location}
                    </p>
                    <p className="trip-dropoff">
                      <span className="dot red"></span>
                      {trip.dropoff_location}
                    </p>
                  </div>
                  <p className="trip-distance">{trip.distance} {trip.distance_unit}</p>
                </div>
                <div className="trip-secondary-info">
                  <p className="trip-cost">{trip.cost} {trip.cost_unit}</p>
                  <p className="driver-rating">{renderStars(trip.driver_rating)}</p>
                  <p className={`trip-status ${trip.status.toLowerCase()}`}>
                    {trip.status}
                    {trip.status === 'COMPLETED' && <span className="status-icon">✓</span>}
                    {trip.status === 'CANCELED' && <span className="status-icon">✗</span>}
                  </p>
                </div>
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