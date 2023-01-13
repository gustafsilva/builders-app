import React from "react";
import { getCurrentPositionAsync } from "expo-location";

import { handleGenericError } from "core/helpers/errors";

import { useLocationStore } from "features/location/store";

function useCurrentPosition() {
  const { currentPositionStore } = useLocationStore();

  const requestCurrentPosition = React.useCallback(async () => {
    try {
      currentPositionStore.setLoading(true);
      const { coords } = await getCurrentPositionAsync();
      currentPositionStore.setCoords(coords);
    } catch (error) {
      currentPositionStore.setCoords(null);
      handleGenericError(error);
    } finally {
      currentPositionStore.setLoading(false);
    }
  }, [currentPositionStore]);

  return React.useMemo(
    () => ({
      currentPositionStore,
      requestCurrentPosition,
    }),
    [currentPositionStore, requestCurrentPosition]
  );
}

export default useCurrentPosition;
