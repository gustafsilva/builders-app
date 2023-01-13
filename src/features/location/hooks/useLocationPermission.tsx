import React from "react";
import {
  getForegroundPermissionsAsync,
  PermissionStatus,
  requestForegroundPermissionsAsync,
} from "expo-location";

import { handleGenericError } from "core/helpers/errors";

function useLocationPermission() {
  const [status, setStatus] = React.useState<PermissionStatus>(
    PermissionStatus.UNDETERMINED
  );
  const [loading, setLoading] = React.useState<boolean>(true);

  const requestLocationPermission = React.useCallback(async () => {
    try {
      const response = await requestForegroundPermissionsAsync();
      setStatus(response.status);
    } catch (error) {
      handleGenericError(error);
    }
  }, []);

  const getLocationPermission = React.useCallback(async () => {
    try {
      setLoading(true);
      const response = await getForegroundPermissionsAsync();
      setStatus(response.status);
    } catch (error) {
      handleGenericError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return React.useMemo(
    () => ({
      status,
      loading,
      requestLocationPermission,
      getLocationPermission,
    }),
    [status, loading, requestLocationPermission, getLocationPermission]
  );
}

export default useLocationPermission;
