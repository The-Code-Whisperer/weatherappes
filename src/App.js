//imports
import React, { useState } from "react";

import api_key from "./api/openweather";
import Longforecast from "./Components/Longforecast";
import Mainforecast from "./Components/Mainforecast";
import openweather from "./api/openweather";

function App() {
  const getWeather = () => {
    console.log("hey whats up");
  };
  const searchbarChanged = (e) => {
    // look through cities.txt and show first 3 results that start with e.target.value
  };

  const [weatherData, setWeatherData] = useState(() => "test");
  return (
    <div>
      <div className="title">WeatherApp</div>
      <div className="searchbardiv">
        <input
          onChange={searchbarChanged}
          className="searchfield"
          type="text"
          placeholder="Location"
        />
        <button onClick={getWeather} className="searchbarbutton">
          Find Forecast
        </button>
      </div>
      <Mainforecast />
      <Longforecast />
    </div>
  );
}
export default App;
