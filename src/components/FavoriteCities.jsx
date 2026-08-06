function FavoriteCities({ favorites, onSelect }) {
  if (!favorites || favorites.length === 0) {
    return null;
  }

  return (
    <div id="favorites" className="favorites">
      <p className="favorites-label">Recent cities</p>
      <div className="favorites-list">
        {favorites.map((item) => (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className="favorite-chip"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FavoriteCities;
