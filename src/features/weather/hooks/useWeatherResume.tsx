import React from "react";

import { useLocationStore } from "features/location/store";

import { useWeatherStore } from "features/weather/store";

function useWeatherResume() {
  const { currentPositionStore } = useLocationStore();
  const { weatherResumeStore } = useWeatherStore();

  const refresh = React.useCallback(() => {
    weatherResumeStore.refresh(currentPositionStore);
  }, [currentPositionStore]);

  return React.useMemo(
    () => ({
      weatherResumeStore,
      refresh,
    }),
    [weatherResumeStore, refresh]
  );
}

export default useWeatherResume;
