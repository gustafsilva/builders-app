import React from "react";
import { observer } from "mobx-react-lite";

import LoadingScreen from "core/screens/LoadingScreen";
import Container from "core/components/Container";

import Map from "features/map/components/Map";
import useCurrentPosition from "features/location/hooks/useCurrentPosition";
import WeatherBottomSheet from "features/weather/components/WeatherBottomSheet";

const MapScreen = observer(() => {
  const { currentPositionStore, requestCurrentPosition } = useCurrentPosition();
  const { coords, loading } = currentPositionStore;

  React.useEffect(() => {
    requestCurrentPosition();
  }, [requestCurrentPosition]);

  if (loading || coords === null) {
    return <LoadingScreen />;
  }

  return (
    <Container>
      <Map coords={coords} />
      <WeatherBottomSheet coords={coords} />
    </Container>
  );
});

export default MapScreen;
