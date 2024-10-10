import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './../styles/TripDetails.css';

function TripDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const trip = location.state?.trip;

  if (!trip) {
    return <p>No trip details found.</p>;
  }

  const mapCenter = [
    (trip.pickup_lat + trip.dropoff_lat) / 2,
    (trip.pickup_lng + trip.dropoff_lng) / 2
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="trip-details">
      <h2>Trip Details</h2>
      <button className="back-button" onClick={() => navigate(-1)}>Back to Results</button>
      <div className="trip-info">
        <div className="trip-overview">
          <p><strong>Pickup:</strong> <span className="green">{trip.pickup_location}</span></p>
          <p><strong>Dropoff:</strong> <span className="red">{trip.dropoff_location}</span></p>
          <p><strong>Start Time:</strong> {new Date(trip.pickup_date).toLocaleString()}</p>
          <p><strong>End Time:</strong> {new Date(trip.dropoff_date).toLocaleString()}</p>
          <p><strong>Distance:</strong> {trip.distance} {trip.distance_unit}</p>
          <p><strong>Duration:</strong> {trip.duration} {trip.duration_unit}</p>
          <p><strong>Cost:</strong> {trip.cost} {trip.cost_unit}</p>
          <p><strong>Status:</strong> {trip.status}</p>
          <p><strong>Driver Rating:</strong> {renderStars(trip.driver_rating)}</p>
        </div>

        <div className="car-info">
          <h3>Vehicle Information</h3>
          <img src={trip.car_pic} alt="Car" className="car-picture" />
          <p><strong>Make:</strong> {trip.car_make}</p>
          <p><strong>Model:</strong> {trip.car_model}</p>
          <p><strong>Year:</strong> {trip.car_year}</p>
          <p><strong>License Plate:</strong> {trip.car_number}</p>
        </div>

        <div className="driver-info">
          <h3>Driver Information</h3>
          <img src={trip.driver_pic} alt="Driver" className="driver-picture" />
          <p><strong>Name:</strong> {trip.driver_name}</p>
        </div>

        <div className="map-container">
          <MapContainer center={mapCenter} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[trip.pickup_lat, trip.pickup_lng]}>
              <Popup>Pickup: {trip.pickup_location}</Popup>
            </Marker>
            <Marker position={[trip.dropoff_lat, trip.dropoff_lng]}>
              <Popup>Dropoff: {trip.dropoff_location}</Popup>
            </Marker>
            <Polyline positions={[[trip.pickup_lat, trip.pickup_lng], [trip.dropoff_lat, trip.dropoff_lng]]} />
          </MapContainer>
        </div>


      </div>
    </div>
  );
}

export default TripDetails;