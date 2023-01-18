import React from "react";
import { PermissionStatus } from "expo-location";

import useLocationPermission from "features/location/hooks/useLocationPermission";
import LocationPermissionScreen from "features/location/screens/LocationPermissionScreen";

interface LocationPermissionProviderProps {
  children: React.ReactElement;
}

function LocationPermissionProvider({
  children,
}: LocationPermissionProviderProps) {
  const { status, loading, requestLocationPermission, getLocationPermission } =
    useLocationPermission();

  React.useEffect(() => {
    getLocationPermission();
  }, [getLocationPermission]);

  if (status === PermissionStatus.GRANTED) {
    return children;
  }

  return (
    <LocationPermissionScreen
      status={status}
      requestLocationPermission={requestLocationPermission}
      loading={loading}
    />
  );
}

export default LocationPermissionProvider;
