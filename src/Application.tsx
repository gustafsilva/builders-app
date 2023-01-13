import React from "react";

import AppProvider from "core/providers/AppProvider";

import MainStackNavigator from "navigations/MainStackNavigator";

import LocationProvider from "features/location/providers/LocationProvider";

function Application() {
  return (
    <AppProvider>
      <LocationProvider>
        <MainStackNavigator />
      </LocationProvider>
    </AppProvider>
  );
}

export default Application;
