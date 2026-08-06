import useWeather from "../hooks/useWeather";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Search from "../components/Search";
import LocationButton from "../components/LocationButton";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import FavoriteCities from "../components/FavoriteCities";

function Home() {
  const {
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
  } = useWeather();

  return (
    <section id="home">
      <Search city={city} setCity={setCity} onSearch={searchWeather} />

      <LocationButton getLocation={getLocationWeather} />

      <button onClick={addFavorite} className="favorite-button">
        ⭐ Save City
      </button>

      <FavoriteCities favorites={favorites} onSelect={selectFavorite} />

      {loading && <Loading />}

      {error && <ErrorMessage message={error} />}

      <WeatherCard weatherData={weather} />

      {forecast && <Forecast forecast={forecast} />}
    </section>
  );
}

export default Home;
