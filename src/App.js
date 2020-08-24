/* eslint-disable no-use-before-define */

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState } from "react";

import api_key from "./api/openweather";
import Longforecast from "./Components/Longforecast";
import Mainforecast from "./Components/Mainforecast";
import openweather from "./api/openweather";




function App() {
  const getWeather = () => {
    console.log('hey whats up')
  }
  // returns 10 search suggestions
  const searchbarChanged = e => {
    let results = []
    let count = 0;
    for (let i = 0; i < cities.length; i++) {
      if (count < 10 && cities[i].toLowerCase().startsWith(e.target.value.toLowerCase())) {
        results.push(cities[i]);
        count++;
      }
    }
    console.log(results)
  }
  const [weatherData, setWeatherData] = useState(() => "test");
  return (
    <div>
      <div className="title">WeatherApp</div>
      <div className="searchbardiv">
        <input
          onChange={searchbarChanged}
          className="searchfield"
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
