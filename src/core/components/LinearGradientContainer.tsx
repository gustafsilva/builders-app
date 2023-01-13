import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@rneui/themed";

interface LinearGradientContainerProps {
  children: React.ReactNode;
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
