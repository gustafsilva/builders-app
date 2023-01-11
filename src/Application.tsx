import React from "react";

import AppProvider from "core/providers/AppProvider";

import MainStackNavigator from "navigations/MainStackNavigator";

function Application() {
  return (
    <AppProvider>
      <MainStackNavigator />
    </AppProvider>
  );
}

export default Application;
