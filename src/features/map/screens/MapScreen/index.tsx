import React from "react";
import { observer } from "mobx-react-lite";

import Container from "core/components/Container";

import Map from "features/map/components/Map";
import WeatherBottomSheet from "features/weather/components/WeatherBottomSheet";
import { useLocationStore } from "features/location/store";

const MapScreen = observer(() => {
  const { currentPositionStore } = useLocationStore();

  React.useEffect(() => {
    currentPositionStore.refresh();
  }, []);

  return (
    <Container>
      <Map coords={currentPositionStore.coords} />
      <WeatherBottomSheet />
    </Container>
  );
});

export default MapScreen;
