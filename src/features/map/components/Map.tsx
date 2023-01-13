import React from "react";
import { StyleSheet } from "react-native";
import MapView, { MapViewProps } from "react-native-maps";

import Coords from "core/types/coords";

import useMap from "../hooks/useMap";
import { useLocationStore } from "features/location/store";
import { observer } from "mobx-react-lite";

interface MapProps extends MapViewProps {
  coords: Coords | null;
}

const Map = observer((props: MapProps) => {
  const { currentPositionStore } = useLocationStore();
  const { mapRef, lastCoords, handleAnimation } = useMap();

  React.useEffect(() => {
    if (mapRef.current === null || currentPositionStore.coords === null) {
      return;
    }
    if (
      lastCoords !== null &&
      lastCoords.latitude === currentPositionStore.coords.latitude &&
      lastCoords.longitude === currentPositionStore.coords.longitude
    ) {
      return;
    }

    handleAnimation(currentPositionStore.coords);
  }, [mapRef.current, currentPositionStore.coords]);

  return (
    <MapView ref={mapRef} showsUserLocation style={styles.map} {...props} />
  );
});

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
});

export default Map;
