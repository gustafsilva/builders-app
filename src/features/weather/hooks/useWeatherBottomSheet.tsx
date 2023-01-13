import React from "react";
import { useNavigation } from "@react-navigation/native";

import PATHS from "navigations/PATHS.json";

import useWeatherResume from "features/weather/hooks/useWeatherResume";

function useWeatherBottomSheet() {
  const { weatherResumeStore, refresh } = useWeatherResume();
  const navigation = useNavigation();

  const bottomSheetRef = React.useRef(null);

  const moreInfo = React.useCallback(() => {
    navigation.navigate(PATHS.WeatherResume as never);
  }, []);

  return React.useMemo(
    () => ({
      bottomSheetRef,
      weatherResumeStore,
      moreInfo,
      refresh,
    }),
    [bottomSheetRef, weatherResumeStore, moreInfo, refresh]
  );
}

export default useWeatherBottomSheet;
