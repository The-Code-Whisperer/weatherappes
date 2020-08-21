import React from "react";
var api_key = '8e7b5a4d1f58b0476c0658c7c172e7af'

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
