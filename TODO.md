# Weather App Enhancement TODOs

## Step 8: Current Location Weather 📍
- [x] Create `src/services/weatherApi.js` with axios (getWeather, getWeatherByLocation)
- [x] Create `src/components/LocationButton.jsx`
- [x] Update `App.jsx` with `getLocation()` using GPS

## Step 9: Loading State ⏳
- [x] Ensure loading state applies to both search and location flows

## Step 10: Weather Icons ☀️
- [x] Update `WeatherCard.jsx` to show OpenWeather icons

## Step 11: 5-Day Forecast 🌤️
- [x] Add `getForecast(city)` to weatherApi.js
- [x] Create `src/components/Forecast.jsx`
- [x] Update `App.jsx` with forecast state + rendering

## Step 12: Dark Mode 🌙
- [x] Add dark state + toggle button in App.jsx
- [x] Add dark/light CSS classes

## Step 13: Save Favorite Cities ⭐
- [x] Add favorites state + localStorage persistence
- [x] Add save button + favorites display

## Dependencies
- [x] Install axios

## Follow-up
- [x] Run `npm run build` to verify (succeeded)

## Step 14: Professional Architecture Refactor 🏗️
Refactor the app from a flat `App.jsx` into a layered architecture:
- [x] Create `src/constants/api.js` with API URL/key (reads from `import.meta.env.VITE_API_KEY`)
- [x] Create `src/utils/storage.js` (getFavoriteCities, saveFavoriteCity, removeFavoriteCity)
- [x] Create `src/utils/weatherIcon.js` (getWeatherIconUrl, getWeatherIconUrlByDescription)
- [x] Create `src/context/ThemeContext.jsx` + `src/hooks/useTheme.js` (global dark mode state)
- [x] Create `src/hooks/useWeather.js` (extract all weather logic out of App.jsx)
- [x] Rename `SearchBar.jsx` → `Search.jsx`
- [x] Create `src/components/FavoriteCities.jsx` (extracted favorites UI)
- [x] Create `src/pages/Home.jsx` (composes all components using the hook)
- [x] Update `src/services/weatherApi.js` to use constants from `src/constants/api.js`
- [x] Refactor `App.jsx` — thin wrapper using ThemeProvider + AppContent + Home page
- [x] Update `Navbar.jsx` to consume theme via context instead of props
- [x] Update `WeatherCard.jsx` and `Forecast.jsx` to use `getWeatherIconUrl` helper
- [x] Add `.env` to `.gitignore`
- [x] Create `public/weather-icons/` and `src/assets/images/` directories
- [x] Run `npm run lint` (clean) and `npm run build` (succeeded)
