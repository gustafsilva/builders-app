import { createContext, useContext } from "react";

import CurrentPositionState from "features/location/store/states/CurrentPositionState";

const locationStore = {
  currentPositionStore: new CurrentPositionState(),
};

export const LocationStoreContext = createContext(locationStore);

export const useLocationStore = () =>
  useContext<typeof locationStore>(LocationStoreContext);

export default locationStore;
