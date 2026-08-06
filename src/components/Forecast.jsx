import { motion } from "framer-motion";

import { getWeatherIconUrl } from "../utils/weatherIcon";

function Forecast({ forecast }) {
  if (!forecast || !forecast.list) {
    return null;
  }

  return (
    <div className="forecast">
      <h3 className="forecast-title">📅 5-Day Forecast</h3>
      <div className="forecast-grid">
        {forecast.list
          .filter((item, index) => index % 8 === 0)
          .map((day, i) => {
            const iconUrl = getWeatherIconUrl(day.weather[0].icon);
            return (
              <motion.div
                key={day.dt}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="forecast-card"
              >
                <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
                <img
                  src={iconUrl}
                  alt={day.weather[0].description}
                />
                <h2>{Math.round(day.main.temp)}°C</h2>
                <p className="capitalize">{day.weather[0].description}</p>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}

export default Forecast;
