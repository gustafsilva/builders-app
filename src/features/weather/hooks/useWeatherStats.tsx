import React from "react";
import moment from "moment";

import { useLocationStore } from "features/location/store";

import WeatherForest from "features/weather/types/WeatherForest";
import { useWeatherStore } from "features/weather/store";
import useWeatherResume from "features/weather/hooks/useWeatherResume";

function useWeatherStats() {
  const { currentPositionStore } = useLocationStore();
  const { weatherForecastStore } = useWeatherStore();
  const { weatherResumeStore } = useWeatherResume();

  const refreshAll = React.useCallback(async () => {
    await weatherResumeStore.refresh(currentPositionStore);
    await weatherForecastStore.refresh(currentPositionStore);
  }, [currentPositionStore]);

  const weatherForecastOfNextDays = React.useMemo(() => {
    if (weatherForecastStore.loading || weatherForecastStore.info === null) {
      return null;
    }

    const forecastDays = [1, 2, 3, 4, 5].map((days) =>
      moment().add(days, "days").startOf("day")
    );
    return forecastDays.map((forecastDay) => {
      const weatherForecastStoreInfo =
        weatherForecastStore.info as WeatherForest[];
      const weatherForests = weatherForecastStoreInfo.filter(
        (weatherForest) =>
          forecastDay.diff(
            moment(weatherForest.date.startOf("day")).startOf("day"),
            "days"
          ) === 0
      );
      const tempMinOfDay = weatherForests
        .map((weatherForest) => weatherForest.temp)
        .sort(
          (weatherForestTemp, weatherForestTempNext) =>
            weatherForestTemp - weatherForestTempNext
        )[0];
      const tempMaxOfDay = weatherForests
        .map((weatherForest) => weatherForest.temp)
        .sort(
          (weatherForestTemp, weatherForestTempNext) =>
            weatherForestTempNext - weatherForestTemp
        )[0];

      return {
        id: weatherForecastStoreInfo[0].id,
        date: forecastDay,
        description: weatherForecastStoreInfo[0].description,
        tempMinOfDay,
        tempMaxOfDay,
      };
    });
  }, [weatherForecastStore.info, weatherForecastStore.loading]);

  return React.useMemo(
    () => ({
      currentPositionStore,
      weatherForecastStore,
      weatherResumeStore,
      weatherForecastOfNextDays,
      refreshAll,
    }),
    [
      currentPositionStore,
      weatherForecastStore,
      weatherResumeStore,
      weatherForecastOfNextDays,
      refreshAll,
    ]
  );
}

export default useWeatherStats;
