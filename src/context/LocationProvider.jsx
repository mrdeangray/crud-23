import React, { createContext, useEffect, useState } from "react";

export const LocationContext = createContext(null);

const LocationProvider = ({ children }) => {
  // localStorage.clear();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const savedLocations =
      JSON.parse(localStorage.getItem("crud-23-locations")) || [];
    setLocations(savedLocations);
  }, []);

  return (
    <LocationContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
