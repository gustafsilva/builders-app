import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import Container from "core/components/Container";

interface FontsProviderProps {
  children: React.ReactElement;
}

SplashScreen.preventAutoHideAsync();

export default function FontsProvider({ children }: FontsProviderProps) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("core/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("core/assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Container onLayout={onLayoutRootView}>{children}</Container>;
}
