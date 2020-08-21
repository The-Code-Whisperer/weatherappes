//imports
import React, {useState} from "react";
import openweather from './api/openweather';
import LongForecast from "./Components/Longforecast";
import Mainforecast from "./Components/Mainforecast";




function App() {

  const getWeather = () => {
    console.log('hey whats up')
  }
  var [weatherData, setWeatherData] = useState("test")
  return (
    <div>
      <div className="title">WeatherApp</div>
      <div className="searchbardiv">
        <input className="searchfield" type="text" value="Location" />
        <button onSubmit={getWeather} className="searchbarbutton">Find Forecast</button>
      </div>
      <Mainforecast />
      <LongForecast />
    </div>
  );
}

export default App;
