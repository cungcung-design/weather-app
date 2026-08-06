const WEATHER_ICON_BASE = "https://openweathermap.org/img/wn";

export const getWeatherIconUrl = (icon) => {
  return `${WEATHER_ICON_BASE}/${icon}@2x.png`;
};

export const getWeatherIconUrlByDescription = (description) => {
  const key = description?.toLowerCase();

  const iconMap = {
    "clear sky": "01d",
    "few clouds": "02d",
    "scattered clouds": "03d",
    "broken clouds": "04d",
    "shower rain": "09d",
    "rain": "10d",
    "mist": "50d",
    "light rain": "10d",
    "moderate rain": "10d",
    "heavy rain": "10d",
    "thunderstorm": "11d",
    "snow": "13d",
    "smoke": "50d",
    "haze": "50d",
    "sand": "50d",
    "dust": "50d",
    "squall": "50d",
    "tornado": "50d",
  };

  const icon = iconMap[key] || "01d";
  return getWeatherIconUrl(icon);
};
