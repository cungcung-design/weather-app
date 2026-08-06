import { motion } from "framer-motion";

import { getWeatherIconUrl } from "../utils/weatherIcon";

function WeatherCard({ weatherData }) {
  if (!weatherData) {
    return null;
  }
  const iconUrl = getWeatherIconUrl(weatherData.weather[0].icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="weather-card"
    >
      <h2>{weatherData.name}</h2>

      <img
        src={iconUrl}
        alt={weatherData.weather[0].description}
        className="weather-icon"
      />

      <h1>{Math.round(weatherData.main.temp)}°C</h1>

      <p className="capitalize">{weatherData.weather[0].description}</p>

      <hr />

      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </motion.div>
  );
}

export default WeatherCard;
