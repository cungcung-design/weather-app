import axios from "axios";

import { WEATHER_API, API_KEY, UNITS } from "../constants/api";

const weatherApi = axios.create({
  baseURL: WEATHER_API,
});

const buildParams = (extra = {}) => ({
  appid: API_KEY,
  units: UNITS,
  ...extra,
});

export const getWeather = (city) => {
  return weatherApi.get("/weather", {
    params: buildParams({ q: city }),
  });
};

export const getWeatherByLocation = (lat, lon) => {
  return weatherApi.get("/weather", {
    params: buildParams({ lat, lon }),
  });
};

export const getForecast = (city) => {
  return weatherApi.get("/forecast", {
    params: buildParams({ q: city }),
  });
};
