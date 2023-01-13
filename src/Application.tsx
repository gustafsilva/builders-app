import React from "react";

import AppProvider from "core/providers/AppProvider";

import MainStackNavigator from "navigations/MainStackNavigator";

import LocationProvider from "features/location/providers/LocationProvider";
import WeatherProvider from "features/weather/providers/WeatherProvider";

function Application() {
  return (
    <AppProvider>
      <LocationProvider>
        <WeatherProvider>
          <MainStackNavigator />
        </WeatherProvider>
      </LocationProvider>
    </AppProvider>
  );
}

export default Application;
