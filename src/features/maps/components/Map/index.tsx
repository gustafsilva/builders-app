import React from "react";
import { MapViewProps } from "react-native-maps";

import LoadingScreen from "core/screens/LoadingScreen";

import useLocation from "features/locations/hooks/useLocation";

import { MapView } from "./Map.styles";

function Map(props: MapViewProps) {
  const { location, loading, requestCurrentPosition } = useLocation();

  React.useEffect(() => {
    requestCurrentPosition();
  }, [requestCurrentPosition]);

  if (loading || location === null) {
    return <LoadingScreen />;
  }

  return (
    <MapView
      region={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.08,
        longitudeDelta: 0.04,
      }}
      showsUserLocation
      {...props}
    />
  );
}

export default Map;
