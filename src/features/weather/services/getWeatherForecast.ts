import moment from "moment";

import Coords from "core/types/coords";
import { handleGenericError } from "core/helpers/errors";

import WeatherForest from "features/weather/types/WeatherForest";
import openWeatherMapConfig from "features/weather/configs/openWeatherMapConfig";

async function getWeatherForecast(
  coords: Coords
): Promise<WeatherForest[] | null> {
  const weatherForecastUrl = `${openWeatherMapConfig.url}forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${openWeatherMapConfig.key}&lang=pt_br&units=metric`;

  return fetch(weatherForecastUrl)
    .then((response) => response.json())
    .then((json) => json.list)
    .then((list) =>
      list.map(
        (forecast: any) =>
          ({
            id: Number(forecast.weather[0].id),
            date: moment(forecast.dt_txt),
            description: forecast.weather[0].description,
            temp: Number(forecast.main.temp),
            tempMin: Number(forecast.main.temp_min),
            tempMax: Number(forecast.main.temp_max),
          } as WeatherForest)
      )
    )
    .then((res) => {
      // console.log('[GusLog] getWeatherForecast:\n', JSON.stringify(res))

      return res;
    })
    .catch((error) => {
      handleGenericError(error);
      return null;
    });
}

export default getWeatherForecast;
