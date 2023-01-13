import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";

import theme from "core/configs/theme";
import FontsProvider from "core/providers/FontsProvider";

interface AppProviderProps {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider theme={theme}>
        <FontsProvider>
          <NavigationContainer>{children}</NavigationContainer>
        </FontsProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppProvider;
