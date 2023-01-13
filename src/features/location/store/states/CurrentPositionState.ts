import { action, makeAutoObservable, observable } from "mobx";
import { getCurrentPositionAsync } from "expo-location";
import moment from "moment";

import Coords from "core/types/coords";
import { handleGenericError } from "core/helpers/errors";

class CurrentPositionState {
  coords: Coords | null = null;
  loading: boolean = false;
  lastUpdateOn: Date | null = null;

  constructor() {
    makeAutoObservable(this, {
      coords: observable,
      loading: observable,
      lastUpdateOn: observable,
      setCoords: action,
      setLoading: action,
      setLastUpateOn: action,
    });
  }

  setCoords(coords: Coords | null) {
    this.coords = coords;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setLastUpateOn(lastUpdateOn: Date | null) {
    this.lastUpdateOn = lastUpdateOn;
  }

  async refresh() {
    if (this.loading) {
      return;
    }

    const secondsSinceTheLastRefresh = moment(new Date()).diff(
      this.lastUpdateOn,
      "seconds"
    );
    if (this.lastUpdateOn !== null && secondsSinceTheLastRefresh <= 30) {
      return;
    }

    try {
      this.setLoading(true);
      const position = await getCurrentPositionAsync();
      this.setCoords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    } catch (error) {
      this.setCoords(null);
      handleGenericError(error);
    } finally {
      this.setLastUpateOn(new Date());
      this.setLoading(false);
    }
  }
}

export default CurrentPositionState;
