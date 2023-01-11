import React from "react";
import { ThemeProvider } from "@rneui/themed";

import theme from "core/configs/theme";

interface AppProviderProps {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppProvider;
