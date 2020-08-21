//imports
import React, {useState} from "react";
import openweather from './api/openweather';
import LongForecast from "./Components/Longforecast";
import Mainforecast from "./Components/Mainforecast";




function App() {

  const getWeather = () => {
    console.log('hey whats up')
  }
  const searchbarChanged = (e) => {
    console.log(e.target.value)
  }
  const [weatherData, setWeatherData] = useState(() => "test")
  return (
    <div>
      <div className="title">WeatherApp</div>
      <div className="searchbardiv">
        <input onChange={searchbarChanged} className="searchfield" type="text" placeholder="Location" />
        <button onClick={getWeather} className="searchbarbutton">Find Forecast</button>
      </div>
      <Mainforecast />
      <LongForecast />
    </div>
  );
}

export default App;
