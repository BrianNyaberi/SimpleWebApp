const request = require('supertest');
const express = require('express');
const routes = require('./../routes/tripRoutes'); 

// Initialize the express app and use your routes
const app = express();
app.use(express.json());  // To handle JSON request bodies
app.use('/', routes);  // Attach the routes to the app

describe('GET /trips', () => {
  test('should return filtered trips based on query parameters', async () => {
    const query = {
      keyword: '',  // No keyword filtering
      includeCanceled: false,  // Do not include canceled trips
      distance: 'any',  // No filtering by distance
      time: 'any'  // No filtering by time
    };

    const response = await request(app).get('/').query(query);

    expect(response.status).toBe(200);  // Check if the status code is 200
    expect(Array.isArray(response.body)).toBe(true);  // Check if response is an array
    expect(response.body.every(trip => trip.status !== 'CANCELED')).toBe(true);  // Ensure no canceled trips
  });
});
