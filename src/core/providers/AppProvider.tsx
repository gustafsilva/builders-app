import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "@rneui/themed";

import theme from "core/configs/theme";
import MapScreen from "screens/MapScreen";

function AppProvider() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <MapScreen />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppProvider;
