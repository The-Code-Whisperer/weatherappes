//imports
import React from "react";
import api_key from './api/openweather';
import LongForecast from "./Components/Longforecast";
import Mainforecast from "./Components/Mainforecast";

var api_link =
  "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=";

function App() {
  return (
    <div>
      <div className="title">WeatherApp</div>
      <div className="searchbardiv">
        <input className="searchfield" type="text" value="Location" />
        <button className="searchbarbutton">Find Forecast</button>
      </div>
      <Mainforecast />
      <LongForecast />
    </div>
  );
}

export default App;
