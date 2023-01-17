import { createContext, useContext } from "react";

import WeatherResumeState from "features/weather/store/states/WeatherResumeState";
import WeatherForecastState from "./states/WeatherForecastState";

const weatherStore = {
  weatherResumeStore: new WeatherResumeState(),
  weatherForecastStore: new WeatherForecastState(),
};

export const WeatherStoreContext = createContext(weatherStore);

export const useWeatherStore = () =>
  useContext<typeof weatherStore>(WeatherStoreContext);

export default weatherStore;
