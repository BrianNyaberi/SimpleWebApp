import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './../styles/TripDetails.css';

function TripDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Use dummy data if no trip is provided in the state
  const trip = location.state?.trip || {
    id: 1,
    pickup: {
      address: "123 Main St, Anytown, USA",
      time: "2023-05-10T09:00:00Z"
    },
    dropoff: {
      address: "456 Elm St, Othertown, USA",
      time: "2023-05-10T09:45:00Z"
    },
    cost: 25.50,
    distance: 15.2,
    duration: 2700, // in seconds
    status: "COMPLETE",
    driver: {
      name: "John Doe",
      picture: "https://via.placeholder.com/150"
    },
    car: {
      make: "Toyota",
      model: "Camry",
      picture: "https://via.placeholder.com/300x200"
    },
    rating: 4.8
  };

  return (
    <div className="trip-details">
      <h2>Trip Details</h2>
      <button className="back-button" onClick={() => navigate(-1)}>Back to Results</button>
      <div className="trip-info">
        <div className="trip-overview">
          <p><strong>Pickup:</strong> {trip.pickup.address}</p>
          <p><strong>Dropoff:</strong> {trip.dropoff.address}</p>
          <p><strong>Start Time:</strong> {new Date(trip.pickup.time).toLocaleString()}</p>
          <p><strong>End Time:</strong> {new Date(trip.dropoff.time).toLocaleString()}</p>
          <p><strong>Distance:</strong> {trip.distance} miles</p>
          <p><strong>Duration:</strong> {Math.floor(trip.duration / 60)} minutes</p>
          <p><strong>Cost:</strong> ${trip.cost.toFixed(2)}</p>
          <p><strong>Status:</strong> {trip.status}</p>
          <p><strong>Rating:</strong> {trip.rating} / 5</p>
        </div>
        <div className="driver-info">
          <h3>Driver Information</h3>
          <img src={trip.driver.picture} alt="Driver" className="driver-picture" />
          <p><strong>Name:</strong> {trip.driver.name}</p>
        </div>
        <div className="car-info">
          <h3>Vehicle Information</h3>
          <img src={trip.car.picture} alt="Car" className="car-picture" />
          <p><strong>Make:</strong> {trip.car.make}</p>
          <p><strong>Model:</strong> {trip.car.model}</p>
        </div>
      </div>
      {/* You can add a map component here to show the trip route */}
    </div>
  );
}

export default TripDetails;