/* eslint-disable no-use-before-define */


import React, { useState } from "react";

import api_key from "./api/openweather";
import Longforecast from "./Components/Longforecast";
import Mainforecast from "./Components/Mainforecast";
import openweather from "./api/openweather";

function App() {
  const cities = ["Tokyo", "New York", "Mexico City", "Mumbai", "Sao Paulo", "Delhi", "Shanghai", "Kolkata", "Los Angeles", "Dhaka", "Buenos Aires", "Karachi", "Cairo", "Rio de Janeiro", "Osaka", "Beijing", "Manila", "Moscow", "Istanbul", "Paris", "Seoul", "Lagos", "Jakarta", "Guangzhou", "Chicago", "London", "Lima", "Tehran", "Kinshasa", "Bogota", "Shenzhen", "Wuhan", "Hong Kong", "Tianjin", "Chennai", "Taipei", "Bengaluru", "Bangkok", "Lahore", "Chongqing", "Miami", "Hyderabad", "Dallas", "Santiago", "Philadelphia", "Belo Horizonte", "Madrid", "Houston", "Ahmadabad", "Ho Chi Minh City", "Washington", "Atlanta", "Toronto", "Singapore", "Luanda", "Baghdad", "Barcelona", "Haora", "Shenyang", "Khartoum"]
  const getWeather = () => {
    console.log('hey whats up')
  }
  // returns 5 search suggestions
  const searchbarChanged = e => {
    let results = []
    let count = 0;
    for (let i = 0; i < cities.length; i++) {
      if (count < 5 && cities[i].toLowerCase().startsWith(e.target.value.toLowerCase())) {
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
