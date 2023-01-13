import React from "react";
import { useNavigation } from "@react-navigation/native";

import PATHS from "navigations/PATHS.json";

import useWeatherResume from "features/weather/hooks/useWeatherResume";

function useWeatherBottomSheet() {
  const { weatherResumeStore, refresh } = useWeatherResume();
  const navigation = useNavigation();

  const [isOpen, setIsOpen] = React.useState(false);
  const bottomSheetRef = React.useRef(null);

  const moreInfo = React.useCallback(() => {
    navigation.navigate(PATHS.WeatherResume as never);
  }, []);

  const handleSheetChanges = React.useCallback((index: number) => {
    if (index === 0) {
      setIsOpen(false);
    }
    if (index === 1) {
      setIsOpen(true);
    }
  }, []);

  return React.useMemo(
    () => ({
      bottomSheetRef,
      weatherResumeStore,
      isOpen,
      refresh,
      moreInfo,
      handleSheetChanges,
    }),
    [
      bottomSheetRef,
      weatherResumeStore,
      isOpen,
      refresh,
      moreInfo,
      handleSheetChanges,
    ]
  );
}

export default useWeatherBottomSheet;
