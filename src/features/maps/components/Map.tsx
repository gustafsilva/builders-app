import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: "100%",
    width: "100%",
  },
});

export default Map;
