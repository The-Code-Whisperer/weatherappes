import React from "react";
import api_key from './api/openweather';

function App() {
  return (
    <div>
      <div className="title">WeatherApp</div>
      <div className="searchbardiv">
        <input className="searchfield" type="text" value="Location" />
        <button className="searchbarbutton">Find Forecast</button>
      </div>
      http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={api_key}
      <MainForecast />
      <LongForecast />
    </div>
  );
}

export default App;
