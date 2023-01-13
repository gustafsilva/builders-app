import { action, makeAutoObservable, observable } from "mobx";
import { getCurrentPositionAsync } from "expo-location";

import Coords from "core/types/coords";
import { handleGenericError } from "core/helpers/errors";

class CurrentPositionState {
  coords: Coords | null = null;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      coords: observable,
      loading: observable,
      setCoords: action,
      setLoading: action,
    });
  }

  setCoords(coords: Coords | null) {
    this.coords = coords;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  async refresh() {
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
      this.setLoading(false);
    }
  }
}

export default CurrentPositionState;
