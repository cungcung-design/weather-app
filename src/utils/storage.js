const FAVORITES_KEY = "favorites";

export const getFavoriteCities = () => {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveFavoriteCity = (city) => {
  const favorites = getFavoriteCities();
  if (!favorites.includes(city)) {
    const updated = [...favorites, city];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    return updated;
  }
  return favorites;
};

export const removeFavoriteCity = (city) => {
  const favorites = getFavoriteCities().filter((c) => c !== city);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  return favorites;
};
