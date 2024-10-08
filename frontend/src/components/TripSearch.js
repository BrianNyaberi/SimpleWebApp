import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../styles/TripSearch.css'

function TripSearch() {
  const [keyword, setKeyword] = useState('');
  const [includeCanceled, setIncludeCanceled] = useState(false);
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/search', {
        keyword,
        includeCanceled,
        distance: distance ? parseFloat(distance) : null,
        time: time ? parseFloat(time) : null
      });
      navigate('/results', { state: { trips: response.data } });
    } catch (error) {
      console.error('Error searching trips:', error);
    }
  };

  return (
    <div className="trip-search">
      <h1>Trip Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Keyword search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={includeCanceled}
            onChange={(e) => setIncludeCanceled(e.target.checked)}
          />
          Include canceled trips
        </label>
        <input
          type="number"
          placeholder="Distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <input
          type="number"
          placeholder="Time (minutes)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default TripSearch;