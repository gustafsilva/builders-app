import React from "react";
import { getCurrentPositionAsync, LocationObject } from "expo-location";

import { handleGenericError } from "core/helpers/errors";

function useLocation() {
  const [location, setLocation] = React.useState<LocationObject | null>(null);
  const [loading, setLoading] = React.useState(true);

  const requestCurrentPosition = React.useCallback(async () => {
    try {
      setLoading(true);
      const newLocation = await getCurrentPositionAsync();
      setLocation(newLocation);
    } catch (error) {
      handleGenericError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return React.useMemo(
    () => ({
      location,
      loading,
      requestCurrentPosition,
    }),
    [location, loading, requestCurrentPosition]
  );
}

export default useLocation;
