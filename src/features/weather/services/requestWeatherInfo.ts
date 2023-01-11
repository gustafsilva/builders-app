import { handleGenericError } from "core/helpers/errors";

import openWeatherMapConfig from "features/weather/configs/openWeatherMapConfig";

export interface Coords {
  latitude: number;
  longitude: number;
}

export interface WeatherInfoResponse {
  region: {
    country: string;
    city: string;
  };
  weather: {
    id: number;
    description: string;
  };
  main: {
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
  };
  clouds: number;
  timezone: string;
}

async function requestWeatherInfo(coords: Coords) {
  const weatherInfoUrl = `${openWeatherMapConfig.url}?lat=${coords.latitude}&lon=${coords.longitude}&appid=${openWeatherMapConfig.key}&lang=pt_br&units=metric`;

  return fetch(weatherInfoUrl)
    .then((response) => response.json())
    .then((data: any) => ({
      region: {
        country: data.sys.country,
        city: data.name,
      },
      weather: {
        id: data.weather[0].id,
        description: data.weather[0].description,
      },
      main: {
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      },
      visibility: data.visibility,
      wind: {
        speed: data.wind.speed,
      },
      clouds: data.clouds.all,
      timezone: data.timezone,
    }))
    .catch((error) => {
      handleGenericError(error);
      return null;
    });
}

export default requestWeatherInfo;
