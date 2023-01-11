import { handleGenericError } from "core/helpers/errors";
import React from "react";

import requestWeatherInfo, {
  Coords,
  WeatherInfoResponse,
} from "features/weather/services/requestWeatherInfo";

function useWeatherInfo() {
  const [weatherInfo, setWeatherInfo] =
    React.useState<WeatherInfoResponse | null>(null);
  const [loading, setLoading] = React.useState(false);

  const getWeatherInfo = React.useCallback(
    async (coords: Coords) => {
      if (loading) {
        return;
      }

      try {
        setLoading(true);
        const response = await requestWeatherInfo(coords);
        if (response) {
          setWeatherInfo(response);
        }
      } catch (error) {
        handleGenericError(error);
      } finally {
        setLoading(false);
      }
    },
    [loading]
  );

  return React.useMemo(
    () => ({
      weatherInfo,
      loading,
      getWeatherInfo,
    }),
    [weatherInfo, loading, getWeatherInfo]
  );
}

export default useWeatherInfo;
