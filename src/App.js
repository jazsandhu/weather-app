import React, { useState } from 'react';
import axios from 'axios';
import CurrentWeather from './CurrentWeather.js';
import FiveDayForcast from './FiveDayForcast.js';
import './App.css';
require('dotenv').config();

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState([]);
  const [forcast, setForcast] = useState([]);

  const search = event => { /* fetch API data upon search entry */
    if (event.key === "Enter") {
      /* fetch current weather: */
      axios.get(process.env.REACT_APP_OPENWEATHER_URL + "weather?q=" + query + "&appid=" + process.env.REACT_APP_OPENWEATHER_KEY)
        .then(result => {
          setWeather(result.data);

          /* 5 day weather forcast: */
          fetch(process.env.REACT_APP_API_URL + "forecast/daily?city=" + query + "&key=" + process.env.REACT_APP_API_KEY)
            .then(resolve => resolve.json())
            .then(result => {
              setForcast(result.data);
            })
        })
        .catch(err => alert("API Error: " + err));
      setQuery('');
    }
  }

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <CurrentWeather weather={weather} /> {/* render current weather */}
        <FiveDayForcast forcast={forcast} currentWeather={weather} /> {/* render 5 day forcast */}
      </main>
    </div>
  );
}

export default App;