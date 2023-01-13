import React from "react";
import { MapViewProps } from "react-native-maps";

import Coords from "core/types/coords";

import { MapView } from "./Map.styles";

interface MapProps extends MapViewProps {
  coords: Coords | null;
}

function Map(props: MapProps) {
  const { coords } = props;

  const region = React.useMemo(
    () =>
      coords !== null
        ? {
            ...coords,
            latitudeDelta: 0.08,
            longitudeDelta: 0.04,
          }
        : undefined,
    [coords]
  );

  return <MapView region={region} showsUserLocation {...props} />;
}

export default Map;
