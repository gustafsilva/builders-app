import React from "react";
import { MapViewProps } from "react-native-maps";

import Coords from "core/types/coords";

import { MapView } from "./Map.styles";

interface MapProps extends MapViewProps {
  coords: Coords;
}

function Map(props: MapProps) {
  const { coords } = props;

  return (
    <MapView
      region={{
        ...coords,
        latitudeDelta: 0.08,
        longitudeDelta: 0.04,
      }}
      showsUserLocation
      {...props}
    />
  );
}

export default Map;
