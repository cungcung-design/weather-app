function LocationButton({ getLocation }) {
  return (
    <button onClick={getLocation} className="location-button">
      📍 Use My Location
    </button>
  );
}

export default LocationButton;
