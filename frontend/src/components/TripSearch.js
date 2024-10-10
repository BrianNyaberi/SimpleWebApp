import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../styles/TripSearch.css';

function TripSearch() {
  const [keyword, setKeyword] = useState('');
  const [includeCanceled, setIncludeCanceled] = useState(false);
  const [distance, setDistance] = useState('any');
  const [time, setTime] = useState('any');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/api/trips', {
        params: {
          keyword,
          includeCanceled,
          distance,
          time
        }
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

        <div className="radio-group side-by-side">
          <div>
            <h3>Distance</h3>
            <label>
              <input
                type="radio"
                value="any"
                checked={distance === 'any'}
                onChange={(e) => setDistance(e.target.value)}
              />
              Any
            </label>
            <label>
              <input
                type="radio"
                value="under3"
                checked={distance === 'under3'}
                onChange={(e) => setDistance(e.target.value)}
              />
              Under 3 km
            </label>
            <label>
              <input
                type="radio"
                value="3to8"
                checked={distance === '3to8'}
                onChange={(e) => setDistance(e.target.value)}
              />
              3 - 8 km
            </label>
            <label>
              <input
                type="radio"
                value="8to15"
                checked={distance === '8to15'}
                onChange={(e) => setDistance(e.target.value)}
              />
              8 - 15 km
            </label>
            <label>
              <input
                type="radio"
                value="over15"
                checked={distance === 'over15'}
                onChange={(e) => setDistance(e.target.value)}
              />
              Over 15 km
            </label>
          </div>

          <div>
            <h3>Time</h3>
            <label>
              <input
                type="radio"
                value="any"
                checked={time === 'any'}
                onChange={(e) => setTime(e.target.value)}
              />
              Any
            </label>
            <label>
              <input
                type="radio"
                value="under5"
                checked={time === 'under5'}
                onChange={(e) => setTime(e.target.value)}
              />
              Under 5 mins
            </label>
            <label>
              <input
                type="radio"
                value="5to10"
                checked={time === '5to10'}
                onChange={(e) => setTime(e.target.value)}
              />
              5 - 10 mins
            </label>
            <label>
              <input
                type="radio"
                value="10to20"
                checked={time === '10to20'}
                onChange={(e) => setTime(e.target.value)}
              />
              10 - 20 mins
            </label>
            <label>
              <input
                type="radio"
                value="over20"
                checked={time === 'over20'}
                onChange={(e) => setTime(e.target.value)}
              />
              Over 20 mins
            </label>
          </div>
        </div>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default TripSearch;
