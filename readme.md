# Simple Web App

This is a simple web application that allows users to search for trips, view search results, and see trip details. The application consists of a Node.js/Express backend and a React frontend.

## Prerequisites

- Docker
- Docker Compose

## Running the Application

1. Clone the repository:
   ```
   git clone <repository-url>
   cd SimpleWebApp
   ```

2. Build and run the Docker containers:
   ```
   docker-compose up --build
   ```

3. Access the application:
   - Frontend: Open your browser and navigate to `http://localhost`
   - Backend API: The API is available at `http://localhost:3001`

## Stopping the Application

To stop the application, use the following command in the terminal:

```
docker-compose down
```

## Development

If you want to run the application in development mode:

1. For the backend:
   ```
   cd backend
   npm install
   npm run dev
   ```

2. For the frontend:
   ```
   cd frontend
   npm install
   npm start
   ```

This will start the backend server on port 3001 and the frontend development server on port 3000.

## Testing

To run the tests:

1. For the backend:
   ```
   cd backend
   npm test
   ```

2. For the frontend:
   ```
   cd frontend
   npm test
   ```

## Project Structure

```
SimpleWebApp/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   └── server.js
│   ├── tests/
│   │   └── app.test.js
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TripSearch.js
│   │   │   ├── TripResults.js
│   │   │   └── TripDetails.js
│   │   └── App.js
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Additional Notes

- The backend uses Express.js and serves trip data and search functionality.
- The frontend is built with React and includes three main components: TripSearch, TripResults, and TripDetails.
- Docker is used to containerize both the backend and frontend, making it easy to run the entire application with a single command.

For any issues or questions, please contact the development team.