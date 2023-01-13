import { action, makeAutoObservable, observable } from "mobx";

import { handleGenericError } from "core/helpers/errors";

import CurrentPositionState from "features/location/store/states/CurrentPositionState";

import WeatherInfo from "features/weather/types/WeatherInfo";
import getWeatherInfo from "features/weather/services/getWeatherInfo";

class WeatherResumeState {
  info: WeatherInfo | null = null;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      info: observable,
      loading: observable,
      setInfo: action,
      setLoading: action,
    });
  }

  setInfo(info: WeatherInfo | null) {
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

      const response = await getWeatherInfo(currentPositionStore.coords);
      if (response === null) {
        throw new Error("Error requesting the weather info");
      }

      this.setInfo(response);
    } catch (error) {
      handleGenericError(error);
    } finally {
      this.setLoading(false);
    }
  }
}

export default WeatherResumeState;
