import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";

import FontsProvider from "core/providers/FontsProvider";
import theme from "core/configs/theme";

interface AppProviderProps {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <FontsProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </FontsProvider>
    </ThemeProvider>
  );
}

export default AppProvider;
