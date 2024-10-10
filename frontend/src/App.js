import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TripSearch from './components/TripSearch';
import TripResults from './components/TripResults';
import TripDetails from './components/TripDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TripSearch />} />
          <Route path="/results" element={<TripResults />} />
          <Route path="/trip/:id" element={<TripDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;