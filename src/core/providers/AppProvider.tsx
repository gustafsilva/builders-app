import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";

import theme from "core/configs/theme";

interface AppProviderProps {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NavigationContainer>
  );
}

export default AppProvider;
