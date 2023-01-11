import React from "react";
import { StatusBar } from "expo-status-bar";

import AppProvider from "core/providers/AppProvider";
import Container from "core/components/Container";

import MapScreen from "screens/MapScreen";

function Application() {
  return (
    <AppProvider>
      <Container>
        <MapScreen />
        <StatusBar style="auto" />
      </Container>
    </AppProvider>
  );
}

export default Application;
