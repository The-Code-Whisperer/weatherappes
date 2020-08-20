import React from 'react';

function App() {
  return (
    <div>
      <div className="title">
        WeatherApp
      </div>
      <div className="searchbardiv">
        <input className="searchfield" type="text" value="Location" />
        <button className="searchbarbutton">Find Forecast</button>
      </div>
    </div>
  );
}

export default App;
