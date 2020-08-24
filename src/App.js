//imports
import React, { useState } from "react";

import api_key from "./api/openweather";
import Longforecast from "./Components/Longforecast";
import Mainforecast from "./Components/Mainforecast";
import openweather from "./api/openweather";

function App() {
  const getWeather = () => {
    console.log('hey whats up')
  }
  // look through cities.txt and show first 3 results that start with e.target.value
  const searchbarChanged = e => {
    // open cities.txt as cityfile
    // listoflines = cityfile.readlines()
    // for (let i = 0; i<listoflines.length; i++){
    // results = []
    // count = 0
    // if (listoflines[i].startswith(e.target.value) && count!=3)
    // put in results
    // count++
    // }
    // console.log(results)
  }
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
