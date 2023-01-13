import React from "react";

import AppProvider from "core/providers/AppProvider";
import MainStackNavigator from "navigations/MainStackNavigator";
import LocationPermissionProvider from "features/location/providers/LocationPermissionProvider";

function Application() {
  return (
    <AppProvider>
      <LocationPermissionProvider>
        <MainStackNavigator />
      </LocationPermissionProvider>
    </AppProvider>
  );
}

export default Application;
