import axios from 'axios';

const API_KEY = '314408ed7b048d8d3cfc2c46583e7928';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// http://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=314408ed7b048d8d3cfc2c46583e7928
export const FETCH_WEATHER = 'FETCH_WEATHER';

// TODO: change to to accomodate all countries
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // returns a promise
  console.log('(In Action Creator) Request: ', request);
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
