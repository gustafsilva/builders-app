import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@rneui/themed";

import theme from "core/configs/theme";
import Container from "core/components/Container";

import MapScreen from "screens/MapScreen";

function AppProvider() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MapScreen />
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}

export default AppProvider;
