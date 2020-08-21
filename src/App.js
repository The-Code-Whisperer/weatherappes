import React from "react";

function App() {
  return (
    <div>
      <div className="title">WeatherApp</div>
      <div className="searchbardiv">
        <input className="searchfield" type="text" value="Location" />
        <button className="searchbarbutton">Find Forecast</button>
      </div>

      <MainForecast />
      <LongtermForecast />
    </div>
  );
}

export default App;
