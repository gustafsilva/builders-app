import React from "react";
import { PermissionStatus } from "expo-location";

import LoadingScreen from "core/screens/LoadingScreen";

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

  if (loading) {
    return <LoadingScreen />;
  }

  if (status === PermissionStatus.GRANTED) {
    return children;
  }

  return (
    <LocationPermissionScreen
      status={status}
      requestLocationPermission={requestLocationPermission}
    />
  );
}

export default LocationPermissionProvider;
