import React from "react";

import weatherStore, { WeatherStoreContext } from "features/weather/store";

interface WeatherProviderProps {
  children: React.ReactElement;
}

function WeatherProvider({ children }: WeatherProviderProps) {
  return (
    <WeatherStoreContext.Provider value={weatherStore}>
      {children}
    </WeatherStoreContext.Provider>
  );
}

export default WeatherProvider;
