import { createContext, useContext } from "react";

import WeatherResumeState from "features/weather/store/states/WeatherResumeState";

const weatherStore = {
  weatherResumeStore: new WeatherResumeState(),
};

export const WeatherStoreContext = createContext(weatherStore);

export const useWeatherStore = () =>
  useContext<typeof weatherStore>(WeatherStoreContext);

export default weatherStore;
