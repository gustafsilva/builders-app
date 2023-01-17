import React from "react";

import { useLocationStore } from "features/location/store";

import { useWeatherStore } from "features/weather/store";
import useWeatherResume from "features/weather/hooks/useWeatherResume";

function useWeatherStats() {
  const { currentPositionStore } = useLocationStore();
  const { weatherForecastStore } = useWeatherStore();
  const { weatherResumeStore, refresh: refreshWeatherResume } =
    useWeatherResume();

  const refresh = React.useCallback(async () => {
    await refreshWeatherResume();
    await weatherForecastStore.refresh(currentPositionStore);
  }, [currentPositionStore]);

  const loading = React.useMemo(
    () => weatherForecastStore.loading || weatherResumeStore.loading,
    [weatherForecastStore.loading, weatherResumeStore.loading]
  );

  return React.useMemo(
    () => ({
      weatherForecastStore,
      weatherResumeStore,
      loading,
      refresh,
    }),
    [weatherForecastStore, weatherResumeStore, loading, refresh]
  );
}

export default useWeatherStats;
