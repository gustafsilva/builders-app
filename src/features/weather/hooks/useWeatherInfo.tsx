import React from "react";

import { handleGenericError } from "core/helpers/errors";

import { useLocationStore } from "features/location/store";
import getWeatherInfo, {
  WeatherInfoResponse,
} from "features/weather/services/getWeatherInfo";

function useWeatherInfo() {
  const { currentPositionStore } = useLocationStore();

  const [weatherInfo, setWeatherInfo] =
    React.useState<WeatherInfoResponse | null>(null);
  const [loading, setLoading] = React.useState(false);

  const requestWeatherInfo = React.useCallback(async () => {
    if (loading || currentPositionStore.loading) {
      return;
    }

    try {
      setLoading(true);
      await currentPositionStore.refresh();
      if (currentPositionStore.coords === null) {
        throw new Error("Error requesting the current position");
      }

      const response = await getWeatherInfo(currentPositionStore.coords);

      if (response === null) {
        throw new Error("Error requesting the weather info");
      }

      setWeatherInfo(response);
    } catch (error) {
      handleGenericError(error);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  return React.useMemo(
    () => ({
      weatherInfo,
      loading,
      requestWeatherInfo,
    }),
    [weatherInfo, loading, requestWeatherInfo]
  );
}

export default useWeatherInfo;
