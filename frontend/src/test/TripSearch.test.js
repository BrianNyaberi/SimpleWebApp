import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';  
import axios from 'axios';
import TripSearch from './../components/TripSearch';  

// Mock axios
jest.mock('axios');

// Mock the navigate function from useNavigate
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('TripSearch Component', () => {
  test('should render search form and handle search submission with API data', async () => {
    // Arrange: Set up the mock data using the dummy data you provided
    const mockTrips = [
      {
        "id": 608,
        "status": "COMPLETED",
        "request_date": "2019-08-16 10:49:25",
        "pickup_lat": -1.3234923,
        "pickup_lng": 36.8435638,
        "pickup_location": "St James, Nairobi",
        "dropoff_lat": -1.323413,
        "dropoff_lng": 36.8434199,
        "dropoff_location": "Nextgen Mall, Nairobi",
        "pickup_date": "2019-08-16 10:50:32",
        "dropoff_date": "2019-08-16 11:26:32",
        "type": "Lady",
        "driver_id": 13,
        "driver_name": "Alize",
        "driver_rating": 5,
        "driver_pic": "https://rapidtechinsights.github.io/hr-assignment/p13.jpg",
        "car_make": "Honda",
        "car_model": "Civic",
        "car_number": "KCR-100P",
        "car_year": 2012,
        "car_pic": "https://rapidtechinsights.github.io/hr-assignment/c13.jpg",
        "duration": 36,
        "duration_unit": "min",
        "distance": 1.54,
        "distance_unit": "km",
        "cost": 253,
        "cost_unit": "KES"
      },
      {
        "id": 542,
        "status": "CANCELED",
        "request_date": "2019-08-07 16:35:06",
        "pickup_lat": -1.32593,
        "pickup_lng": 36.8402983,
        "pickup_location": "Bandari, Nairobi",
        "dropoff_lat": -1.3221375,
        "dropoff_lng": 36.8288983,
        "dropoff_location": "New Apostolic Church, Nairobi",
        "pickup_date": "2019-08-07 16:35:39",
        "dropoff_date": null,
        "type": "HavaXL",
        "driver_id": 11,
        "driver_name": "George",
        "driver_rating": 0,
        "driver_pic": "https://rapidtechinsights.github.io/hr-assignment/p11.jpg",
        "car_make": "Toyota",
        "car_model": "Rav4",
        "car_number": "KBG-871X",
        "car_year": 2009,
        "car_pic": "https://rapidtechinsights.github.io/hr-assignment/c11.jpg",
        "duration": 0,
        "duration_unit": "min",
        "distance": 0,
        "distance_unit": "km",
        "cost": 0,
        "cost_unit": "KES"
      }
    ];

    // Mock the API response with the dummy data
    axios.get.mockResolvedValue({ data: mockTrips });

    // Act: Render the component
    render(
      <BrowserRouter>
        <TripSearch />
      </BrowserRouter>
    );

    // Assert: Check if the form and all elements are rendered
    expect(screen.getByPlaceholderText('Keyword search')).toBeInTheDocument();
    expect(screen.getByLabelText('Include canceled trips')).toBeInTheDocument();
    expect(screen.getByText('Distance')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();

    // Act: Simulate user input for keyword and form submission
    fireEvent.change(screen.getByPlaceholderText('Keyword search'), { target: { value: 'Nairobi' } });
    fireEvent.click(screen.getByLabelText('Include canceled trips'));
    fireEvent.click(screen.getByText('Search'));

    // Wait for the asynchronous call to complete
    await waitFor(() => {
      // Assert: Check if axios was called with the correct parameters
      expect(axios.get).toHaveBeenCalledWith('http://localhost:5000/api/trips', {
        params: {
          keyword: 'Nairobi',
          includeCanceled: true,
          distance: 'any',
          time: 'any',
        },
      });
    });

    // Assert: Ensure that navigate was called with the correct data (mockTrips)
    expect(mockedNavigate).toHaveBeenCalledWith('/results', { state: { trips: mockTrips } });
  });
});
