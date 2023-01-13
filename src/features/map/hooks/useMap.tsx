import React from "react";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";

import Coords from "core/types/coords";
import { ONE_SECOND_IN_MS } from "core/configs/time";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.006339428281933124;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function useMap() {
  const mapRef = React.useRef<MapView | null>(null);
  const [lastCoords, setLastCoords] = React.useState<Coords | null>(null);

  const handleAnimation = React.useCallback(
    (coords: Coords) => {
      if (mapRef.current === null) {
        return;
      }

      const region = {
        ...coords,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };

      setLastCoords(coords);
      mapRef.current.animateToRegion(region, 2 * ONE_SECOND_IN_MS);
    },
    [mapRef.current, lastCoords]
  );

  return React.useMemo(
    () => ({
      mapRef,
      lastCoords,
      handleAnimation,
    }),
    [mapRef, lastCoords, handleAnimation]
  );
}

export default useMap;
