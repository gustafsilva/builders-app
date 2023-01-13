import React from "react";
import { MapViewProps } from "react-native-maps";
import { LocationObject } from "expo-location";

import { MapView } from "./Map.styles";

interface MapProps extends MapViewProps {
  location: LocationObject;
}

function Map(props: MapProps) {
  const { location } = props;

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
