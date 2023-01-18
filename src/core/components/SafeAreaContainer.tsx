import React from "react";
import { StyleSheet } from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

function SafeAreaContainer(props: SafeAreaViewProps) {
  return <SafeAreaView {...props} style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SafeAreaContainer;
