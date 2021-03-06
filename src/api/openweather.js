import axios from "axios";

const api_key = "8e7b5a4d1f58b0476c0658c7c172e7af";

const root_url =
    "http://api.openweathermap.org/data/2.5/"
// example full: https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={ YOUR API KEY }
// /geocoding/v5/mapbox.places/{search_text}.json

export default axios.create({
    baseURL: root_url+api_key,
    timeout: 2000,
    headers: { 'X-Custom-Header': 'foobar' }
});