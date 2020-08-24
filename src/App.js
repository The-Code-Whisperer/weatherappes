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
  const searchbarChanged = (e) => {
    // look through cities.txt and show first 3 results that start with e.target.value
  })


        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.city}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="City" variant="outlined" />}
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
