import React from "react";

import AppProvider from "core/providers/AppProvider";
import MainStackNavigator from "navigations/MainStackNavigator";
import LocationPermissionProvider from "features/locations/providers/LocationPermissionProvider";

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
