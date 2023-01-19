import React from "react";
import { StyleSheet, ViewProps } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";

import theme from "core/configs/theme";
import FontsProvider from "core/providers/FontsProvider";

interface AppProviderProps extends ViewProps {
  children: React.ReactNode;
}

function AppProvider({ children, ...props }: AppProviderProps) {
  return (
    <GestureHandlerRootView style={styles.container} {...props}>
      <ThemeProvider theme={theme}>
        <FontsProvider>
          <NavigationContainer>
            <SafeAreaProvider>{children}</SafeAreaProvider>
          </NavigationContainer>
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
