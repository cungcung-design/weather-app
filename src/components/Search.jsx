function Search({ city, setCity, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch();
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        aria-label="City name"
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
