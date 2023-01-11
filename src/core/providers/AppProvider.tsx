import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import MapScreen from "screens/MapScreen";

function AppProvider() {
  return (
    <View style={styles.container}>
      <MapScreen />
      <StatusBar style="auto" />
    </View>
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
