# Weather App

A modern weather application built with React, Vite, and the OpenWeather API. It allows users to search for cities, get live weather data, view a 5-day forecast, and save favorite cities.

## Features

- Search weather by city name
- Get weather from current location
- View temperature, humidity, wind speed, and weather description
- See a 5-day forecast with animated cards
- Toggle dark mode
- Save favorite cities for quick access

## Tech Stack

- React
- Vite
- Framer Motion
- Axios
- OpenWeather API

## Project Structure

```text
weather-app/
├── public/
│   ├── weather-icons/        # Weather icon assets
│   └── favicon.svg          # App favicon
├── src/
│   ├── assets/
│   │   └── images/           # Static image files
│   ├── components/
│   │   ├── Search.jsx        # Search input component
│   │   ├── LocationButton.jsx
│   │   ├── WeatherCard.jsx  # Current weather UI
│   │   ├── Forecast.jsx     # 5-day forecast UI
│   │   ├── FavoriteCities.jsx
│   │   ├── Loading.jsx
│   │   └── ErrorMessage.jsx
│   ├── pages/
│   │   └── Home.jsx          # Main page
│   ├── services/
│   │   └── weatherApi.js     # API calls to OpenWeather
│   ├── hooks/
│   │   └── useWeather.js     # Custom hook for weather logic
│   ├── context/
│   │   └── ThemeContext.jsx  # Theme / dark mode state
│   ├── utils/
│   │   ├── weatherIcon.js    # Weather icon helpers
│   │   └── storage.js        # Local storage helpers
│   ├── constants/
│   │   └── api.js            # API constants
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── .env                      # Environment variables
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Build

To create a production build:

```bash
npm run build
```

## Architecture Overview

```text
User
  ↓
React Components
  ↓
Weather Service Layer
  ↓
OpenWeather API
  ↓
React State Update
  ↓
UI Rendering
```

## Folder Explanation

### 1. Components
Reusable UI parts of the app.

Example:
- WeatherCard.jsx

These components receive weather data and display:
- temperature
- humidity
- wind speed
- weather description

### 2. Pages
Full-screen views or main sections of the app.

Example:
- Home.jsx

A page usually brings together multiple components such as:

```jsx
<Home>
  <Search />
  <LocationButton />
  <WeatherCard />
  <Forecast />
</Home>
```

### 3. Services
Handles all API communication.

Example:
- weatherApi.js

This layer is responsible for calling the OpenWeather API and returning data to the app.

Common functions include:
- getWeather(city)
- getForecast(city)
- getWeatherByLocation(lat, lon)

### 4. Hooks
Contains custom React logic to keep components simple.

Example:
- useWeather.js

Instead of putting state, effects, API calls, loading, and error handling directly inside App.jsx, that logic can be moved into a custom hook.

Example:

```jsx
const { weather, forecast, loading, error, searchWeather } = useWeather();
```

This makes the app cleaner and easier to maintain.

### 5. Context
Used for global state shared across the app.

Example:
- ThemeContext.jsx

It is useful for features like:
- dark mode

Without context, props would need to be passed through many components. With context, shared data can be accessed more easily.

### 6. Utils
Small helper functions.

Example:
- storage.js

These are used for tasks like:
- saveFavoriteCity()
- getFavoriteCities()
- removeFavoriteCity()

### 7. Constants
Stores fixed values used throughout the app.

Example:
- api.js

Example:

```js
export const WEATHER_API = "https://api.openweathermap.org/data/2.5";
```

## Notes

This project is designed to be a clean portfolio-ready React app with a simple and maintainable architecture.
