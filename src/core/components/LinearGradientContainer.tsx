import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";

interface LinearGradientContainerProps {
  children?: React.ReactElement;
}

function LinearGradientContainer({ children }: LinearGradientContainerProps) {
  const { theme } = useTheme();

  return (
    <LinearGradient
      colors={[theme.colors.tertiary, theme.colors.background]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LinearGradientContainer;
