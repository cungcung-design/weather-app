import { useState } from "react";

import { getWeather, getWeatherByLocation, getForecast } from "../services/weatherApi";
import { getFavoriteCities, saveFavoriteCity } from "../utils/storage";

const useWeather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [favorites, setFavorites] = useState(getFavoriteCities());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    try {
      const response = await getWeather(city);
      setWeather(response.data);
      const future = await getForecast(city);
      setForecast(future.data);
    } catch {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  const getLocationWeather = () => {
    setLoading(true);
    setError("");
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const response = await getWeatherByLocation(lat, lon);
          setWeather(response.data);
          setCity(response.data.name);
          const future = await getForecast(response.data.name);
          setForecast(future.data);
        } catch {
          setError("Could not load weather for your location");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied");
        setLoading(false);
      }
    );
  };

  const addFavorite = () => {
    if (!city) return;
    const updated = saveFavoriteCity(city);
    setFavorites(updated);
  };

  const selectFavorite = (item) => {
    setCity(item);
  };

  return {
    city,
    setCity,
    weather,
    forecast,
    favorites,
    loading,
    error,
    searchWeather,
    getLocationWeather,
    addFavorite,
    selectFavorite,
  };
};

export default useWeather;
