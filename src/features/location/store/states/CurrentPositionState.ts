import { action, makeAutoObservable, observable } from "mobx";

import Coords from "core/types/coords";

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
}

export default CurrentPositionState;
