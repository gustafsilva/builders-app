import { action, makeAutoObservable, observable } from "mobx";

import { handleGenericError } from "core/helpers/errors";

import CurrentPositionState from "features/location/store/states/CurrentPositionState";

import WeatherForest from "features/weather/types/WeatherForest";
import getWeatherForecast from "features/weather/services/getWeatherForecast";

class WeatherForecastState {
  info: WeatherForest[] | null = null;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      info: observable,
      loading: observable,
      setInfo: action,
      setLoading: action,
    });
  }

  setInfo(info: WeatherForest[] | null) {
    this.info = info;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  async refresh(currentPositionStore: CurrentPositionState) {
    if (this.loading || currentPositionStore.loading) {
      return;
    }

    try {
      this.setLoading(true);

      await currentPositionStore.refresh();
      if (currentPositionStore.coords === null) {
        throw new Error("Error requesting the current position");
      }

      const response = await getWeatherForecast(currentPositionStore.coords);
      if (response === null) {
        throw new Error("Error requesting the weather forecast");
      }

      this.setInfo(response);
    } catch (error) {
      handleGenericError(error);
    } finally {
      this.setLoading(false);
    }
  }
}

export default WeatherForecastState;
